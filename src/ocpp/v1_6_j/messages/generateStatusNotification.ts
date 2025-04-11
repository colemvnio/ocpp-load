import { ArtilleryContext, ArtilleryDoneCallback, ArtilleryEvents, StatusNotificationPayload, StatusEnum, ErrorCodeEnum } from '../types';

export function generateStatusNotification(context: ArtilleryContext, events: ArtilleryEvents, done: ArtilleryDoneCallback): void {
    console.log(`VU ${context.vars.$uuid}: Generating StatusNotification`);

    const connectorId = context.vars.connectorId || 1;

    const payload: StatusNotificationPayload = {
        action: "StatusNotification",
        data: {
            connectorId: connectorId,
            status: StatusEnum.Available,
            errorCode: ErrorCodeEnum.NoError
        }
    };

    context.vars.payload = JSON.stringify(payload);
    done();
}

module.exports = { generateStatusNotification }; 