import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { menuItems } from "./Sidebar";
import ministerLogo from "../../public/Minister_logo.png";

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      {/* Fixed Sidebar */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          zIndex: 1000, // Ensures it stays on top of other elements
        }}
        width={200}
      >
        <div className="flex flex-col items-center py-4">
          <img
            src={ministerLogo}
            alt="Logo"
            className={`w-[150px] px-2 md:px-0`}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="py-2"
        >
          {menuItems.map((item) =>
            item.children ? (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((subItem) => (
                  <Menu.Item key={subItem.key}>
                    <NavLink to={subItem?.path as string}>
                      {subItem.label}
                    </NavLink>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                <NavLink to={item?.path as string}> {item.label}</NavLink>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200, // Offset content to match sidebar's width
          transition: "all 0.3s",
        }}
      >
        <Header
          style={{
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
          <div className="ml-auto pr-4">
            <Button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
              type="primary"
            >
              Logout
            </Button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "calc(100vh - 80px)",
            overflowY: "auto",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
