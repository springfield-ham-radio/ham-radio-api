export interface RadioSerialConfig {
  baudRate: number;
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
