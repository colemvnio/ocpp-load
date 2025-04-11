import { ArtilleryContext, ArtilleryDoneCallback, ArtilleryEvents, MeterValuesPayload, MeterValue } from '../types';

export function generateMeterValues(context: ArtilleryContext, events: ArtilleryEvents, done: ArtilleryDoneCallback): void {
    const vuUuid = context.vars.$uuid;
    console.log(`VU ${vuUuid}: Generating MeterValues`);

    const transactionId = context.vars.transactionId;

    const meterStart = context.vars.meterStart || 10000;
    const currentMeterValue = meterStart + Math.floor(Math.random() * 500);

    const meterValue: MeterValue = {
        timestamp: new Date().toISOString(),
        sampledValue: [{
            value: String(currentMeterValue),
            context: "Sample.Periodic",
            format: "Raw",
            measurand: "Energy.Active.Import.Register"
        }]
    };

    const payload: MeterValuesPayload = {
        action: "MeterValues",
        data: {
            connectorId: context.vars.connectorId || 1,
            ...(transactionId !== undefined && { transactionId: transactionId }),
            meterValue: [meterValue]
        }
    };

    context.vars.payload = JSON.stringify(payload);
    done();
} 