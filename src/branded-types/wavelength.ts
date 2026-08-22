import { type Brand, make } from "ts-brand";

export type Wavelength = Brand<number, "wavelength">;
export const Wavelength = make<Wavelength>();
