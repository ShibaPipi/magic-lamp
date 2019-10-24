import { Row, Col, Icon } from 'antd';
import Link from 'umi/link';
import styles from '../index.less';
import React from "react";

function Menu({ menuAffixed }) {
  return (
    // className={menuAffixed ? styles.affix : ''}
  <Row  className={`${styles.menu} ${menuAffixed ? styles.affix : ''}`} type="flex" justify="center" align="middle">
      <Col className={styles.menuItem} key="/">
        <Link to="/"><Icon className={styles.icon} type="home" />首页</Link>
      </Col>
      <Col className={styles.menuItem} key="/users">
        <Link to="/users"><Icon className={styles.icon} type="user" />粉丝</Link>
      </Col>
      <Col className={styles.menuItem} key="/posts">
        <Link to="/posts"><Icon className={styles.icon} type="read" />发现</Link>
      </Col>
    </Row>
  );
}

export default Menu;
