import { Brand, make } from 'ts-brand';

export type LicenseClassId = Brand<number, 'license-class-id'>;
export const LicenseClassId = make<LicenseClassId>();
