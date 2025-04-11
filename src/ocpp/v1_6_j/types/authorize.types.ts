import { OcppBasePayload } from './base.types';

export interface AuthorizePayload extends OcppBasePayload {
    action: "Authorize";
    data: {
        idTag: string;
    };
} 