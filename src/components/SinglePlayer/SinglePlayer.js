import React from "react";
import "./SinglePlayer.css";
const SinglePlayer = ({ player, cart, setCart }) => {
  // console.log(player);
  const { strPlayer, idPlayer, strDescriptionEN, strCutout } = player;
  const handleAddToCart = () => {
    const info = {
      strPlayer,
      idPlayer,
      strDescriptionEN,
      strCutout,
      price: 115,
    };
    if (cart) {
      setCart([...cart, info]);
    } else {
      setCart(info);
      return;
    }
  };
  const handleBookmark = () => {
    const info = {
      strPlayer,
      idPlayer,
      strDescriptionEN,
      strCutout,
      quantity: 1,
      bookMark: "true",
    };
    const prevBookmark = localStorage.getItem("bookmark");
    const oldBookmark = JSON.parse(prevBookmark);
    if (oldBookmark) {
      const isExist = oldBookmark.find((p) => p.idPlayer === idPlayer);
      if (isExist) {
        isExist.quantity = isExist.quantity + 1;
        localStorage.setItem(
          "bookmark",
          JSON.stringify(oldBookmark)
        );
        console.log(isExist);
        // alert("Already Bookmarked");
        return;
      } else {
        localStorage.setItem(
          "bookmark",
          JSON.stringify([...oldBookmark, info])
        );
      }
      console.log(isExist);
    } else {
      localStorage.setItem("bookmark", JSON.stringify([info]));
    }
  };
  // console.log(cart);
  return (
    <div className="card" data-aos="zoom-in">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <p>
        {strDescriptionEN ? strDescriptionEN.slice(0, 60) : "no data available"}
      </p>
      <button className="card-btn">Details</button>
      <button onClick={handleAddToCart} className="card-btn">
        Add to Cart
      </button>
      <button onClick={() => handleBookmark()} className="card-btn">
        Bookmark
      </button>
    </div>
  );
};

export default SinglePlayer;
