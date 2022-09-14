import React, {useState} from "react";
import "./Like.css";

export default function Like() {
  const [like, setLike] = useState(false);
  const [dislike, setdislike] = useState(false);

  function handleLike(type) {
    if (type === "like") {
      if (like.isActive) {
        setLike(false);
      } else {
        setLike(true);
        setdislike(false);
      }
    } else {
      if (dislike.isActive) {
        setdislike(false);
      } else {
        setdislike(true);
        setLike(false);
      }
    }
  }
  return (
    <>
      <div onClick={() => handleLike("like")}>
        {like ? (
          <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        )}
      </div>
      <div onClick={() => handleLike("dislike")}>
        {dislike ? (
          <i className="fa fa-thumbs-down" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
        )}
      </div>
    </>
  );
}
