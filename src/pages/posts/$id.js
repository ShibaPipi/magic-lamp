import React, { Component } from 'react';
import { connect } from "dva";
import { Card } from 'antd';

class Posts extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div>
        <Card title={this.props.data.title}>
          <p dangerouslySetInnerHTML={{ __html: this.props.data.content }}/>
        </Card>
      </div>
    )
  };
}

export default connect((state) => {
  const { data } = state.posts;

  return { data };
})(Posts);
