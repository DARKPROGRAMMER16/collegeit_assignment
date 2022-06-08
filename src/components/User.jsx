import React, { Fragment, useEffect, useState } from "react";
import "./user.css";
import { useParams, useNavigate } from "react-router-dom";
const User = ({ users }) => {
  const id = useParams().id;
  const data = users.find((user) => user.login.uuid === id);
  const Navigate = useNavigate();

  const [dob,setDob] = useState(data.dob.date);
  const [daysleft, setDaysleft] = useState();


  const calculateDays = (dob) =>{
    let today = new Date();
    let bday = new Date(dob);
    // console.log(bday);

    let upcomingBday = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());

    if(today > upcomingBday){
      upcomingBday.setFullYear(today.getFullYear() + 1);
    }

    let oneDay = 1000 * 60 * 60 * 24;

    let daysLeft = Math.ceil((upcomingBday.getTime() - today.getTime()) / oneDay);

    setDaysleft(daysLeft);
  }

  useEffect(() => {
    calculateDays(dob);
  },[]);


  return (
    <Fragment>
      {data ? (
        <section className="dark">
          <div className="container py-4">
            <h1 className="h1 text-center" id="pageHeaderTitle">
              User Details
            </h1>

            <article className="postcard dark blue">
              <a className="postcard__img_link" href="#">
                <img
                  className="postcard__img"
                  src={data.picture.large}
                  alt="Image Title"
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <a href="#">
                    {data.name.title} {data.name.first} {data.name.last}
                  </a>
                </h1>

                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  <h4>Phone : {data.phone}</h4>
                  <h4>Days left for next birthday : {daysleft}</h4>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <div className="text-center">
          {" "}
          <h1>User not found</h1>
          {Navigate("/")}{" "}
        </div>
      )}
    </Fragment>
  );
};

export default User;
