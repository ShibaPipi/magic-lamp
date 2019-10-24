import { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from '../login.less';
import Link from "umi/link";

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {onClick, form} = this.props;
    form.validateFields((err, values) => {
      !err && onClick(values);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>记住我</Checkbox>)}
          <Link className={styles.loginFormForgot} to="/">
            忘记密码
          </Link>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            Log in
          </Button>
          或者&nbsp;<a href="">立即注册</a>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
