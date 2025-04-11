import path from 'path';

// Determine OCPP version, default to 1.6j
const ocppVersion = process.env.OCPP_VERSION || 'v1_6_j';

// Construct the path to the version-specific message generators
// We assume the compiled output maintains a similar structure under dist/processor/
const messageGeneratorsPath = path.join(__dirname, '.', 'ocpp', ocppVersion, 'messages');

console.log(`Loading OCPP processor functions for version: ${ocppVersion} from ${messageGeneratorsPath}`);

let messageGenerators: { [key: string]: Function };

try {
    if (ocppVersion === 'v1_6_j') {
        const { generateAuthorize } = require('./ocpp/v1_6_j/messages/generateAuthorize');
        const { generateStatusNotification } = require('./ocpp/v1_6_j/messages/generateStatusNotification');
        const { generateStartTransaction } = require('./ocpp/v1_6_j/messages/generateStartTransaction');
        const { generateStopTransaction } = require('./ocpp/v1_6_j/messages/generateStopTransaction');
        const { generateMeterValues } = require('./ocpp/v1_6_j/messages/generateMeterValues');
        const { generateFirmwareStatusNotification } = require('./ocpp/v1_6_j/messages/generateFirmwareStatusNotification');
        const { generateVariedStatusNotification } = require('./ocpp/v1_6_j/messages/generateVariedStatusNotification');
        const { ArtilleryContext, ArtilleryEvents, ArtilleryDoneCallback } = require('./ocpp/v1_6_j/types'); // Import types for placeholders

        messageGenerators = {
            generateAuthorize,
            generateStatusNotification,
            generateStartTransaction,
            generateStopTransaction,
            generateMeterValues,
            modifyPayloadForFirmwareUpdate: generateFirmwareStatusNotification,
            generateVariedStatusNotification,

            generateBootNotification: (context: typeof ArtilleryContext, events: typeof ArtilleryEvents, done: typeof ArtilleryDoneCallback) => { /* Placeholder */ console.warn("generateBootNotification not implemented"); done(); },
            generateHeartbeat: (context: typeof ArtilleryContext, events: typeof ArtilleryEvents, done: typeof ArtilleryDoneCallback) => { /* Placeholder */ console.warn("generateHeartbeat not implemented"); done(); },
        };
    } else if (ocppVersion === 'v2_0_1') {
        console.warn("OCPP v2.0.1 processor functions not yet implemented.");
        messageGenerators = {};
    } else {
        throw new Error(`Unsupported OCPP_VERSION: ${ocppVersion}`);
    }

} catch (error) {
    console.error(`Failed to load message generators for version ${ocppVersion}:`, error);
    throw new Error(`Could not load processor functions for OCPP version ${ocppVersion}. Check path and build output.`);
}

module.exports = messageGenerators; 