import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Input from "./Input";

describe("Running Test for Input", () => {
  describe("when label", () => {
    it("should have label", () => {
      render(<Input label="label" />);
      expect(screen.getByText("label")).toBeInTheDocument();
    });
  });

  describe("Check placeholder", () => {
    it("should be placeholder", () => {
      render(<Input placeholder="Hello" />);
      expect(screen.getByPlaceholderText("Hello")).toBeInTheDocument();
    });
  });

  describe("when disabled", () => {
    it("should be disabled", () => {
      render(<Input status="disabled" placeholder="Disabled Input" />);
      const inputElement = screen.getByPlaceholderText("Disabled Input");
      expect(inputElement).toBeDisabled();
    });
  });

  describe("when in success state", () => {
    it("should display success message", () => {
      const successMessage = "success message";
      render(<Input status="success" message={successMessage} />);
      expect(screen.getByText(successMessage)).toBeInTheDocument();
    });
  });

  describe("when in error state", () => {
    it("should display error message", () => {
      const errorMessage = "Error message";
      render(<Input status="error" message={errorMessage} />);
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  describe("when readonly", () => {
    it("should be readonly", () => {
      render(<Input readOnly placeholder="Readonly Input" />);
      const inputElement = screen.getByPlaceholderText("Readonly Input");
      expect(inputElement).toHaveAttribute("readonly");
    });
  });
});
