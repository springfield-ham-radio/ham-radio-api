export interface RadioExactReceivePattern {
  type: "exact";
  value: number;
  length: number;
}

export interface RadioVariableReceivePattern {
  type: "variable";
  length: number;
}

export interface RadioPatternReceivePattern {
  type: "pattern";
  pattern: (string | number | { field: string; size: number })[];
  dataLength?: number | string; // Optional - actual length determined by segment configuration
}

export interface RadioAnyReceivePattern {
  type: "any";
  length: number;
}

export type RadioReceivePattern = RadioExactReceivePattern | RadioVariableReceivePattern | RadioPatternReceivePattern | RadioAnyReceivePattern;

export interface RadioSendReceiveStep {
  sendReceive: {
    send: (string | number)[];
    receive: RadioReceivePattern;
    timeout?: number;
    description?: string;
  };
}

export interface RadioSendStep {
  send: {
    data: (string | number)[];
    description?: string;
  };
}

export interface RadioReceiveStep {
  receive: {
    type: "exact" | "variable" | "pattern" | "any";
    value?: number;
    length: number;
    pattern?: (string | number | { field: string; size: number })[];
    description?: string;
  };
}

export interface RadioReadSegmentStep {
  readSegment: {
    segments: string[];
    startChunk: {
      send: (string | number)[];
      receive: RadioReceivePattern;
    };
    endChunk: {
      send: (string | number)[];
      receive: RadioReceivePattern;
    };
    description?: string;
  };
}

export interface RadioWriteSegmentStep {
  writeSegment: {
    segments: string[];
    send: (string | number)[];
    data: string;
    receive: RadioReceivePattern;
    description?: string;
  };
}

export interface RadioSetVariableStep {
  setVariable: {
    name: string;
    value: string | number;
  };
}

export type RadioProtocolStep = RadioSendReceiveStep | RadioSendStep | RadioReceiveStep | RadioReadSegmentStep | RadioWriteSegmentStep | RadioSetVariableStep;
