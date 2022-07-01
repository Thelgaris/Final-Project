import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/userprofile.css";
import { Context } from "../store/appContext";
import { Sportmodal } from "../component/sportmodal";

export const UserProfile = () => {
  const history = useHistory();
  const [user, setUser] = useState({ gender: "Hombre", sports: [] });
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
    let body = new FormData();
    for (let key in user) {
      body.append(key, user[key]);
    }
    const response = await fetch(store.url + "/userprofile", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: body,
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
      method: "POST",
    };
    const currentUserId = localStorage.getItem("user_id");
    fetch(process.env.BACKEND_URL + "/userprofile", options)
      .then((resp) => resp.json())
      .then((data) => console.log("Success!", data))
      .catch((error) => console.error("Error!", error));
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
        <form>
          <input
            type="file"
            onChange={(e) =>
              setUser({ ...user, profile_image_url: e.target.files[0] })
            }
          />
          {/* <button>
            <i className="fas fa-camera fa-2x" style={{ fontsize: "50px" }}></i>
            Upload
          </button> */}
        </form>
      </div>
      <div className="container">
        <div className="row mx-auto">
          <div className="d-grid gap-4 col-lg-12 col-sm align-self-center mb-3">
            <input
              id="name"
              type="text"
              className="form-control text-center w-25 mx-auto"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Nombre"
              aria-label="Name"
              aria-describedby="basic-addon1"
            />
            <input
              id="surname"
              type="select"
              className="form-control text-center w-25 mx-auto"
              onChange={(e) => setUser({ ...user, surname: e.target.value })}
              placeholder="Apellidos"
              aria-label="surname"
              aria-describedby="basic-addon1"
            />
            <input
              id="birth"
              type="date"
              className="birth form-control text-center w-25 mx-auto"
              onChange={(e) => setUser({ ...user, birth: e.target.value })}
              placeholder="Birth"
              aria-label="Birth"
              aria-describedby="basic-addon1"
            />
            <select
              className="text-center w-25 mx-auto"
              defaultValue={"h"}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option value={"Hombre"}>Hombre</option>
              <option value={"Mujer"}>Mujer</option>
            </select>
            <input
              id="city"
              type="text"
              className="form-control text-center w-25 mx-auto"
              onChange={(e) => setUser({ ...user, city: e.target.value })}
              placeholder="Ciudad"
              aria-label="City"
              aria-describedby="basic-addon1"
            />
            <div>
              <Sportmodal
                setSport={(e) => {
                  if (!user.sports.includes(e)) {
                    console.log(e, "if");
                    setUser({ ...user, sports: [...user.sports, e] });
                  } else {
                    console.log("else");
                    setUser({
                      ...user,
                      sports: user.sports.filter((i) => e != i),
                    });
                  }
                }}
              />
            </div>
            <button
              type="button"
              className="btn save-btn text-white mt-2 w-25 mx-auto"
              onClick={() => sendUserInfo()}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
