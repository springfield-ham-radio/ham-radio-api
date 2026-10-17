import type { ValidationResult } from "./validation.js";

/** UAlert-style severity for optional read/write setup text in HamBench. */
export type RadioDialogSeverity = "info" | "warning";

/**
 * Optional setup text shown in HamBench before a memory read or write.
 * Radio modules set this on the driver config JSON (`readMessage` / `writeMessage`).
 */
export interface RadioDialogMessage {
  /** Short alert title (plain text). */
  title: string;
  /** Alert body (plain text; newlines are line breaks). */
  body: string;
  /**
   * Visual weight in HamBench. Omit for `info`.
   */
  severity?: RadioDialogSeverity;
}

export const RADIO_DIALOG_MESSAGE_TITLE_MAX_LENGTH = 80;
export const RADIO_DIALOG_MESSAGE_BODY_MAX_LENGTH = 600;

const DIALOG_SEVERITIES: ReadonlySet<RadioDialogSeverity> = new Set(["info", "warning"]);

function hasDisallowedControlCharacters(text: string): boolean {
  for (let index = 0; index < text.length; index += 1) {
    const code = text.charCodeAt(index);

    if (code === 9 || code === 10) {
      continue;
    }

    if (code < 32 || code === 127) {
      return true;
    }
  }

  return false;
}

/**
 * Validate an optional `readMessage` or `writeMessage` value from a radio config.
 * `undefined` is valid (field omitted).
 */
export function validateRadioDialogMessage(fieldPath: string, value: unknown): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (value === undefined) {
    return { isValid: true, errors, warnings };
  }

  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    errors.push(`${fieldPath} must be an object`);
    return { isValid: false, errors, warnings };
  }

  const record = value as Record<string, unknown>;

  if (typeof record.title !== "string") {
    errors.push(`${fieldPath}.title must be a string`);
  } else {
    const title = record.title.trim();

    if (title.length === 0) {
      errors.push(`${fieldPath}.title must not be empty`);
    } else if (title.length > RADIO_DIALOG_MESSAGE_TITLE_MAX_LENGTH) {
      errors.push(`${fieldPath}.title must be at most ${RADIO_DIALOG_MESSAGE_TITLE_MAX_LENGTH} characters`);
    }
  }

  if (typeof record.body !== "string") {
    errors.push(`${fieldPath}.body must be a string`);
  } else {
    const body = record.body.trim();

    if (body.length === 0) {
      errors.push(`${fieldPath}.body must not be empty`);
    } else if (body.length > RADIO_DIALOG_MESSAGE_BODY_MAX_LENGTH) {
      errors.push(`${fieldPath}.body must be at most ${RADIO_DIALOG_MESSAGE_BODY_MAX_LENGTH} characters`);
    } else if (hasDisallowedControlCharacters(record.body)) {
      errors.push(`${fieldPath}.body must not contain control characters other than tab or newline`);
    }
  }

  if (record.severity !== undefined) {
    if (typeof record.severity !== "string" || !DIALOG_SEVERITIES.has(record.severity as RadioDialogSeverity)) {
      errors.push(`${fieldPath}.severity must be "info" or "warning"`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}
