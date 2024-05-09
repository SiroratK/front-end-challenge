import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import _ from "lodash";
import { shuffleArray } from "@/utils/shuffle";

export interface CardItem {
  id: number;
  value: number;
  isOpen: boolean;
}

const CardList = () => {
  const [cards, setCards] = useState<CardItem[]>(
    shuffleArray([
      { id: 1, value: 1, isOpen: false },
      { id: 2, value: 1, isOpen: false },
      { id: 3, value: 2, isOpen: false },
      { id: 4, value: 2, isOpen: false },
      { id: 5, value: 3, isOpen: false },
      { id: 6, value: 3, isOpen: false },
      { id: 7, value: 4, isOpen: false },
      { id: 8, value: 4, isOpen: false },
      { id: 9, value: 5, isOpen: false },
      { id: 10, value: 5, isOpen: false },
      { id: 11, value: 6, isOpen: false },
      { id: 12, value: 6, isOpen: false },
    ])
  );

  const [tempIndexs, setTempIndexs] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  const toggleCardOpenState = (item: CardItem) => {
    setCount(count + 1);
    const cardIndex = cards.findIndex((card) => card.id === item.id);
    const updatedCards = [...cards];
    if (tempIndexs.length < 2) {
      updatedCards[cardIndex] = {
        ...updatedCards[cardIndex],
        isOpen: !item.isOpen,
      };
      setCards(updatedCards);
      setTempIndexs([...tempIndexs, cardIndex]);
    }
  };

  useEffect(() => {
    if (tempIndexs.length === 2) {
      console.log(cards[tempIndexs[0]].value, cards[tempIndexs[1]].value);
      if (cards[tempIndexs[0]].value !== cards[tempIndexs[1]].value) {
        const update = cards.map((card, index) => {
          if (index === tempIndexs[0] || index === tempIndexs[1]) {
            return { ...card, isOpen: (card.isOpen = false) };
          }
          return card;
        });
        setTimeout(() => {
          setCards(update);
          setTempIndexs([]);
        }, 1000);
        return;
      }
      setTempIndexs([]);
      return;
    }
    return;
  }, [cards, tempIndexs]);

  const chunkArr = (arr: CardItem[], size: number) => _.chunk(arr, size);

  return (
    <>
      {chunkArr(cards, 4).map((row: CardItem[], rowIndex: number) => {
        return (
          <div
            key={rowIndex}
            style={{ flexDirection: "row" }}
            className="flex space-x-4 mb-4"
          >
            {row.map((item: CardItem, index: number) => (
              <div key={index}>
                <Card card={item} onClick={toggleCardOpenState}  />
              </div>
            ))}
          </div>
        );
      })}
      <p>Count : {count}</p>
    </>
  );
};

export default CardList;
