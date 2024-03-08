import { add } from "./index";

describe('add function', () => {
  it('adds tow numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
