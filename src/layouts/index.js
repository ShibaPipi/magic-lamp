import React from 'react';
import styles from '../style/common.less';
import AdminHeader from './AdminHeader';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
  return (
    <div className={styles.normal}>
      <AdminHeader location={location} />

      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Layout);
