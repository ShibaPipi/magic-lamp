import Link from "umi/link";
import { Icon } from 'antd';
import styles from '../style.less';

function Addition() {
  return (
    <div className={styles.addition}>
      <Link to="/write">
        <button className={`${styles.button} ${styles.writing}`}>
          <Icon type="highlight" />
          写文章
        </button>
      </Link>
      <button className={`${styles.button} ${styles.reg}`}>注册</button>
    </div>
  );
}

export default Addition;
