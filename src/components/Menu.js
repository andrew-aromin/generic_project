"use client";
import { Breadcrumb, Menu, Layout } from "antd";

const { Header } = Layout;

const items = [
  {
    key: 0,
    label: "Home",
  },
  {
    key: 1,
    label: "About",
  },
];

export default function MenuBar() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
}
