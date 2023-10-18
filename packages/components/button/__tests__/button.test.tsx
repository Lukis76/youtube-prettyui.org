import * as React from "react";
import Button from "../src/button";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect, vi, describe, afterEach } from "vitest";

// Renders a button element
describe("Button", () => {
  afterEach(cleanup);
  test("should render correctly", () => {
    const wrapper = render(<Button>Click me</Button>);
    expect(() => wrapper.unmount()).not.toThrow();
  });
  test("ref should be forwarded", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).not.toBeNull();
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveTextContent("Click me");
  });

  test("should render a button element with the provided props", () => {
    // Arrange
    const props = {
      className: "custom-button",
      onClick: vi.fn(),
    };

    // Act
    render(<Button {...props}>Click me</Button>);

    // Assert
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toMatchSnapshot();
    expect(buttonElement).toHaveClass("custom-button");
    expect(buttonElement).toHaveTextContent("Click me");
    // expect(buttonElement).toHaveAttribute("onClick", props.onClick);
  });
});
