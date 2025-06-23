/**
 * Result of a validation operation
 *
 * This interface provides a standardized way to return validation results
 * across different parts of the radio system.
 */
export interface ValidationResult {
  /**
   * Whether the validation passed
   */
  isValid: boolean;

  /**
   * List of validation errors
   */
  errors: string[];

  /**
   * List of validation warnings
   */
  warnings: string[];
}
