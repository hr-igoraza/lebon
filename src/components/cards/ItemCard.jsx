import React from "react";
import "./itemCard.css";
import { Rate } from "antd";
import Button from "../buttons/Button";

const ItemCard = (props) => {
  return (
    <div className="card-container">
      <img src={props.img} alt="itemImage" />
      <div className="item-details">
        <h3 className="item-name">
          {props.title ? `${props.title}` : "Title"}
        </h3>
        <p className="bottomline">
          {props.description
            ? `${props.description}`
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus."}
        </p>
        <Rate className="my-3" style={{}} defaultValue={4} />
        <Button
          className={"button txt-yellow "}
          divClass={"bt-container"}
          stroke={"#f5be32"}
        >
          ORDER NOW
        </Button>
      </div>
    </div>
  );
};

export default ItemCard;
