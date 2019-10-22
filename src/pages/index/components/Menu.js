import { Menu as AntdMenu, Icon } from 'antd';
import Link from 'umi/link';

const MenuItem = AntdMenu.Item;

function Menu({ location }) {
  return (
    <AntdMenu
      selectedKeys={[location.pathname]}
      mode="horizontal"
    >
      <MenuItem key="/">
        <Link to="/"><Icon type="home" />首页</Link>
      </MenuItem>
      <MenuItem key="/users">
        <Link to="/users"><Icon type="user" />粉丝</Link>
      </MenuItem>
      <MenuItem key="/posts">
        <Link to="/posts"><Icon type="read" />发现</Link>
      </MenuItem>
    </AntdMenu>
  );
}

export default Menu;
