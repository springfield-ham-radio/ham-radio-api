import type { Brand } from 'ts-brand';
import { make } from 'ts-brand';

export type LicenseClassId = Brand<string, 'license-class-id'>;
export const LicenseClassId = make<LicenseClassId>();
