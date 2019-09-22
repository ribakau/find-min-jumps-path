import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ResultStatus from "./ResultStatus";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('ResultStatus component', () => {

  it('renders without crashing', () => {
    render(<ResultStatus />, container);
  });

  it("renders correct status with a valid input", () => {
    let testArray = [1,4,3]; // 2 jumps
    act(() => {
      render(<ResultStatus minJumpsPath={testArray}/>, container);
    });
    expect(container.textContent).toBe("The minimum number of jumps needed to reach the end is: 2");

    testArray = [1,4,3,4,0]; // 4 jumps
    act(() => {
      render(<ResultStatus minJumpsPath={testArray}/>, container);
    });
    expect(container.textContent).toBe("The minimum number of jumps needed to reach the end is: 4");

    testArray = [2]; // 0 jumps
    act(() => {
      render(<ResultStatus minJumpsPath={testArray}/>, container);
    });
    expect(container.textContent).toBe("The minimum number of jumps needed to reach the end is: 0");
  });

  it("renders correct status with an invalid input", () => {
    let testArray = 0;
    act(() => {
      render(<ResultStatus minJumpsPath={testArray}/>, container);
    });
    expect(container.textContent).toBe("Array is not valid / last element cannot be reached.");

  });

});