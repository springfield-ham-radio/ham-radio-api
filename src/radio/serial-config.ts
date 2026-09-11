export interface RadioSerialConfig {
  /**
   * Default baud rate used to open the programming port.
   *
   * When `baudRates` is listed, this must be one of those values. HamBench
   * selects it automatically unless the user previously chose another rate
   * for the same radio.
   */
  baudRate: number;
  /**
   * Baud rates the radio's programming port accepts.
   *
   * Omit when only `baudRate` is valid. HamBench shows a baud selector on
   * import and write when this list has more than one value.
   */
  baudRates?: number[];
  dataBits?: 8 | 5 | 6 | 7;
  stopBits?: 1 | 1.5 | 2;
  parity?: "none" | "even" | "odd";
  /**
   * Hardware RTS/CTS flow control. Kenwood TH-D74 clone mode needs this on macOS.
   */
  rtscts?: boolean;
  /**
   * Explicit RTS line. TH-F6 live CAT needs this false; omit to keep RTS asserted.
   */
  rts?: boolean;
  /**
   * Explicit DTR line. Omit to keep DTR asserted after open.
   */
  dtr?: boolean;
}

/**
 * Baud rates the programming port may be opened at.
 *
 * Uses `baudRates` when the radio lists them; otherwise the single `baudRate`
 * default is the only option.
 */
export function programmingPortBaudRates(config: RadioSerialConfig): number[] {
  if (config.baudRates && config.baudRates.length > 0) {
    return [...config.baudRates];
  }

  return [config.baudRate];
}
