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

interface MarvelCharacter {
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
    getAllCharacters(): Promise<unknown>
}

const trans = Transport.getInstance();

export class Service implements IService {
    private static instance: Service;

    constructor() { };

    public static getInstance(): Service {
        if (!Service.instance) {
            Service.instance = new Service();
        }

        return Service.instance;
    }

    public async getAllCharacters(): Promise<unknown> {
        let offset = 0;
        const limit = 20;
        let allCharacters: MarvelCharacter[] = [];

        while (true) {
            const response: MarvelAPIResponse<MarvelCharacter> = await trans.getData('characters', offset, limit)
            allCharacters = allCharacters.concat(response.data.results);
            offset += limit;
            console.log(allCharacters)

            if (offset >= response.data.total) {
                break;
            }
        }
        return allCharacters;
    }
}