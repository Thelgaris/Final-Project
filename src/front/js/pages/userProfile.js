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
    console.log(store.getUserSports);
    try {
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
      history.push("/homepageafterlogin");
    } catch (e) {}
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
      <div className="container card d-block mx-auto border-0">
        <img
          className="avatar mt-4 mb-4"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <div className="card-img-overlay ">
          <form>
            <div
              className="row align-items-end uploadImage mb-3 "
              id="src-file"
            >
              <input
                className=" mb-2"
                name="src-file"
                type="file"
                onChange={(e) =>
                  setUser({ ...user, profile_image_url: e.target.files[0] })
                }
              />
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="col-auto mx-auto">
          <div className="d-grid col-auto gap-4 mx-auto mb-3">
            <input
              id="name"
              type="text"
              className="form-control inputWidth text-center  mx-auto"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Nombre"
              aria-label="Name"
              aria-describedby="basic-addon1"
            />
            <input
              id="surname"
              type="select"
              className="form-control inputWidth text-center mx-auto"
              onChange={(e) => setUser({ ...user, surname: e.target.value })}
              placeholder="Apellidos"
              aria-label="surname"
              aria-describedby="basic-addon1"
            />
            <input
              id="birth"
              type="date"
              className="birth form-control inputWidth text-center mx-auto"
              onChange={(e) => setUser({ ...user, birth: e.target.value })}
              placeholder="Birth"
              aria-label="Birth"
              aria-describedby="basic-addon1"
            />
            <select
              className="text-center inputWidth mx-auto"
              defaultValue={"h"}
              onChange={(e) => setUser({ ...user, gender: e.target.value })}
            >
              <option value={"Hombre"}>Hombre</option>
              <option value={"Mujer"}>Mujer</option>
            </select>
            <input
              id="city"
              type="text"
              className="form-control inputWidth text-center mx-auto"
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
              className="btn save-btn text-white mt-2 mx-auto"
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
