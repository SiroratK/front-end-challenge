import useToggleFunction from "./useToggleFunction";
import { act, renderHook } from "@testing-library/react-hooks";

test("test toggle index 0 when first time", () => {
  const cardsList = [
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

  const { result } = renderHook(() => useToggleFunction());

  act(() => {
    result.current.toggleCardOpenState(
      cardsList,
      {
        id: 1,
        value: 1,
        isOpen: false,
        src: "/image-1.png",
      },
      []
    );
  });

  expect(result.current.data).toEqual([
    { id: 1, value: 1, isOpen: true, src: "/image-1.png" },
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
  ]);
  expect(result.current.tempIndexs).toEqual([0]);
});

test("test flip 2 card and unmatch", () => {
  const cardsList = [
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

  const { result } = renderHook(() => useToggleFunction());

  act(() => {
    result.current.toggleCardOpenState(
      cardsList,
      {
        id: 1,
        value: 1,
        isOpen: false,
        src: "/image-1.png",
      },
      []
    );
  });

  expect(result.current.data).toEqual([
    { id: 1, value: 1, isOpen: true, src: "/image-1.png" },
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
  ]);
  expect(result.current.tempIndexs).toEqual([0]);

  act(() => {
    result.current.toggleCardOpenState(
      result.current.data,
      {
        id: 3,
        value: 2,
        isOpen: false,
        src: "/image-2.png",
      },
      result.current.tempIndexs
    );
  });

  expect(result.current.data).toEqual([
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
  ]);

  expect(result.current.tempIndexs).toEqual([]);
});

test("test flip 2 card and match", () => {
  const mockData = [
    { id: 2, value: 1, isOpen: false, src: "/image-1.png" },
    { id: 12, value: 6, isOpen: false, src: "/image-6.png" },
    { id: 11, value: 6, isOpen: false, src: "/image-6.png" },
    { id: 9, value: 5, isOpen: false, src: "/image-5.png" },
    { id: 1, value: 1, isOpen: false, src: "/image-1.png" },
    { id: 7, value: 4, isOpen: false, src: "/image-4.png" },
    { id: 8, value: 4, isOpen: false, src: "/image-4.png" },
    { id: 10, value: 5, isOpen: false, src: "/image-5.png" },
    { id: 3, value: 2, isOpen: false, src: "/image-2.png" },
    { id: 6, value: 3, isOpen: false, src: "/image-3.png" },
    { id: 4, value: 2, isOpen: false, src: "/image-2.png" },
    { id: 5, value: 3, isOpen: false, src: "/image-3.png" },
  ];
  const { result } = renderHook(() => useToggleFunction());
  act(() => {
    result.current.toggleCardOpenState(
      mockData,
      { id: 9, value: 5, isOpen: false, src: "/image-5.png" },
      []
    );
  });
  expect(result.current.data).toEqual([
    { id: 2, value: 1, isOpen: false, src: "/image-1.png" },
    { id: 12, value: 6, isOpen: false, src: "/image-6.png" },
    { id: 11, value: 6, isOpen: false, src: "/image-6.png" },
    { id: 9, value: 5, isOpen: true, src: "/image-5.png" },
    { id: 1, value: 1, isOpen: false, src: "/image-1.png" },
    { id: 7, value: 4, isOpen: false, src: "/image-4.png" },
    { id: 8, value: 4, isOpen: false, src: "/image-4.png" },
    { id: 10, value: 5, isOpen: false, src: "/image-5.png" },
    { id: 3, value: 2, isOpen: false, src: "/image-2.png" },
    { id: 6, value: 3, isOpen: false, src: "/image-3.png" },
    { id: 4, value: 2, isOpen: false, src: "/image-2.png" },
    { id: 5, value: 3, isOpen: false, src: "/image-3.png" },
  ]);

  expect(result.current.tempIndexs).toEqual([3]);

  act(() => {
    result.current.toggleCardOpenState(
      result.current.data,
      { id: 10, value: 5, isOpen: false, src: "/image-5.png" },
      result.current.tempIndexs
    );
  });

  expect(result.current.data).toEqual([
    { id: 2, value: 1, isOpen: false, src: "/image-1.png" },
    { id: 12, value: 6, isOpen: false, src: "/image-6.png" },
    { id: 11, value: 6, isOpen: false, src: "/image-6.png" },
    { id: 9, value: 5, isOpen: true, src: "/image-5.png" },
    { id: 1, value: 1, isOpen: false, src: "/image-1.png" },
    { id: 7, value: 4, isOpen: false, src: "/image-4.png" },
    { id: 8, value: 4, isOpen: false, src: "/image-4.png" },
    { id: 10, value: 5, isOpen: true, src: "/image-5.png" },
    { id: 3, value: 2, isOpen: false, src: "/image-2.png" },
    { id: 6, value: 3, isOpen: false, src: "/image-3.png" },
    { id: 4, value: 2, isOpen: false, src: "/image-2.png" },
    { id: 5, value: 3, isOpen: false, src: "/image-3.png" },
  ]);

  expect(result.current.tempIndexs).toEqual([]);
});
