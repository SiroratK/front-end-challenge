"use client";
import React, { useState, useEffect } from "react";

import { CardItem } from "@/components/CardList/CardList";

const useToggleFunction = () => {
  const [data, setData] = useState<CardItem[]>([]);
  const [count, setCount] = useState<number>(0);
  const [tempIndexs, setTempIndexs] = useState<number[]>([]);

  const toggleCardOpenState = (
    cards: CardItem[],
    item: CardItem,
    temp: number[]
  ) => {
    const cardIndex = cards.findIndex((card) => card.id === item.id);
    const updatedCards = [...cards];
    if (temp.length < 2 && temp[0] !== cardIndex) {
      setCount(count + 1);
      updatedCards[cardIndex] = {
        ...updatedCards[cardIndex],
        isOpen: !item.isOpen,
      };
      setData(updatedCards);
      setTempIndexs([...tempIndexs, cardIndex]);
    }
  };

  useEffect(() => {
    if (tempIndexs.length === 2) {
      if (data[tempIndexs[0]].value !== data[tempIndexs[1]].value) {
        const update = data.map((card, index) => {
          if (index === tempIndexs[0] || index === tempIndexs[1]) {
            return { ...card, isOpen: (card.isOpen = false) };
          }
          return card;
        });

        setData(update);
        setTempIndexs([]);

        return;
      }

      setTempIndexs([]);

      return;
    }
    return;
  }, [data, tempIndexs]);

  return { data, tempIndexs, toggleCardOpenState };
};

export default useToggleFunction;
