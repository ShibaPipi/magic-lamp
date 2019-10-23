import React from 'react';
import { connect } from 'dva';
import { Row, Col, Carousel, Card, Icon, Avatar } from 'antd';
import Menu from './components/Menu'
import styles from './index.less';

const { Meta } = Card;

function IndexPage() {
  return (
    <Row>
      <Row className={styles.title} gutter={[16, 16]} type="flex" justify="center" align="middle">
        <Col>
          <img className={styles.logo} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
        </Col>
        <Col>
          <div>Doge Blog</div>
        </Col>
      </Row>
      <Menu />
      <Carousel style={{ marginBottom: '70px' }} autoplay>
        <div className={styles.slickSlide}>
          <h3>1</h3>
        </div>
        <div className={styles.slickSlide}>
          <h3>2</h3>
        </div>
        <div className={styles.slickSlide}>
          <h3>3</h3>
        </div>
        <div className={styles.slickSlide}>
          <h3>4</h3>
        </div>
      </Carousel>
      <Row type="flex" justify="center">
        <Col className={`${styles.leftContent} ${styles.col}`} span={12}>
          <Card
            hoverable
            cover={<img alt="example" src="https://www.17sucai.com/preview/1324218/2018-08-10/3133/images/blog/2.jpg" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col className={`${styles.rightContent} ${styles.col}`} span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    </Row>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
