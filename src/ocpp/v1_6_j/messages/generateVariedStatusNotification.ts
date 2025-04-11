import { getRandomEnumValue } from '../../../utils/enum.utils';
import { ArtilleryContext, ArtilleryDoneCallback, ArtilleryEvents, StatusNotificationPayload, StatusEnum, ErrorCodeEnum } from '../types';

export function generateVariedStatusNotification(context: ArtilleryContext, events: ArtilleryEvents, done: ArtilleryDoneCallback): void {
    const vuUuid = context.vars.$uuid;
    console.log(`VU ${vuUuid}: Generating Varied StatusNotification`);

    const randomStatus = getRandomEnumValue(StatusEnum);
    const randomFaultErrorCode = getRandomEnumValue(Object.fromEntries(Object.entries(ErrorCodeEnum).filter(([key, _]) => key !== 'NoError')) as typeof ErrorCodeEnum);
    const randomErrorCode = randomStatus === StatusEnum.Faulted ? randomFaultErrorCode : ErrorCodeEnum.NoError;

    const connectorId = context.vars.connectorId || Math.floor(Math.random() * 2) + 1;
    context.vars.connectorId = connectorId;

    const payload: StatusNotificationPayload = {
        action: "StatusNotification",
        data: {
            connectorId: connectorId,
            status: randomStatus,
            errorCode: randomErrorCode,
        }
    };

    context.vars.payload = JSON.stringify(payload);
    done();
} 