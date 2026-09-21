export interface Monster{
    id: number;
    name: string;
    image: string;
    description: string;
}

interface CreatureResponse {
    data: Monster[];
    message: string;
    status: number;
}

const API_URL = "https://api.hyrule-compendium.com/v3/compendium/category/monsters";

export async function getMonsters(): Promise<Monster[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error al obtener datos");
    }

    const json: CreatureResponse = await response.json();

    return json.data;
}