import React, { useEffect, useState } from "react";

export default function App() {
  const [graph, setGraph] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/graph")
      .then(res => res.json())
      .then(setGraph);

    fetch("http://localhost:4000/api/news")
      .then(res => res.json())
      .then(setNews);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Investment Graph</h1>

      <h2>Graph Data</h2>
      <pre>{JSON.stringify(graph, null, 2)}</pre>

      <h2>📰 Live News</h2>
      <ul>
        {news.map((item, idx) => (
          <li key={idx}>
            <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
