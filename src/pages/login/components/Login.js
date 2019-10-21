import { connect } from 'dva';
import styles from './style.less';
import { Redirect } from "react-router-dom";
import LoginForm from './LoginForm';

function Login({ dispatch, loginState }) {
  function loginHandler(values) {
    dispatch({
      type: 'token/get',
      payload: values
    })
  }

  if (!loginState) {
    return (
      <div className={styles.loginWrapper}>
        <LoginForm onClick={loginHandler} />
      </div>
    );
  } else {
    return <Redirect to='/' />
  }
}

function mapStateToProps(state) {
  const { loginState } = state.token;

  return {
    loginState
  }
}

export default connect(mapStateToProps)(Login);
