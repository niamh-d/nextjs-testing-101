import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />);
    const docsText = screen.getByText(/Docs/i);
    expect(docsText).toBeInTheDocument();
  });

  it('should contain the text "information"', () => {
    render(<Home />);
    const examplesText = screen.getByText(/examples/i);
    expect(examplesText).toBeInTheDocument();
  });

  it('should have a link called "learn"', () => {
    render(<Home />);
    const learnLink = screen.getByRole("link", {
      name: /learn/i,
    });
    expect(learnLink).toBeInTheDocument();
  });
});
