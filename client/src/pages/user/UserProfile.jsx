import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [history, setHistory] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const profileResponse = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (profileResponse) {
          setProfile(profileResponse.data);

          setUserData((prevUserData) => ({
            ...prevUserData,
            image: profileResponse.data.image || prevUserData.image,
            username: profileResponse.data.userName || prevUserData.username,
            email: profileResponse.data.email || prevUserData.email,
            phoneNumber:
              profileResponse.data.mobileNumber || prevUserData.phoneNumber,
          }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const userHistory = async () => {
      try {
        if (profile._id) {
          const historyResponse = await axios.get(
            `http://localhost:5000/api/user/history/${profile._id}`
          );

          if (historyResponse) {
            setHistory(historyResponse.data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    userHistory();
  }, [profile._id]);

  const handleEdit = (field, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const saveUserData = () => {
    console.log("Updated User Data:", userData);
    setEditMode(false);
  };

  const gradientBackground = {
    background: "linear-gradient(#3566b6, white)",
    height: "100vh",
  };

  if (!profile) {
    return <ShowMessage message="No Token !" type="info" />;
  }

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <section style={gradientBackground}>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4 nav"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    My Profile
                  </li>
                </ol>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={logOutHandler}
                >
                  <span style={{ marginRight: "8px" }}>
                    <i className="fas fa-sign-out"></i>
                  </span>{" "}
                  Log Out
                </button>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <div className="position-relative">
                    {editMode ? (
                      <>
                        <img
                          src={userData.image}
                          alt="avatar"
                          className="rounded-circle img-fluid custom-avatar"
                        />
                        <label className="custom-edit-btn">
                          <i className="fas fa-edit"></i>
                          <input
                            type="file"
                            onChange={(e) => handleImageChange(e)}
                          />
                        </label>
                      </>
                    ) : (
                      <img
                        src={userData.image}
                        alt="avatar"
                        className="rounded-circle img-fluid custom-avatar"
                      />
                    )}
                  </div>

                  <h5 className="my-3">
                    {editMode ? (
                      <>
                        <input
                          type="text"
                          className="form-control custom-input"
                          value={userData.username}
                          onChange={(e) =>
                            handleEdit("username", e.target.value)
                          }
                        />
                      </>
                    ) : (
                      <>{userData.username}</>
                    )}
                  </h5>
                  <p className="text-muted mb-1 my-3">
                    {editMode ? (
                      <>
                        <input
                          type="text"
                          className="form-control custom-input"
                          value={userData.email}
                          onChange={(e) => handleEdit("email", e.target.value)}
                        />
                      </>
                    ) : (
                      <>{userData.email}</>
                    )}
                  </p>
                  <p className="text-muted mb-4c my-3">
                    {editMode ? (
                      <>
                        <input
                          type="text"
                          className="form-control custom-input"
                          value={userData.phoneNumber}
                          onChange={(e) =>
                            handleEdit("phoneNumber", e.target.value)
                          }
                        />
                      </>
                    ) : (
                      <>{userData.phoneNumber}</>
                    )}
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    {editMode ? (
                      <button
                        type="button"
                        className="btn btn-primary custom-btn"
                        onClick={() => saveUserData()}
                      >
                        <span style={{ marginRight: "8px" }}>
                          <i className="fas fa-save"></i>
                        </span>{" "}
                        Save
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary custom-btn"
                        onClick={() => setEditMode(true)}
                      >
                        <span style={{ marginRight: "8px" }}>
                          <i className="fas fa-edit"></i>
                        </span>{" "}
                        Update Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h5>My Booking History</h5>
                  {/* Add your custom styles for the booking history here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
