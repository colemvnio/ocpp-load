import { OcppBasePayload } from './base.types';

export type FirmwareStatus = "Downloaded" | "DownloadFailed" | "Downloading" | "Idle" | "InstallationFailed" | "Installing" | "Installed" | "InvalidSignature" | "SignatureVerified";

export enum FirmwareStatusEnum {
    Downloaded = "Downloaded",
    DownloadFailed = "DownloadFailed",
    Downloading = "Downloading",
    Idle = "Idle",
    InstallationFailed = "InstallationFailed",
    Installing = "Installing",
    Installed = "Installed",
    InvalidSignature = "InvalidSignature",
    SignatureVerified = "SignatureVerified"
}

export interface FirmwareStatusNotificationPayload extends OcppBasePayload {
    action: "FirmwareStatusNotification";
    data: {
        status: FirmwareStatusEnum;
    };
} 