import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout, List, Button, Space } from "antd";
import { fetchUsers } from "../actions/userActions";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users, error } = useSelector((state) => state.users);

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (!user) {
      nav("/");
    }
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const retrieveFilteredData = () => {
    try {
      dispatch(fetchUsers(true));
    } catch (err) {
      console.error("Error fetching data:", err, error);
      setFilteredUsers([]);
    }
  };

  const handleShowAll = () => {
    try {
      dispatch(fetchUsers());
    } catch (err) {
      console.error("Error fetching data in Show All:", err, error);
      setFilteredUsers([]);
    }
  };

  return (
    <Layout>
      <Header addLogoutButton />
      <div className="MainContent">
        <h1 style={{ fontSize: 30 }}>Home</h1>
        <Space style={{ paddingInlineStart: 20 }}>
          <Button type="primary" onClick={handleShowAll}>
            Show All
          </Button>
          <Button type="primary" onClick={retrieveFilteredData}>
            Filtered
          </Button>
        </Space>
        <List
          style={{ marginTop: 40, width: "100%", padding: 20 }}
          dataSource={filteredUsers}
          renderItem={(user) => (
            <List.Item key={user.id}>
              <List.Item.Meta
                avatar={
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    height={64}
                    width={64}
                  />
                }
                title={user.first_name + " " + user.last_name}
                description={user.email}
              />
            </List.Item>
          )}
        />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
