export interface RadioChannel {
	id?: string;
	channelName?: string;
	transmitFrequency: number;
	receiveFrequency: number;
	transmitTone?: number;
	receiveTone?: number;
}
