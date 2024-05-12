"use client";
import React from "react";
import { CardItem } from "../CardList/CardList";
import Image from "next/image";

const Card = ({
  card,
  onClick,
  count
}: {
  card: CardItem;
  onClick: (card: CardItem) => void;
  count: number
}) => {
  return (
    <div className="cursor-pointer group perspective w-16 h-24 md:w-24 md:h-36">
      <div
        className={`relative preserve-3d ${
          !card.isOpen && "my-rotate-y-180"
        } w-full h-full duration-1000`}
      >
        <div className="absolute backface-hidden w-full h-full placeholder:content-center">
          <Image
            alt="image"
            src={`${card.src}`}
            sizes="100vw"
            fill
          />
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden bg-red-100"
          onClick={() => onClick(card)}
        >
          <Image
            alt="image"
            src={`/card-back.png`}
            sizes="100vw"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
