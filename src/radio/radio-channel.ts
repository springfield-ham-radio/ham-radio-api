export interface RadioChannel
{
	channelName: string | undefined;
	transmitFrequency: number;
	receiveFrequency: number;
	transmitTone: number | undefined;
	receiveTone: number | undefined;
}
