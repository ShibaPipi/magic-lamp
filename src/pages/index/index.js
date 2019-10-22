import React from 'react';
import { connect } from 'dva';
import { Typography, Carousel } from 'antd';
import Menu from './components/Menu'
import styles from './index.less';

const { Title } = Typography;

function IndexPage({ location }) {
  // return (
  //   <div className={styles.normal}>
  //     <h1 className={styles.title}>Yay! Welcome to dva!</h1>
  //     <div className={styles.welcome} />
  //     <ul className={styles.list}>
  //       <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
  //       <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
  //     </ul>
  //   </div>
  // );
  return (
    <div>
      <div>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
        <Title>Doge Blog</Title>
        <Menu location={location} />
      </div>
      <div>
        <Carousel autoplay>
          <div className={styles.slickSlide}>
            <h3>1</h3>
          </div>
          <div className={styles.slickSlide}>
            <h3>2</h3>
          </div>
        </Carousel>
        <div>banner</div>
        <div>
          <div>posts</div>
          <div>recommends</div>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
