// oxlint-disable consistent-indexed-object-style
import type { RadioCodec } from "./codec.js";

/**
 * Interface for managing shared components across radio models
 *
 * This interface provides a standardized way for radio modules to share
 * common components like schemas, protocols, and codecs.
 */
export interface SharedComponentManager {
  /**
   * Load a shared schema from a file path
   *
   * @param schemaPath - Path to the schema file
   * @returns Promise that resolves to the schema object
   */
  loadSchema(schemaPath: string): Promise<Record<string, unknown>>;

  /**
   * Load a shared protocol from a file path
   *
   * @param protocolPath - Path to the protocol file
   * @returns Promise that resolves to the protocol object
   */
  loadProtocol(protocolPath: string): Promise<Record<string, unknown>>;

  /**
   * Load a shared codec from a file path
   *
   * @param codecPath - Path to the codec module
   * @param config - Configuration for the codec
   * @returns Promise that resolves to a RadioCodec instance
   */
  loadCodec(codecPath: string, config: Record<string, unknown>): Promise<RadioCodec>;

  /**
   * Resolve a component reference relative to a base path
   *
   * @param reference - The reference to resolve
   * @param basePath - The base path for resolution
   * @returns The resolved absolute path
   */
  resolveReference(reference: string, basePath: string): string;
}
