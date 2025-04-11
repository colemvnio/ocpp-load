import { ArtilleryContext, ArtilleryDoneCallback, ArtilleryEvents, AuthorizePayload } from '../types';

export function generateAuthorize(context: ArtilleryContext, events: ArtilleryEvents, done: ArtilleryDoneCallback): void {
    const vuUuid = context.vars.$uuid;
    console.log(`VU ${vuUuid}: Generating Authorize`);

    const idTag = `VU-TAG-${vuUuid}`;
    context.vars.idTag = idTag;

    const payload: AuthorizePayload = {
        action: "Authorize",
        data: {
            idTag: idTag
        }
    };

    context.vars.payload = JSON.stringify(payload);
    done();
} 