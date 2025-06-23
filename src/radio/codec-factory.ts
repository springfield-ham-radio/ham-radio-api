// oxlint-disable consistent-indexed-object-style
import type { ILogLayer } from 'loglayer';
import type { RadioCodec } from './codec.js';
import type { RadioModelId } from '../branded-types/radio-model-id.js';

/**
 * Factory interface for creating radio codecs
 *
 * This interface provides a standardized way for radio modules to create
 * codec instances that can encode/decode radio memory data.
 */
export interface CodecFactory {
  /**
   * Creates a codec instance for a specific radio model
   *
   * @param modelId - The radio model identifier
   * @param config - Configuration object for the codec
   * @param logger - Logger instance for the codec
   * @returns Promise that resolves to a RadioCodec instance
   */
  createCodec(modelId: RadioModelId, config: Record<string, unknown>, logger: ILogLayer): Promise<RadioCodec>;
}
