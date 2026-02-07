import React, { useState } from "react";

const BlogList = () => {
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Creative Problem Solver",
      author: "Ian Atkinson",
      content:
        "This book introduces 12 creative problem solving techniques which not only change our perspective but also enable us to be confident enough to solve other problem.",
    },
    {
      id: 2,
      title: "Manat",
      author: "Achyut Godbole",
      content:
        "This book takes us on a journey into the intriguing worl of Psychology. Its origin, the more you read the weird facts you know.",
    },
    {
      id: 3,
      title: "DSM 5",
      author: "American Psychological Association",
      content:
        "The publication of DSM 5 brings innovation to the coding-classification, and diagnosis of mental disorders that have far-reaching effects across many disciplines.",
    },
  ];

  // State to track which post is expanded
  const [expandedPostId, setExpandedPostId] = useState(null);

  // Handle click to toggle expanded state
  const handleToggle = (id) => {
    setExpandedPostId((prev) => (prev === id ? null : id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Blog Posts</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {blogPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <h2
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
              onClick={() => handleToggle(post.id)}
            >
              {post.title}
            </h2>
            {expandedPostId === post.id && (
              <div
                style={{
                  marginTop: "10px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <p>
                  <strong>Author:</strong> {post.author}
                </p>
                <p>{post.content}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
