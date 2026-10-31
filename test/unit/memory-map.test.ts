import { describe, expect, it } from "vitest";
import type { RadioMemoryMapField, RadioMemoryMapFieldUi } from "../../dist/index.js";

function fieldUi(ui: RadioMemoryMapFieldUi): RadioMemoryMapField {
  return {
    id: "contrast",
    type: "u8",
    ui,
  };
}

describe("RadioMemoryMapFieldUi.section", () => {
  it("should accept a radio menu group name on ui", () => {
    const field = fieldUi({
      group: "settings",
      label: "Contrast",
      widget: "integer",
      section: "Display",
    });

    expect(field.ui?.section).toBe("Display");
  });

  it("should allow ui without a menu group name", () => {
    const field = fieldUi({
      group: "settings",
      label: "Squelch",
      widget: "integer",
      menu: { number: 0, code: "SQL" },
    });

    expect(field.ui?.section).toBeUndefined();
    expect(field.ui?.menu?.number).toBe(0);
  });

  it("should keep section off the field itself", () => {
    const field = fieldUi({
      group: "settings",
      label: "Beep",
      widget: "switch",
      section: "Display",
    });

    expect(field).not.toHaveProperty("section");
    expect(field.ui).toHaveProperty("section", "Display");
  });
});

describe("RadioMemoryMapFieldUi.sectionOrder", () => {
  it("should accept a section group order on ui", () => {
    const field = fieldUi({
      group: "settings",
      label: "Contrast",
      widget: "integer",
      section: "Display",
      sectionOrder: 1,
    });

    expect(field.ui?.sectionOrder).toBe(1);
  });

  it("should allow ui without a section group order", () => {
    const field = fieldUi({
      group: "settings",
      label: "Contrast",
      widget: "integer",
      section: "Display",
    });

    expect(field.ui?.sectionOrder).toBeUndefined();
  });

  it("should keep section order off the field itself", () => {
    const field = fieldUi({
      group: "settings",
      label: "Beep",
      widget: "switch",
      section: "Display",
      sectionOrder: 2,
      order: 10,
    });

    expect(field).not.toHaveProperty("sectionOrder");
    expect(field.ui).toHaveProperty("sectionOrder", 2);
    expect(field.ui?.order).toBe(10);
  });
});
