import React from "react";
import Post from "./Post";
// JavaScript source code

class Posts extends React.Component {
  render() {
    const { posts } = this.props; // берём из пропсов

    if (!posts || posts.length === 0) {
      return <p>Нет постов для отображения</p>;
    }

    return (
      <>
        {posts.map(post => (
          <Post
            key={post.id} // обязательно нужен key
            title={post.title}
            description={post.description}
          />
        ))}
      </>
    );
  }
}

export default Posts;

