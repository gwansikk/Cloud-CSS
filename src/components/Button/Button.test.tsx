import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  describe("when disabled", () => {
    it("should be disabled", () => {
      render(<Button text="Button" disabled />);
      expect(screen.getByRole("button", { name: "Button" })).toBeDisabled();
    });
  });

  describe("when enabled", () => {
    it("should not be disabled", () => {
      render(<Button text="Button" />);
      expect(screen.getByRole("button", { name: "Button" })).not.toBeDisabled();
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle("padding: 7px 25px 8px");
    });
  });

  describe("when size is small", () => {
    it("should have small padding", () => {
      render(<Button text="Button" size="sm" />);
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle("padding: 7px 25px 8px");
    });
  });

  describe("when size is medium", () => {
    it("should have medium padding", () => {
      render(<Button text="Button" size="md" />);
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle("padding: 9px 30px 11px");
    });
  });

  describe("when size is large", () => {
    it("should have large padding", () => {
      render(<Button text="Button" size="lg" />);
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle("padding: 14px 30px 16px");
    });
  });
});
