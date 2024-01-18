/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb, Divider, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useStore } from "./store/user-store";

const { Header, Content, Sider } = Layout;

const navItems = [
  {
    key: "user",
    label: "User",
  },
  {
    key: "role",
    label: "Role",
  },
];

const App = () => {
  const { user }: any = useStore();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(user);

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ color: "white", width: "160px" }}
          onClick={() => navigate("/")}
        >
          Logo
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            items={navItems}
            onClick={(e) => {
              navigate(e.key);
            }}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>
              <strong>User logged in: </strong>
              <div>{user ? user.username : "Not logged in"}</div>
            </div>
            <Divider />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
