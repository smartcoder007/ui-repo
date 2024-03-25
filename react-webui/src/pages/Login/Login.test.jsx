import React from "react";
import { render } from "enzyme";
import { Login } from "./Login";

describe("<Login/>", () => {
  it("should render Footer with correct markup", () => {
    expect(render(<Login />)).toMatchSnapshot();
  });
});
