const counter = require("./counter");

describe("Closure based counter", () => {
  test("should return a function", () => {
    const counterClosure = counter(10);
    expect(typeof counterClosure).toBe("function");
  });

  test("should return the initial value when the returned function is called", () => {
    const initialValue = 10;
    const counterClosure = counter(10);
    expect(counterClosure()).toBe(initialValue);
  });

  test("Should increment the value on subsequent calls", () => {
    const initialValue = 10;
    const counterClosure = counter(10);
    expect(counterClosure()).toBe(initialValue);
    expect(counterClosure()).toBe(initialValue + 1);
    expect(counterClosure()).toBe(initialValue + 2);
  });
});
