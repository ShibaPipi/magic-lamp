import { Icon } from 'antd';
import styles from '../style.less';
import { CSSTransition } from "react-transition-group";

function Search() {
  return (
    <div>
      <CSSTransition
        // in={}
        timeout={500}
        classNames="slide"
      >
        <input className={styles.navSearch} type="text"/>
      </CSSTransition>
      <Icon className={styles.zoom} type="search" />
    </div>
  );
}

export default Search;
