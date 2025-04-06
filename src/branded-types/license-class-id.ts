import { Brand, make } from 'ts-brand';

export type licenseClassId = Brand<number, 'license-class-id'>;
export const licenseClassId = make<licenseClassId>();
