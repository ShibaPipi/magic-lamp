import React from 'react';
import styles from '../style/common.less';
import AdminHeader from './AdminHeader';
import Header from '../components/header';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      {/*<AdminHeader location={location} />*/}
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Layout);
