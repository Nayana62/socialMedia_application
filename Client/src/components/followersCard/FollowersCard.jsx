import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import User from "../../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";

const FollowersCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) {
          return <User person={person} key={id} />;
        }
        return null;
      })}
    </div>
  );
};

export default FollowersCard;
