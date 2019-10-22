import Menu from "./Menu";
import { Icon } from 'antd';
import styles from '../style.less';
import Link from "umi/link";
import Search from "./Search";

function Nav({ location }) {
  return (
    <div className={styles.nav}>
      <Menu location={location} />
    </div>
  );
}

export default Nav;
