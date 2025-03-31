import { RadioModel } from './model.js';

export interface RadioConnection {
  serialPortPath: string;
  model: RadioModel;
}
