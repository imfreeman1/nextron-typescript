import React from "react";
import { CardType } from "./type";

const Card = ({ className, children }: CardType) => {
  return <div className={`default-card ${className}`}>{children}</div>;
};

export default Card;
