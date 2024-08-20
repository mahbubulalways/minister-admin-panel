import {
  UploadOutlined,
  DashboardOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
  path?: string;
  children?: {
    key: string;
    label: string;
    path?: string;
  }[];
}
export const menuItems: MenuItem[] = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    path: "/",
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: "Products",
    children: [
      { key: "1-1", label: "All Products", path: "/all-products" },
      { key: "1-2", label: "Add Product", path: "/add-product" },
    ],
  },
  {
    key: "3",
    icon: <VideoCameraOutlined />,
    label: "Category",
    children: [
      { key: "2-1", label: "All Category", path: "/all-categories" },
      { key: "2-2", label: "Add Category", path: "/add-category" },
    ],
  },
  {
    key: "4",
    icon: <UploadOutlined />,
    label: "Orders",
    children: [
      { key: "3-1", label: "All Orders", path: "/all-orders" },
      { key: "3-2", label: "Pending Orders", path: "/pending-orders" },
      { key: "3-3", label: "Complete Orders", path: "/complete-orders" },
    ],
  },
  {
    key: "44",
    icon: <UploadOutlined />,
    label: "Manage Banners",
    children: [
      { key: "4-1", label: "All Banners", path: "/all-orders" },
      { key: "4-2", label: "Upload New Banner", path: "/pending-orders" },
    ],
  },
  {
    key: "5",
    icon: <UploadOutlined />,
    label: "Manage Users",
    path: "/manage-users",
  },
];
