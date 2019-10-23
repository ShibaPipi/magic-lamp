import { Row, Col, Icon } from 'antd';
import Link from 'umi/link';
import styles from '../index.less';

function Menu() {
  return (
    <Row  className={styles.menu} type="flex" justify="center">
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
