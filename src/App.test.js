import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
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
    await act(() => render(<App />));
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  test("SuggestedProducts component renders in DOM", () => {
    const { getByRole } = render(<App />)
    
    expect(getByRole('suggested-products')).toBeInTheDocument();
  })
});
