import type { RadioModelId } from "../branded-types/radio-model-id.js";

/**
 * A unique identifier for a radio.
 *
 * This information is passed between the renderer process and Electron process to identify a radio.
 * It must be serializable to JSON.
 */
export interface RadioId {
  model: RadioModelId;
  name: string;
  manufacturer: string;
}
