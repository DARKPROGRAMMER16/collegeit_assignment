import React, { Fragment } from "react";
import "./user.css";
import { useParams, useNavigate } from "react-router-dom";
const User = ({ users }) => {
  const id = useParams().id;
  const data = users.find((user) => user.login.uuid === id);
  const Navigate = useNavigate();

  // console.log(data);
  function getBday(date) {
    var myBirthday, today, bday, diff, days;
    const d = date.substring(8, 10);
    const m = date.substring(5, 7);
    // console.log(d, m);
    myBirthday = [d, m]; // 6th of February
    today = new Date();
    bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
    if (today.getTime() > bday.getTime()) {
      bday.setFullYear(bday.getFullYear() + 1);
    }
    diff = bday.getTime() - today.getTime();
    days = Math.floor(diff / (10006060 * 24));

    return days;
  }

  const nbdays = getBday(data.dob.date);

  return (
    <Fragment>
      {data ? (
        <section class="dark">
          <div class="container py-4">
            <h1 class="h1 text-center" id="pageHeaderTitle">
              User Details
            </h1>

            <article class="postcard dark blue">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src={data.picture.large}
                  alt="Image Title"
                />
              </a>
              <div class="postcard__text">
                <h1 class="postcard__title blue">
                  <a href="#">
                    {data.name.title} {data.name.first} {data.name.last}
                  </a>
                </h1>

                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  <h4>Phone : {data.phone}</h4>
                  <h4>DOB : {data.dob.date}</h4>
                  <h4>Days to next Birthday : {nbdays}</h4>
                </div>
                <ul class="postcard__tagbox">
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>Podcast
                  </li>
                  <li class="tag__item">
                    <i class="fas fa-clock mr-2"></i>55 mins.
                  </li>
                  <li class="tag__item play blue">
                    <a href="#">
                      <i class="fas fa-play mr-2"></i>Play Episode
                    </a>
                  </li>
                </ul>
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
