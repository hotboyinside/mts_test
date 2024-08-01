import md5 from 'md5';

interface ITransport {
    protocol: string,
    hostName: string,
    versionPath: string,
    route: string,
    keys: string

    getData<T>(route: string): Promise<T>;
}

export class Transport implements ITransport {
    private static instance: Transport;
    protocol: string = 'https://';
    hostName: string = 'gateway.marvel.com/';
    versionPath: string = 'v1/';
    access: string = 'public/';
    route: string = 'characters';
    keys: string = `?ts=${Date.now().toString()}&apikey=${import.meta.env.VITE_PUBLIC_API_KEY}&hash=${md5(Date.now().toString() + import.meta.env.VITE_PRIVATE_API_KEY + import.meta.env.VITE_PUBLIC_API_KEY)}`;
    private constructor() {}
  
    public static getInstance(): Transport {
        if (!Transport.instance) {
            Transport.instance = new Transport();
        }
        return Transport.instance;
    }

    public async getData<T>(route?: string): Promise<T> {
        const currRoute: string = route ? route : this.route
        const response = await fetch(this.protocol + this.hostName + this.versionPath + this.access + currRoute + this.keys);
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        return await response.json()
    }
}