import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ShortestPath from "./ShortestPath";

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

describe('ShortestPath component', () => {

  it('renders without crashing', () => {
    render(<ShortestPath />, container);
  });

  it("renders correct result given a valid input array", () => {
    let testArray = [1,4,3];
    act(() => {
      render(<ShortestPath minJumpsPath={testArray}/>, container);
    });
    expect(container.textContent).toBe("The shortest path is:143");

    testArray = [3,1,-3];
    act(() => {
      render(<ShortestPath minJumpsPath={testArray}/>, container);
    });
    expect(container.textContent).toBe("The shortest path is:31-3");
  });

  it("renders nothing given empty/no array", () => {
    let testArray = [];
    act(() => {
      render(<ShortestPath minJumpsPath={testArray}/>, container);
    });
    expect(container.textContent).toBe("");
  });

});