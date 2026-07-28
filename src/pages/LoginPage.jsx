import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { login as loginRequest } from "../utils/api";
import { isAuthenticated, setAuth } from "../utils/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const data = await loginRequest(values.email, values.password);
      setAuth(data.token, data.user);
      message.success("Login successful");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      message.error(error.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001b3d] via-[#0a2a4a] to-[#001b3d] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/95 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-light tracking-wide text-[#001b3d]">
            Elaria
          </h1>
          <p className="mt-2 text-sm text-gray-500">Admin sign in</p>
        </div>

        <Form layout="vertical" onFinish={handleSubmit} requiredMark={false}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              size="large"
              placeholder="admin@elaria.com"
              autoComplete="username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              size="large"
              placeholder="Password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            block
            className="mt-2 border-none bg-[#efae4c] hover:!bg-[#d89b3e]"
          >
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
