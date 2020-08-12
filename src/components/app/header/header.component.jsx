import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.style.scss";
import { Menu } from "antd";
import {
  BarsOutlined,
  AuditOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import Icon from "@ant-design/icons";

const { SubMenu } = Menu;

const Header = ({ history }) => {
  const signOut = () => {
    localStorage.setItem("employee", "");
    history.push("/signIn-Register");
  };

  const LogoSvg = () => (
    <svg
      id="Capa_1"
      enable-background="new 0 0 497 497"
      height="35"
      viewBox="0 0 497 497"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="m196.27 90.09v52.97c0 10.31-8.36 18.68-18.69 18.68h-5.37v24.97h-45.36l4.65-27.377 4.3-69.243z"
          fill="#ffcebf"
        />
        <path
          d="m172.21 161.74v24.97h-12.67v-20.36c0-2.546 2.064-4.61 4.61-4.61z"
          fill="#ffb09e"
        />
        <path
          d="m215.92 75.86c.07 5.46-2.11 10.41-5.68 13.97-3.5 3.51-8.35 5.68-13.71 5.68h-40.5c-6.49 0-11.75 5.26-11.75 11.75v41.99c0 6.9-5.6 12.49-12.5 12.49h-27.27c-8.54 0-14.72-8.17-12.4-16.4l8.18-28.91c2.14-7.55 3.23-15.37 3.23-23.21v-.01c0-20.14 16.33-36.48 36.48-36.48h56.03c10.69 0 19.74 8.44 19.89 19.13z"
          fill="#87523e"
        />
        <path
          d="m140.03 95.51h16c-6.49 0-11.75 5.26-11.75 11.75v41.99c0 6.9-5.6 12.49-12.5 12.49h-16c6.9 0 12.5-5.59 12.5-12.49v-41.99c0-6.49 5.26-11.75 11.75-11.75z"
          fill="#7c4b37"
        />
        <path
          d="m215.92 75.86c.07 5.46-2.11 10.41-5.68 13.97-3.5 3.51-8.35 5.68-13.71 5.68h-16c5.36 0 10.21-2.17 13.71-5.68 3.57-3.56 5.75-8.51 5.68-13.97-.15-10.69-9.2-19.13-19.89-19.13h16c10.69 0 19.74 8.44 19.89 19.13z"
          fill="#7c4b37"
        />
        <path
          d="m185.46 190.34v140.88l-51.136 10.607-51.134-10.607 13.31-130.18c1.24-12.11 11.45-21.32 23.63-21.32h54.71c5.87 0 10.62 4.75 10.62 10.62z"
          fill="#ffd15b"
        />
        <path
          d="m185.46 190.34v140.88l-13.25 2.748-6.75-2.748v-140.88c0-5.87-4.75-10.62-10.62-10.62h20c5.87 0 10.62 4.75 10.62 10.62z"
          fill="#ffc344"
        />
        <path
          d="m235.89 331.22 9.61 30.23-9.61 30.23h-106.55c-27.1 0-48.67-22.73-47.24-49.79l1.09-10.67z"
          fill="#5a5a5a"
        />
        <path
          d="m235.89 331.22 9.61 30.23-9.61 30.23h-24.64v-60.46z"
          fill="#444"
        />
        <g>
          <path
            d="m405.726 266.365c-.749 0-1.511-.113-2.264-.351-3.949-1.249-6.138-5.464-4.89-9.413l35.05-110.57c1.25-3.948 5.461-6.135 9.413-4.89 3.949 1.249 6.138 5.464 4.89 9.413l-35.05 110.57c-1.012 3.197-3.966 5.241-7.149 5.241z"
            fill="#ddeafb"
          />
        </g>
        <path d="m298.06 247.27h119.28v32.03h-119.28z" fill="#ddeafb" />
        <path d="m386.76 247.27h30.58v32.03h-30.58z" fill="#cbe2ff" />
        <path
          d="m180.16 416.4c-.23 13.34-11.5 23.87-24.84 23.87h-97.95c-31.69 0-57.37-25.69-57.37-57.37v-174.63c0-5.91 2.48-10.87 6.24-14.29 6.63-6.08 17.28-7.4 25.4-.85 2.16 1.72 3.89 3.87 5.13 6.28 1.22 2.4 1.96 5.07 2.1 7.83l8.54 161.24c.69 13.01 11.44 23.2 24.46 23.2h84c6.71 0 12.78 2.72 17.17 7.12 4.49 4.49 7.24 10.72 7.12 17.6z"
          fill="#5a5a5a"
        />
        <path
          d="m71.87 391.68h-26.39c-13.02 0-23.77-10.19-24.46-23.2l-8.54-161.24c-.14-2.76-.88-5.43-2.1-7.83-1.04-2.03-2.43-3.87-4.14-5.43 6.63-6.08 17.28-7.4 25.4-.85 2.16 1.72 3.89 3.87 5.13 6.28 1.22 2.4 1.96 5.07 2.1 7.83l8.54 161.24c.69 13.01 11.44 23.2 24.46 23.2z"
          fill="#444"
        />
        <path
          d="m180.16 416.4c-.23 13.34-11.5 23.87-24.84 23.87h-26.39c13.34 0 24.61-10.53 24.84-23.87.12-6.88-2.63-13.11-7.12-17.6-4.39-4.4-10.46-7.12-17.17-7.12h26.39c6.71 0 12.78 2.72 17.17 7.12 4.49 4.49 7.24 10.72 7.12 17.6z"
          fill="#444"
        />
        <path
          d="m314.729 279.298h-39.121l-5.441-18.525 5.441-20.596c21.606 0 39.121 17.515 39.121 39.121z"
          fill="#ffcebf"
        />
        <path
          d="m275.61 240.18v39.12h-57.84c-14.23 0-27.76-6.22-37.01-17.03l-41.41-48.35c-8.36-9.77-5.62-23.39 3.29-30.11 3.36-2.54 7.6-4.1 12.45-4.1 2.94 0 5.81.63 8.44 1.8 2.63 1.18 5.02 2.91 6.99 5.1l33.49 37.36c9.25 10.32 22.44 16.21 36.29 16.21z"
          fill="#ffd15b"
        />
        <path
          d="m240.3 240.18h-24.8c-13.85 0-27.05-5.89-36.29-16.21l-32.835-39.095c-.94-1.04-2.375-1.375-3.735-1.065 3.36-2.54 7.6-4.1 12.45-4.1 2.94 0 5.81.63 8.44 1.8 2.63 1.18 5.02 2.91 6.99 5.1l33.49 37.36c9.25 10.32 22.44 16.21 36.29 16.21z"
          fill="#ffc344"
        />
        <g>
          <path
            d="m342.408 114.039c-4.143 0-7.5-3.357-7.5-7.5v-16.36c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v16.359c0 4.143-3.357 7.501-7.5 7.501z"
            fill="#fff0ad"
          />
        </g>
        <g>
          <path
            d="m304.619 121.795c-2.89 0-5.644-1.68-6.876-4.497l-6.555-14.989c-1.659-3.795.072-8.217 3.867-9.877 3.794-1.659 8.217.072 9.877 3.867l6.555 14.989c1.659 3.795-.072 8.217-3.867 9.877-.977.427-1.998.63-3.001.63z"
            fill="#fff0ad"
          />
        </g>
        <g>
          <path
            d="m380.196 121.795c-1.004 0-2.023-.202-3.001-.631-3.796-1.659-5.526-6.081-3.866-9.876l6.556-14.989c1.659-3.796 6.085-5.529 9.876-3.866 3.796 1.659 5.526 6.081 3.866 9.876l-6.556 14.989c-1.231 2.817-3.985 4.497-6.875 4.497z"
            fill="#fff0ad"
          />
        </g>
        <path
          d="m497 313.796v118.704c0 4.289-3.477 7.767-7.767 7.767h-245.576c-4.289 0-7.767-3.477-7.767-7.767v-118.7l170.61-8.8z"
          fill="#ddeafb"
        />
        <path
          d="m497 313.8v118.7c0 4.29-3.48 7.77-7.77 7.77h-26.5c4.29 0 7.77-3.48 7.77-7.77v-121.28z"
          fill="#cbe2ff"
        />
        <path
          d="m497 287.066v26.734h-261.11v-34.5h253.343c4.29 0 7.767 3.477 7.767 7.766z"
          fill="#5a5a5a"
        />
        <path
          d="m497 287.07v26.73h-26.5v-26.73c0-4.29-3.48-7.77-7.77-7.77h26.5c4.29 0 7.77 3.48 7.77 7.77z"
          fill="#444"
        />
      </g>
    </svg>
  );
  const LogoIcon = (props) => <Icon component={LogoSvg} {...props} />;
  const roleLoggedIn = JSON.parse(localStorage.getItem("employee")).employee
    .role;
  const employeeId = JSON.parse(localStorage.getItem("employee")).employee._id;
  let defaultPage;
  let profilePage;
  if (roleLoggedIn == "admin") {
    defaultPage = (
      <Link className="logo-container" to="/employees">
        <LogoIcon
          style={{
            marginLeft: "20px",
            marginRight: "50px",
            marginTop: "5px",
          }}
        ></LogoIcon>
      </Link>
    );
  } else {
    defaultPage = (
      <Link className="logo-container" to={`/profile/${employeeId}`}>
        <LogoIcon
          style={{ marginLeft: "20px", marginRight: "50px", marginTop: "5px" }}
        ></LogoIcon>
      </Link>
    );
  }
  if (roleLoggedIn == "admin") {
    profilePage = (
      <Menu.Item key="mail" icon={<BarsOutlined />}>
        <Link className="option" to="/employees">
          Employees
        </Link>
      </Menu.Item>
    );
  } else {
    profilePage = (
      <Menu.Item key="profile" icon={<AuditOutlined />}>
        <Link className="option" to={`/profile/${employeeId}`}>
          Profile
        </Link>
      </Menu.Item>
    );
  }

  let masterPage;

  if (roleLoggedIn == "admin") {
    masterPage = (
      <SubMenu icon={<SettingOutlined />} title="Masters">
        <Menu.Item key="setting:1">City</Menu.Item>
        <Menu.Item key="setting:2">State</Menu.Item>
      </SubMenu>
    );
  } else {
    masterPage = null;
  }
  return (
    <Menu mode="horizontal" style={{ marginBottom: "20px" }} theme="light">
      {defaultPage}

      <Menu.Item key="app" icon={<AuditOutlined />}>
        <Link className="option" to="/reviews">
          Reviews
        </Link>
      </Menu.Item>

      {profilePage}
      {masterPage}
      <Menu.Item key="" style={{ position: "absolute", right: 20, top: 5 }}>
        {localStorage.getItem("employee") ? (
          <a onClick={signOut}>Sign Out</a>
        ) : (
          <Link className="option" to="/signIn-Register">
            Sign In
          </Link>
        )}
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(Header);
