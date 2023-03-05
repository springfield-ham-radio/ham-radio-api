export interface RadioChannel {
  id?: string;
  name?: string;
  transmitFrequency: number;
  receiveFrequency: number;
  transmitTone?: number;
  receiveTone?: number;
}
