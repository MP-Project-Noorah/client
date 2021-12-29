import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";

export default function FavIcon({ idPro, getAllItems, user, getUserItem }) {
  const [id, setId] = useState(localStorage.getItem("ID"));

  const addToFav = async (fav) => {
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/users/updateFavUser`,
        { id, fav }
        //  {
        //    headers: {
        //      authorization: `Bearer ${localStorage.getItem("token")}`,
        //    },
        //  }
      );
      console.log(result.data);
      getUserItem();
      getAllItems();
    } catch (err) {
      console.log(err);
    }
  };

  const removeFav = async (arr) => {
    const fav = arr.filter((item) => {
      return item !== idPro;
    });

    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/users/updateFavUser`,
        { id, fav }
        //  {
        //    headers: {
        //      authorization: `Bearer ${localStorage.getItem("token")}`,
        //    },
        //  }
      );
      console.log(result.data);
      getUserItem();
      getAllItems();
    } catch (err) {
      console.log(err);
    }

    console.log("removeFav");
  };

  return (
    <div>
      {localStorage.getItem("ID") ? (
        user ? (
          user.fav.find((item2) => {
            return item2 === idPro;
          }) ? (
            <button onClick={() => removeFav(user.fav)}>
              <AiFillHeart />
            </button>
          ) : (
            <button>
              <AiOutlineHeart onClick={() => addToFav([...user.fav, idPro])} />
            </button>
          )
        ) : (
          <AiOutlineHeart />
        )
      ) : (
        <>
          <AiOutlineHeart />
        </>
      )}
    </div>
  );
}
