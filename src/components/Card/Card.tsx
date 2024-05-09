"use client";
import React, { useMemo } from "react";
import { CardItem } from "../CardList/CardList";

const Card = ({
  card,
  onClick,
}: {
  card: CardItem;
  onClick: (card: CardItem) => void;
}) => {
  return (
    <div className="cursor-pointer group perspective  w-24 h-36">
      <div
        className={`relative preserve-3d ${
          !card.isOpen && "my-rotate-y-180"
        } w-full h-full duration-1000`}
      >
        <div className="absolute backface-hidden w-full h-full bg-slate-200 content-center">
          <p className="text-center" >{card.value}</p>
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden bg-red-100"
          onClick={() => onClick(card)}
        />
      </div>
    </div>
  );
};

export default Card;
