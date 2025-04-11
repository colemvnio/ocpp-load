import { OcppBasePayload } from './base.types';

export enum StopReasonEnum {
    EVDisconnected = "EVDisconnected",
    HardReset = "HardReset",
    Local = "Local",
    Other = "Other",
    PowerLoss = "PowerLoss",
    Reboot = "Reboot",
    Remote = "Remote",
    SoftReset = "SoftReset",
    UnlockCommand = "UnlockCommand",
    DeAuthorized = "DeAuthorized"
}

export interface StopTransactionPayload extends OcppBasePayload {
    action: "StopTransaction";
    data: {
        transactionId: number;
        idTag: string;
        meterStop: number;
        timestamp: string;
        reason: StopReasonEnum;
    };
} 