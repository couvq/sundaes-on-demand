import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("tests for App component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
          })
      })
    );
  });
  test("when App is rendered, fakeFetch is called once", async () => {
    render(<App />);

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
