import { ArtilleryContext, ArtilleryDoneCallback, ArtilleryEvents, StartTransactionPayload } from '../types';

export function generateStartTransaction(context: ArtilleryContext, events: ArtilleryEvents, done: ArtilleryDoneCallback): void {
    const vuUuid = context.vars.$uuid;
    console.log(`VU ${vuUuid}: Generating StartTransaction`);

    const idTag = context.vars.idTag || `FALLBACK-TAG-${vuUuid}`;
    const meterStart = Math.floor(Math.random() * 10000);
    context.vars.meterStart = meterStart;

    const payload: StartTransactionPayload = {
        action: "StartTransaction",
        data: {
            connectorId: context.vars.connectorId || 1,
            idTag: idTag,
            meterStart: meterStart,
            timestamp: new Date().toISOString()
        }
    };

    context.vars.payload = JSON.stringify(payload);
    done();
} 