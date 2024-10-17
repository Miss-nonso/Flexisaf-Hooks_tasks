import React, { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";
const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  const lastNewsElementRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}&page=${page}&pageSize=10`
        );
        const data = await response.json();
        if (data.articles.length === 0) {
          setHasMore(false);
        } else {
          setNews((prevNews) => [...prevNews, ...data.articles]);
        }
      } catch (error) {
        console.error("Error fetching the news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.heading}>The Rich Coin News</h1>
      <div style={styles.newsContainer}>
        {news.map((article, index) => {
          if (news.length === index + 1) {
            return (
              <div ref={lastNewsElementRef} key={index + 1 + article.url}>
                <NewsItem article={article} />
              </div>
            );
          } else {
            return <NewsItem key={article.url} article={article} />;
          }
        })}
      </div>
      {loading && <h2 style={styles.loadingText}>Loading...</h2>}
    </div>
  );
};

const styles = {
  appContainer: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f5f5f5"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },
  newsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  loadingText: {
    textAlign: "center",
    marginTop: "20px"
  }
};

export default App;
