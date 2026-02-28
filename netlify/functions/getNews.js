export const handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, OPTIONS"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    // Primary API: GNews
    let response = await fetch('https://gnews.io/api/v4/search?q=football&lang=en&country=us&apikey=54ee5934eb244374ad0a7c3aa960d277');
    if (response.ok) {
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        const articles = data.articles.slice(0, 3).map(a => ({
          title: a.title,
          date: a.publishedAt,
          source: a.source.name,
          url: a.url,
          description: a.description
        }));
        return { statusCode: 200, headers, body: JSON.stringify({ success: true, data: articles }) };
      }
    }

    // Fallback 1: HaoKan
    response = await fetch('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10&type=football');
    if (response.ok) {
      const data = await response.json();
      if (data.result && data.result.list && data.result.list.length > 0) {
        const articles = data.result.list.slice(0, 3).map(a => ({
          title: a.title,
          date: new Date().toISOString(),
          source: a.userName || 'HaoKan',
          url: a.playUrl,
          description: a.description || ''
        }));
        return { statusCode: 200, headers, body: JSON.stringify({ success: true, data: articles }) };
      }
    }

    // Fallback 2: RapidAPI (Mocking the call structure as it requires headers normally)
    // If we reach here and all fail, we throw to trigger the elegant fallback
    throw new Error("All APIs failed to return valid data");

  } catch (error) {
    console.error("News API Error:", error);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: false, mode: "fallback" })
    };
  }
};
