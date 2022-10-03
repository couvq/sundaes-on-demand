import { convert } from "./currency";

describe("sample test for mock fetch currency function", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
      })
    );
  });
  test("converts USD to CAD", async () => {
    const rate = await convert("USD", "CAD");

    expect(rate).toEqual(1.42);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test("handles exception with null", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API failure"));

    const rate = await convert("USD", "CAD");
    expect(rate).toEqual(undefined);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
