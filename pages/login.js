import { Form, Icon, Input, Button, Checkbox, Layout, Spin } from "antd";
const FormItem = Form.Item;
//import dynamic from 'next/dynamic'
import AntStyles from "../lib/AntStyles";
import Head from "next/head";

import loginActions from "../actions/loginActions";
import { connect } from "react-redux";
const { Content, Header, Footer } = Layout;

class NormalLoginForm extends React.Component {
  form = {
    username: "",
    password: ""
  };


  onFormSubmit = async e => {
    e.preventDefault();

    await loginActions.authorise({
      ...this.form,
      dispatch: this.props.dispatch
    });

    
  };


  render() {
    return (
      <div>
        <Head>
          <title>Login</title>
        </Head>

        <AntStyles />

        <Layout>
          <Content style={{ margin: "24px auto" }}>
            <Spin spinning={!!this.props.loading}>
              <Form className="login-form" onSubmit={this.onFormSubmit}>
                <FormItem name="username">
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                    name="username"
                    onChange={e => (this.form["username"] = e.target.value)}
                  />
                </FormItem>
                <FormItem>
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                    onChange={e => (this.form["password"] = e.target.value)}
                  />
                </FormItem>
                <FormItem>
                  <Checkbox>Remember me</Checkbox>
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Log in
                  </Button>
                  Or <a href="">register now!</a>
                </FormItem>
              </Form>
            </Spin>
          </Content>
        </Layout>
      </div>
    );
  }
}

//export default NormalLoginForm;
export default connect()(NormalLoginForm);
