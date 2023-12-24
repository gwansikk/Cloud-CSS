import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "./Button";
import { globalStylePadding } from "../../styles";

const paddingMd = `padding: ${globalStylePadding.md}`;

describe("Running Test for Button", () => {
  describe("when disabled", () => {
    it("should be disabled", () => {
      render(<Button status="disabled">Button</Button>);
      expect(screen.getByRole("button", { name: "Button" })).toBeDisabled();
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle("opacity: 0.6");
    });
  });

  describe("when enabled", () => {
    it("should not be disabled", () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole("button", { name: "Button" })).not.toBeDisabled();
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle(paddingMd);
    });
  });

  describe("when size is small", () => {
    it("should have small padding", () => {
      render(<Button size="sm">Button</Button>);
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle(
        `padding: ${globalStylePadding.sm}`,
      );
    });
  });

  describe("when size is medium", () => {
    it("should have medium padding", () => {
      render(<Button size="md"> Button</Button>);
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle(paddingMd);
    });
  });

  describe("when size is large", () => {
    it("should have large padding", () => {
      render(<Button size="lg">Button</Button>);
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle(
        `padding: ${globalStylePadding.lg}`,
      );
    });
  });

  describe("when size is full width", () => {
    it("should have full width padding", () => {
      render(<Button fullWidth>Button</Button>);
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle("width: 100%");
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle(paddingMd);
    });
  });

  describe("when size is full height", () => {
    it("should have full height padding", () => {
      render(<Button fullHeight>Button</Button>);
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle("height: 100%");
      expect(screen.getByRole("button", { name: "Button" })).toHaveStyle(paddingMd);
    });
  });
});
