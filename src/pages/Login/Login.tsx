import React, {useState} from "react";
import { saveToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Avatar,
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  message,
} from "antd";
// import React from "react";
import Icon from "@ant-design/icons";
import reactLogo from "../../assets/react.svg";

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("")

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
      message.error("Failed:", errorInfo);
    };

  const navigate = useNavigate()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/login",
        user
      );
      
      console.log(data);
      
        if (data.status >= 400) {
          setError(data)
          return;
        }
        
        saveToken(data.accessToken)
        navigate("/Home")
    }
    catch (error) { }
  }

  return (
    <div>
      {/* <form onSubmit={onSubmit} action="">
        <div>
        <input
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
          type="email"
          name=""
          id=""
        />
        </div>
        <div>
          <input
                                  className=" p-[10px] w-[100%] border-[2px] border-gray-400 rounded-[10px] mt-[15px]"

          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
          type="password"
          name=""
          id=""
        />
        </div>
        <button type="submit">Submit</button>
      </form> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundSize: "cover",
          backgroundImage: `url(
          "https://media.istockphoto.com/id/1160967859/photo/man-holding-modern-mobile-smartphone-with-login-form.jpg?b=1&s=612x612&w=0&k=20&c=JVF7t1yiRC1suDBhRV5LPcPn_HvL-4eD75jqadc5bsE="
        )`,
        }}
      >
        <div
          style={{
            width: 340,
            padding: 20,
            background: "#353333",
            color: "white",
            borderRadius: 10,
          }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            initialValues={{
              remember: false,
            }}
            // onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            //   autoComplete="off"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
              }}
            >
              <Avatar size={100} icon={<img src={reactLogo} alt="user" />} />
            </div>

            <Form.Item
              label={<label style={{ color: "#fff" }}>Email</label>}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              label={<label style={{ color: "#fff" }}>Password</label>}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Checkbox style={{ color: "#fff" }}>Remember me</Checkbox>
                <a style={{ float: "right" }} href="">
                  Forgot password
                </a>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                onClick={onSubmit}
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login
