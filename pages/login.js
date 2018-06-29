import { Form, Icon, Input, Button, Checkbox, Layout } from "antd";
const FormItem = Form.Item;
//import dynamic from 'next/dynamic'
import AntStyles from "../lib/AntStyles";
import Head from 'next/head';
const { Content } = Layout;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
   
  };
  render() {
    return (
      <div>

        <Head>
          <title>Login</title>
        </Head>

        <AntStyles />
     
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            
            <Form className="login-form">
      
              <FormItem>
               
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
              
              </FormItem>
              <FormItem>
                
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
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
          </Content>
        </Layout>
      </div>
    );
  }
}

export default NormalLoginForm;
