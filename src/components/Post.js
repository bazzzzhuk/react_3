import React from "react";

class Post extends React.Component {
  render() {
    const { title, description } = this.props;
    return (
      <fieldset>
        <legend style={{ fontWeight: 'bold' }}>{title}</legend>
        <p>{description}</p>
      </fieldset>
    );
  }
}

export default Post;