import Menu from "./Menu";
import { Icon } from 'antd';
import styles from '../style.less';
import Link from "umi/link";
import Search from "./Search";

function Nav({ location }) {
  return (
    <div className={styles.nav}>
      <div className={styles.navItem}>
        <Link to="/"><Icon className={styles.icon} type="home" />首页</Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/users"><Icon className={styles.icon} type="user" />粉丝</Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/posts"><Icon className={styles.icon} type="read" />发现</Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/fans"><Icon className={styles.icon} type="compass" />关注</Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/404"><Icon className={styles.icon} type="frown" />404</Link>
      </div>
      <div className={styles.navItem}>
        <Search />
      </div>
      {/*<Menu location={location} />*/}
    </div>
  );
}

export default Nav;
