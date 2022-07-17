import { render } from "@testing-library/react";

import Home from "../pages/login";

describe("Home", () => {
  it("Renders", () => {
    const home = render(<Home />);
    expect(home);
  });
});
