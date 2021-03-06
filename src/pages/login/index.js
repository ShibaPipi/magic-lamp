import { connect } from 'dva';
import styles from './login.less';
import { Redirect } from "react-router-dom";
import LoginForm from './components/LoginForm';

function Login({ dispatch }) {
  function loginHandler(values) {
    dispatch({
      type: 'token/get',
      payload: values
    })
  }

  if ('true' !== localStorage.getItem('loginState')) {
    return (
      <div className={styles.loginWrapper}>
        <LoginForm onClick={loginHandler} />
      </div>
    );
  } else {
    return <Redirect to='/' />
  }
}

export default connect()(Login);
