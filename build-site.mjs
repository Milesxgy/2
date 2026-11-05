import { readFileSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const packed = readFileSync(path.join(root, 'website-release.tar.gz'));
if (createHash('sha256').update(packed).digest('hex') !== '783ac060073f75feecfc65747387a19a1257c9f964204e36d6ffc56cecec56d3') throw new Error('Website archive checksum mismatch');
const tar = gunzipSync(packed);
const entries = [];
for (let offset = 0; offset + 512 <= tar.length;) {
  const header = tar.subarray(offset, offset + 512);
  if (header.every(byte => byte === 0)) break;
  const name = header.subarray(0, 100).toString('utf8').split('\0')[0];
  const size = Number.parseInt(header.subarray(124, 136).toString('ascii').replace(/\0/g, '').trim() || '0', 8);
  const type = header[156];
  if (!name || name.includes('\\') || path.posix.isAbsolute(name) || name.split('/').some(part => part === '..') || !Number.isSafeInteger(size) || size < 0) throw new Error('Invalid archive entry');
  if (type !== 0 && type !== 48) throw new Error('Only regular files are supported');
  const start = offset + 512;
  if (start + size > tar.length) throw new Error('Truncated archive');
  entries.push([name, tar.subarray(start, start + size)]);
  offset = start + Math.ceil(size / 512) * 512;
}
if (!entries.some(([name]) => name === 'index.html')) throw new Error('Missing website entrypoint');
const output = path.join(root, 'dist');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
for (const [name, data] of entries) {
  const destination = path.join(output, name);
  mkdirSync(path.dirname(destination), { recursive: true });
  writeFileSync(destination, data);
}
console.log(`Built ${entries.length} website files to dist/`);
