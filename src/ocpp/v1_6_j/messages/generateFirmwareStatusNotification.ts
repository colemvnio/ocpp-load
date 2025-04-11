import { getRandomEnumValue } from '../../../utils/enum.utils';
import { ArtilleryContext, ArtilleryDoneCallback, ArtilleryEvents, FirmwareStatusNotificationPayload, FirmwareStatusEnum } from '../types';

export function generateFirmwareStatusNotification(context: ArtilleryContext, events: ArtilleryEvents, done: ArtilleryDoneCallback): void {
    console.log(`VU ${context.vars.$uuid}: Generating FirmwareStatusNotification`);

    const randomStatus = getRandomEnumValue(FirmwareStatusEnum);

    const payload: FirmwareStatusNotificationPayload = {
        action: "FirmwareStatusNotification",
        data: {
            status: randomStatus
        }
    };

    context.vars.payload = JSON.stringify(payload);
    done();
} 