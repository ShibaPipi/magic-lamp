import { connect } from "dva";
import {Card} from 'antd';

function Posts({ dispatch, data }) {
  return (
<div>
  <Card title={data.title}>
    <p dangerouslySetInnerHTML={{ __html: data.content }} />
  </Card>
</div>
);
}

export default connect((state) => {
  const { data } = state.posts;

  return { data };
})(Posts);
