"use client";
import { Layout } from "antd";
import MenuBar from "../components/Menu";
const { Content } = Layout;

export default function Page() {
  return (
    <Layout className={"h-screen"}>
      <MenuBar />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div>Content</div>
      </Content>
    </Layout>
  );
}
