import { getRandomEnumValue } from '../../../utils/enum.utils';
import { ArtilleryContext, ArtilleryDoneCallback, ArtilleryEvents, StopTransactionPayload, StopReasonEnum } from '../types';

export function generateStopTransaction(context: ArtilleryContext, events: ArtilleryEvents, done: ArtilleryDoneCallback): void {
    const vuUuid = context.vars.$uuid;
    console.log(`VU ${vuUuid}: Generating StopTransaction`);

    const idTag = context.vars.idTag || `FALLBACK-TAG-${vuUuid}`;
    const transactionId = context.vars.transactionId || 0;
    const meterStart = context.vars.meterStart || 10000;
    const meterStop = meterStart + Math.floor(Math.random() * 1000) + 50;
    const randomReason = getRandomEnumValue(StopReasonEnum);

    const payload: StopTransactionPayload = {
        action: "StopTransaction",
        data: {
            transactionId: transactionId,
            idTag: idTag,
            meterStop: meterStop,
            timestamp: new Date().toISOString(),
            reason: randomReason
        }
    };

    context.vars.payload = JSON.stringify(payload);
    done();
} 