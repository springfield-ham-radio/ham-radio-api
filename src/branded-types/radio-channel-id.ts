import { Brand, make } from 'ts-brand';

export type RadioChannelId = Brand<number, 'radio-channel-id'>;
export const RadioChannelId = make<RadioChannelId>();
