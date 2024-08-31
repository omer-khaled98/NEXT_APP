import Link from "next/link";
import React from "react";
import Counter from "./counter";
import Image from "next/image";

const Card = ({ title, body, keys, id, image }) => {
  const post = `/posts/${id}`;
  console.log(id);
  return (
    <div className="card col-3 m-2  " style={{ width: "18rem" }}>
      <Link class="nav-link" href={post}>
        <div className="card-body">
          <h5 className="card-title pb-2">{title}</h5>
          {/* <img style={{ width: "200px", height: "200px" }} src={image} /> */}
          <Image width={200} height={300} src={image} alt={title} />
          <h6 className="card-subtitle mb-2 text-body-secondary">{keys}</h6>
          <p className="card-text">{body}</p>
        </div>
      </Link>
      <Counter />
    </div>
  );
};

export default Card;
