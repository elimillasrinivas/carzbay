<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import History from './Histories';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
=======
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import History from "./Histories";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  font-family: "Arial", sans-serif;
>>>>>>> dc068db (init4)
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Header = styled.header`
  background-color: #1e0c60;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const Nav = styled.nav`
  background-color: #1e0c60;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
<<<<<<< HEAD
  background-color: ${(props) => (props.active ? '#fff' : '#1e0c60')};
  color: ${(props) => (props.active ? '#1e0c60' : '#fff')};
=======
  background-color: ${(props) => (props.active ? "#fff" : "#1e0c60")};
  color: ${(props) => (props.active ? "#1e0c60" : "#fff")};
>>>>>>> dc068db (init4)
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 5px;
<<<<<<< HEAD
  font-size: ${(props) => (props.active ? '20px' : 'inherit')};
=======
  font-size: ${(props) => (props.active ? "20px" : "inherit")};
>>>>>>> dc068db (init4)
`;

const Section = styled.section`
  padding: 20px;
`;

const AdminDashboard = () => {
<<<<<<< HEAD
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('profile');
  const [userData, setUserData] = useState({});
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const fetchAdminProfile = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get('https://server-carzbay.onrender.com/api/admin/profile',{
        headers:{
          Authorization:token
        }
      });
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const fetchAllHistory = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get('https://server-carzbay.onrender.com/api/admin/all/histories',{
        headers:{
          Authorization:token
        }
      });
      setUserHistory(response.data);
    } catch (error) {
      console.error('Error fetching user history:', error);
    }
  };

  const handleButtonClick = (section) => {
    // Fetch user history data when switching to the history section
    if (section === 'history') {
      fetchAllHistory();
    }
    setActiveSection(section);
  };

  return (
    <Container>
      <Header>
        <h1>{userData.userName} Dashboard</h1>
      </Header>
      <Nav>
        <Button
          active={activeSection === 'profile'}
          onClick={() => handleButtonClick('profile')}
        >
          Profile
        </Button>
        <Button
          active={activeSection === 'history'}
          onClick={() => handleButtonClick('history')}
        >
          All History
        </Button>
        <Button
          active={activeSection === 'dataentry'}
          onClick={() => navigate("/admin/data-entry")}
        >
          Enter Data
        </Button>
        <Button
          active={activeSection === 'dataentry'}
          onClick={() => {
            localStorage.removeItem("token")
            navigate("/")
          }}
        >
          Log Out
        </Button>
      </Nav>
      <Section>
        {activeSection === 'profile' ? (
          <Profile userData={userData} fetchAdminProfile={fetchAdminProfile} />
        ) : (
          <History userHistories={userHistory} />
        )}
      </Section>
    </Container>
  );
};

export default AdminDashboard;

=======
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [activeSection, setActiveSection] = useState("profile");
  const [userData, setUserData] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if(!token){
      return navigate("/")
    }
    fetchAdminProfile();
  }, [token]);

  const fetchAdminProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/profile",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setUserData(response.data);
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Container>
      {userData && (
        <Header>
          <h1>{userData.userName}'s Dashboard</h1>
        </Header>
      )}
      <Nav>
        <Button
          active={activeSection === "profile"}
          onClick={() => handleButtonClick("profile")}
        >
          Profile
        </Button>
        <Button
          active={activeSection === "history"}
          onClick={() => handleButtonClick("history")}
        >
          All History
        </Button>
        <Button
          active={activeSection === "dataentry"}
          onClick={() => navigate("/admin/data-entry")}
        >
          Enter Data
        </Button>
        <Button
          active={activeSection === "dataentry"}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          Log Out
        </Button>
      </Nav>
      <Section>
        {dataFetched ? (
          <>
            {activeSection === "profile" ? (
              <Profile
                userData={userData}
                fetchAdminProfile={fetchAdminProfile}
              />
            ) : (
              <History />
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Section>
    </Container>
  );
};

export default AdminDashboard;
>>>>>>> dc068db (init4)
