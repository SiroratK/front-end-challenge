import { shuffle } from "../../shuffle";


test("data change after shuffle n times", () => {
  const cardsList =  [
    { id: 1, value: 1, isOpen: false, src: "/image-1.png" },
    { id: 2, value: 1, isOpen: false, src: "/image-1.png" },
    { id: 3, value: 2, isOpen: false, src: "/image-2.png" },
    { id: 4, value: 2, isOpen: false, src: "/image-2.png" },
    { id: 5, value: 3, isOpen: false, src: "/image-3.png" },
    { id: 6, value: 3, isOpen: false, src: "/image-3.png" },
    { id: 7, value: 4, isOpen: false, src: "/image-4.png" },
    { id: 8, value: 4, isOpen: false, src: "/image-4.png" },
    { id: 9, value: 5, isOpen: false, src: "/image-5.png" },
    { id: 10, value: 5, isOpen: false, src: "/image-5.png" },
    { id: 11, value: 6, isOpen: false, src: "/image-6.png" },
    { id: 12, value: 6, isOpen: false, src: "/image-6.png" },
  ];


  const shuffleFirstTime = shuffle(cardsList)
  expect(shuffleFirstTime).not.toEqual(cardsList);

  const shuffleSecondTime = shuffle(cardsList)
  expect(shuffleSecondTime).not.toEqual(cardsList);
});


