export interface RadioSettingUi {
  type: string;
}

export interface ToggleRadioSettingType {
  type: "toggle";
}

export interface NumberRadioSettingType {
  type: "number";
  min: number;
  max: number;
}

export interface SelectRadioSettingType {
  type: "select";
  options: string[];
}

export interface RadioSettingSpecification {
  id: string;
  radioTypeId: string;
  name: string;
  description: string;
  memoryAddress: number;
  ui: RadioSettingUi;
}
