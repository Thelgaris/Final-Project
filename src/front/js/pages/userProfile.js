import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/userprofile.css";
import { Context } from "../store/appContext";
import { Sportmodal } from "../component/sportmodal";

export const UserProfile = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [sport, setSport] = useState([]);
  const [error, setError] = useState(null);
  const { store, actions } = useContext(Context);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    actions.getSports();
  }, []);

  const sendUserInfo = async () => {
    setError(null);
    user["sports"] = store.getUserSports;
    console.log(store.getUserSports);
    const response = await fetch(store.url + "/userprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("@@@@@@@@@@@", data);
    history.push("/homepageafterlogin");
  };

  const uploadImage = (evt) => {
    evt.preventDefault();
    console.log("This are the files", files);
    let body = new FormData();
    body.append("profile_image", files[0]);
    const options = {
      body,
      methos: "POST",
    };
    const currentUserId = localStorage.getItem("user_id");
    fetch(`${process.env.BACKEND_URL}/user/${currentUserId}/image`, options)
      .then((resp) => resp.json())
      .then((data) => console.log("Success!", data))
      .catch((error) => console.Console.error("Error!", error));
  };

  return (
    <div className="container mt-5 text-center">
      <div className="row justify-content-center">
        <div className="jumbotron jumbotron-fluid w-50">
          <div className="container-fluid">
            <h1 className="display-4">UNETE</h1>
            <h2 style={{ color: "gray" }}></h2>
          </div>
        </div>
      </div>
      <div className="button-container">
        <img
          className="avatar mt-4 mb-4"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <form onSubmit={uploadImage}>
          <input type="file" onChange={(ec) => setFiles(e.target.files)} />
          <button>
            Upload
            {/* <i className="fas fa-camera fa-2x" style={{ fontsize: "50px" }}></i> */}
          </button>
        </form>
      </div>
      <div className="input-group mx-auto mb-3 w-25">
        <div>
          <input
            id="name"
            type="text"
            className="form-control text-center"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Nombre"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mx-auto mb-3 w-25">
          <input
            id="surname"
            type="select"
            className="form-control text-center"
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
            placeholder="Apellidos"
            aria-label="surname"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mx-auto mb-3 w-25">
          <input
            id="birth"
            type="date"
            className="birth form-control text-center"
            onChange={(e) => setUser({ ...user, birth: e.target.value })}
            placeholder="Birth"
            aria-label="Birth"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mx-auto mb-3 w-25">
          <select
            className="text-center"
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
          >
            <option></option>
            <option>Hombre</option>
            <option>Mujer</option>
          </select>
        </div>

        <div className="input-group mx-auto mb-3 w-25">
          <input
            id="city"
            type="text"
            className="form-control text-center"
            onChange={(e) => setUser({ ...user, city: e.target.value })}
            placeholder="Ciudad"
            aria-label="City"
            aria-describedby="basic-addon1"
          />
        </div>

        <div>
          <Sportmodal
            setSport={(e) => {
              if (!sport.includes(e)) {
                setSport([...sport, e]);
              } else {
                setSport(sport.filter((i) => e != i));
              }
            }}
          />
        </div>

        <div>
          <button
            type="button"
            className="btn save-btn btn-warning text-white mx-auto mt-2"
            onClick={() => sendUserInfo()}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
