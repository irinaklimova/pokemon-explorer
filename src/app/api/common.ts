const BASE_URL = 'https://pokeapi.co/api/v2/';

export function getData<T>(relativeUrl: string): Promise<T> {
    return fetch(`${BASE_URL}${relativeUrl}`).then(res => {
        if (res.ok) return res.json();
        throw new Error(`${res.status} Something went wrong`);
    })
}