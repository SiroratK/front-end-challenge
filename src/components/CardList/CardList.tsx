import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import _, { random } from "lodash";
import { cardsList } from "@/utils/shuffle";

export interface CardItem {
  id: number;
  value: number;
  isOpen: boolean;
  src: string;
}

const CardList = () => {
  const [cards, setCards] = useState<CardItem[]>(
    cardsList
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  );

  const [tempIndexs, setTempIndexs] = useState<number[]>([]);
  const [count, setCount] = useState<number>(0);

  const onReset = () => {
    setTempIndexs([]);
    setCount(0);
    const update = cards.map((card, index) => {
        return { ...card, isOpen: false};
    });
    setCards(update)
    setTimeout(() => {
      setCards(
      cardsList
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    );
    }, 1000);
    
    
  };

  const toggleCardOpenState = (item: CardItem) => {
    const cardIndex = cards.findIndex((card) => card.id === item.id);
    const updatedCards = [...cards];
    if (tempIndexs.length < 2 && tempIndexs[0] !== cardIndex) {
      setCount(count + 1);
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
      setTimeout(() => {
        setTempIndexs([]);
      }, 1000);
      return;
    }
    return;
  }, [cards, tempIndexs]);

  const chunkArr = (arr: CardItem[], size: number) => _.chunk(arr, size);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Flip card</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      {chunkArr(cards, 4).map((row: CardItem[], rowIndex: number) => {
        return (
          <div
            key={rowIndex}
            style={{ flexDirection: "row" }}
            className="flex space-x-4 mb-4 m-4 md:m-10"
          >
            {row.map((item: CardItem, index: number) => (
              <div key={index}>
                <Card card={item} onClick={toggleCardOpenState} count={count} />
              </div>
            ))}
          </div>
        );
      })}
      <div className="text-center mb-4">
        <p className="mb-4">Count : {count}</p>
        <button onClick={onReset}>reset</button>
      </div>
    </div>
  );
};

export default CardList;
