import React from 'react';
import styles from '../style/common.less';
import AdminHeader from './AdminHeader';
import Header from '../components/header';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
  return (
    <div>
      <Header location={location} />
      {/*<AdminHeader location={location} />*/}
      <div className={styles.container}>
          {children}
      </div>
      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
}

export default withRouter(Layout);
