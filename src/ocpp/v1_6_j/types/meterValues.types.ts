import { OcppBasePayload } from './base.types';

export interface MeterValue {
    timestamp: string;
    sampledValue: {
        value: string;
        context?: string;
        format?: string;
        measurand?: string;
        phase?: string;
        location?: string;
        unit?: string;
    }[];
}

export interface MeterValuesPayload extends OcppBasePayload {
    action: "MeterValues";
    data: {
        connectorId: number;
        transactionId?: number;
        meterValue: MeterValue[];
    };
} 