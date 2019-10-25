import { Menu as AntdMenu, Icon } from 'antd';
import Search from "./Search";
import Link from 'umi/link';
import styles from '../style.less';

const MenuItem = AntdMenu.Item;

function Menu({ location }) {
  return (
    <AntdMenu
      selectedKeys={[location.pathname]}
      mode="horizontal"
    >
      <MenuItem className={styles.navItem} key="/">
        <Link to="/"><Icon type="home" />首页</Link>
      </MenuItem>
      <MenuItem className={styles.navItem} key="/users">
        <Link to="/users"><Icon type="user" />粉丝</Link>
      </MenuItem>
      <MenuItem className={styles.navItem} key="/posts">
        <Link to="/posts"><Icon type="read" />发现</Link>
      </MenuItem>
      <MenuItem className={styles.navItem} key="/fans">
        <Link to="/fans"><Icon type="compass" />关注</Link>
      </MenuItem>
      <MenuItem className={styles.navItem} key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown" />404</Link>
      </MenuItem>
      <MenuItem className={styles.navItem}>
        <Link to="/write">
            <Icon type="highlight" />写文章
        </Link>
      </MenuItem>
      <MenuItem className={styles.navItem}>
        注册
      </MenuItem>
      <MenuItem className={styles.navItem}>
        <Link to='/login'>登录</Link>
      </MenuItem>
      <MenuItem>
        <Search />
      </MenuItem>
    </AntdMenu>
  );
}

export default Menu;
