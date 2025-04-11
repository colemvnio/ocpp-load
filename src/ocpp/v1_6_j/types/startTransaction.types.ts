import { OcppBasePayload } from './base.types';

export interface StartTransactionPayload extends OcppBasePayload {
    action: "StartTransaction";
    data: {
        connectorId: number;
        idTag: string;
        meterStart: number;
        timestamp: string;
    };
} 