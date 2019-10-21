import Nav from './components/Nav'
import Addition from "./components/Addition";
import Link from 'umi/link';
import styles from './style.less';

const Header = ({ location }) => {
  return (
    <div className={styles.headerWrapper}>
      <Link to='/'>
        <div className={styles.logo} />
      </Link>
      <Nav location={location}/>
      <Addition />
    </div>
  );
};

Header.propTypes = {};

export default Header;
