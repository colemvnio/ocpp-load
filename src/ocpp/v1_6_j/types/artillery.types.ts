export interface ArtilleryContext {
    vars: {
        $uuid: string;
        $loopCount: number;
        payload?: string;
        [key: string]: any;
    };
}

export type ArtilleryDoneCallback = () => void;

export type ArtilleryEvents = {
    emit: (event: string, ...args: any[]) => void;
}; 