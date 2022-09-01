import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Reddit() {
  const {
    data: posts,
    isLoading,
    errorMessage,
  } = useFetch("https://www.reddit.com/r/goodanimemes.json");

  return (
    <div>
      <h2>Reddit API</h2>
      {isLoading && <div>Loading...</div>}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.data.id}>
              <a
                href={`https://reddit.com${post.data.permalink}`}
                target="_blank"
                rel="noreferrer"
              >
                {post.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}
