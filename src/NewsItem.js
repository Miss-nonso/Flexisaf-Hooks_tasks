import React from "react";

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  return (
    <div style={styles.newsItem}>
      {urlToImage && <img src={urlToImage} alt={title} style={styles.image} />}
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.source}>Source: {source.name}</p>
        <p style={styles.description}>{description}</p>
        <p style={styles.date}>
          Published on: {new Date(publishedAt).toLocaleDateString()}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.readMore}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

const styles = {
  newsItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "10px"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold"
  },
  source: {
    fontSize: "14px",
    color: "#555"
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.5"
  },
  date: {
    fontSize: "14px",
    color: "#999"
  },
  readMore: {
    fontSize: "14px",
    color: "#1a73e8",
    textDecoration: "none"
  }
};

export default NewsItem;
