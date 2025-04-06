import { Brand, make } from 'ts-brand';

export type RadioChannelId = Brand<string, 'radio-channel-id'>;
export const RadioChannelId = make<RadioChannelId>();
