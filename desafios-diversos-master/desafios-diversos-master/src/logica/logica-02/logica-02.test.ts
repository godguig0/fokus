//@ts-nocheck
import { logica02 } from "./logica-02";

test('logica02', () => {
  const arr1 = [1, 2, 3, 4, 5];
  expect(logica02(arr1)).toEqual('10 14');

  const arr2 = [7, 69, 2, 221, 8974];
  expect(logica02(arr2)).toEqual('299 9271');

  const arr3 = [5, 5, 5, 5, 5];
  expect(logica02(arr3)).toEqual('20 20');
});