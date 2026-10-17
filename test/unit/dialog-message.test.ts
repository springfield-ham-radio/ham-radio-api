import { describe, expect, it } from "vitest";
import {
  RADIO_DIALOG_MESSAGE_BODY_MAX_LENGTH,
  RADIO_DIALOG_MESSAGE_TITLE_MAX_LENGTH,
  validateRadioDialogMessage,
} from "../../dist/index.js";

describe("validateRadioDialogMessage", () => {
  it("should accept undefined when the field is omitted", () => {
    const result = validateRadioDialogMessage("readMessage", undefined);

    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("should accept a minimal info message", () => {
    const result = validateRadioDialogMessage("writeMessage", {
      title: "Use the micro-USB port",
      body: "Connect a data-capable USB cable to the side connector.",
    });

    expect(result.isValid).toBe(true);
  });

  it("should accept warning severity", () => {
    const result = validateRadioDialogMessage("writeMessage", {
      title: "Cable",
      body: "Use micro-USB.",
      severity: "warning",
    });

    expect(result.isValid).toBe(true);
  });

  it("should reject non-objects", () => {
    const result = validateRadioDialogMessage("readMessage", "text");

    expect(result.isValid).toBe(false);
    expect(result.errors[0]).toContain("must be an object");
  });

  it("should reject whitespace-only title and body", () => {
    const titleResult = validateRadioDialogMessage("readMessage", { title: "  ", body: "ok" });
    const bodyResult = validateRadioDialogMessage("readMessage", { title: "ok", body: "\n\t  " });

    expect(titleResult.isValid).toBe(false);
    expect(bodyResult.isValid).toBe(false);
    expect(titleResult.errors[0]).toContain("title");
    expect(bodyResult.errors[0]).toContain("body");
  });

  it("should reject invalid severity", () => {
    const result = validateRadioDialogMessage("readMessage", {
      title: "Setup",
      body: "Steps here.",
      severity: "error",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors[0]).toContain("severity");
  });

  it("should reject title and body over max length", () => {
    const longTitle = "x".repeat(RADIO_DIALOG_MESSAGE_TITLE_MAX_LENGTH + 1);
    const longBody = "y".repeat(RADIO_DIALOG_MESSAGE_BODY_MAX_LENGTH + 1);

    expect(validateRadioDialogMessage("readMessage", { title: longTitle, body: "ok" }).isValid).toBe(false);
    expect(validateRadioDialogMessage("readMessage", { title: "ok", body: longBody }).isValid).toBe(false);
  });

  it("should allow tab and newline in body but reject other control characters", () => {
    const allowed = validateRadioDialogMessage("readMessage", {
      title: "Setup",
      body: "Line one\nLine two\tindented",
    });
    const denied = validateRadioDialogMessage("readMessage", {
      title: "Setup",
      body: "bad\u0007bell",
    });

    expect(allowed.isValid).toBe(true);
    expect(denied.isValid).toBe(false);
    expect(denied.errors[0]).toContain("control characters");
  });
});
