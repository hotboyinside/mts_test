import { Transport } from "../transport/transport";

interface MarvelItem {
    resourceURI: string;
    name: string;
}

interface MarvelStoryItem extends MarvelItem {
    type: string;
}

interface MarvelCollection {
    available: number;
    returned?: number;
    collectionURI: string;
    items: MarvelItem[];
}

export interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    resourceURI: string;
    comics: MarvelCollection;
    series: MarvelCollection;
    stories: MarvelCollection & { items: MarvelStoryItem[] };
    events: MarvelCollection;
    urls: Array<{ type: string; url: string; }>;
}

interface MarvelAPIResponse<T> {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: T[];
    };
    etag: string;
}

interface IService {
    getCharacters(offset: number, limit: number): Promise<MarvelAPIResponse<MarvelCharacter>>
}

const trans = Transport.getInstance();

export class Service implements IService {
    private static instance: Service;

    constructor() {};

    public static getInstance(): Service {
        if (!Service.instance) {
            Service.instance = new Service();
        }

        return Service.instance;
    }

    public async getCharacters(offset: number = 0, limit: number = 20): Promise<MarvelAPIResponse<MarvelCharacter>> {
        return await trans.getData('characters', offset, limit);
    }
}