import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, List, Button, Pagination, Space, Select } from "antd";
import { fetchUsers } from "../actions/userActions";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const { users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const cred = useLocation();
  const nav = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!cred.state || error) {
      nav("/error");
    } else {
      setFilteredUsers(users);
    }
  }, [nav, cred, error, users]);

  const handleFilter = () => {
    let filtered = users.filter(
      (user) =>
        user.first_name.startsWith("G") || user.last_name.startsWith("W")
    );

    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleShowAll = () => {
    setFilteredUsers(users);
    setCurrentPage(1); // Reset page number to 1 when showing all records
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Layout>
      <Header addLogoutButton />
      <div className="MainContent">
        <h1 style={{ fontSize: 30 }}>Home</h1>
        <Space style={{ paddingInlineStart: 20 }}>
          <Button type="primary" onClick={handleShowAll}>
            Show All
          </Button>
          <Button type="primary" onClick={handleFilter}>
            Filtered Records
          </Button>
          <div style={{ float: "right" }}>
            <label>Page Size: </label>
            <Select
              defaultValue={pageSize}
              style={{
                width: 150,
              }}
              onChange={(value) => setPageSize(value)}
              options={[
                {
                  label: "Recommended: 4",
                  options: [
                    {
                      label: "1",
                      value: 1,
                    },
                    {
                      label: "2",
                      value: 2,
                    },
                    {
                      label: "3",
                      value: 3,
                    },
                    {
                      label: "4",
                      value: 4,
                    },
                  ],
                },
              ]}
            />
          </div>
        </Space>
        <List
          style={{ marginTop: 40, width: "100%", padding: 20 }}
          grid={{ column: pageSize, xs: 1, sm: 1, md: 2, lg: 4 }}
          dataSource={paginatedUsers}
          renderItem={(user) => (
            <List.Item key={user.id}>
              <List.Item.Meta
                avatar={<img src={user.avatar} alt={user.first_name} />}
                title={
                  <h2 style={{ fontSize: 26 }}>
                    {user.first_name} {user.last_name}
                  </h2>
                }
                description={user.email}
              />
            </List.Item>
          )}
        />
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredUsers.length}
          onChange={handleChangePage}
          style={{
            marginTop: 16,
            textAlign: "left",
            padding: 2,
            marginLeft: 20,
          }}
        />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
