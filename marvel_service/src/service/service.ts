import { Transport } from "../transport/transport";

const trans = Transport.getInstance();

interface IService {
    getCharacters(): Promise<unknown>
}

export class Service implements IService {
    private static instance: Service;

    constructor() { };

    public static getInstance(): Service {
        if (!Service.instance) {
            Service.instance = new Service();
        }

        return Service.instance;
    }

    public async getCharacters() {
        const response = await trans.getData()
    }
}