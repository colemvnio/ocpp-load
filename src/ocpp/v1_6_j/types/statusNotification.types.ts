import { OcppBasePayload } from './base.types';

export enum StatusEnum {
    Available = 'Available',
    Preparing = 'Preparing',
    Charging = 'Charging',
    SuspendedEV = 'SuspendedEV',
    SuspendedEVSE = 'SuspendedEVSE',
    Finishing = 'Finishing',
    Reserved = 'Reserved',
    Unavailable = 'Unavailable',
    Faulted = 'Faulted'
}

export enum ErrorCodeEnum {
    NoError = 'NoError',
    ConnectorLockFailure = 'ConnectorLockFailure',
    EVCommunicationError = 'EVCommunicationError',
    GroundFailure = 'GroundFailure',
    HighTemperature = 'HighTemperature',
    InternalError = 'InternalError',
    LocalListConflict = 'LocalListConflict',
    OtherError = 'OtherError',
    OverCurrentFailure = 'OverCurrentFailure',
    OverVoltage = 'OverVoltage',
    PowerMeterFailure = 'PowerMeterFailure',
    PowerSwitchFailure = 'PowerSwitchFailure',
    ReaderFailure = 'ReaderFailure',
    ResetFailure = 'ResetFailure',
    UnderVoltage = 'UnderVoltage',
    WeakSignal = 'WeakSignal'
}

export interface StatusNotificationPayload extends OcppBasePayload {
    action: "StatusNotification";
    data: {
        connectorId: number;
        status: StatusEnum;
        errorCode: ErrorCodeEnum;
    };
} 