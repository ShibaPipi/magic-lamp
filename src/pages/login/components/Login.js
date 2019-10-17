import { connect } from 'dva';
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { Redirect } from "react-router-dom";

function Login({ dispatch, loginState }) {
  function loginHandler(values) {
    dispatch({
      type: 'login/index',
      payload: values
    })
  }

  if (!loginState) {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" />
          <Input type="password" placeholder="密码" />
          <Button onClick={loginHandler}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    );
  } else {
    return <Redirect to="/" />
  }
}

function mapStateToProps(state) {
  const { loginState } = state.login;

  return {
    loginState
  }
}

export default connect(mapStateToProps)(Login);
