const API_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemonList = async (type: string = "") => {
    let url = `${API_URL}pokemon?limit=20`;

    if (type) {
        const typeResponse = await fetch(`${API_URL}type/${type}`);
        const typeData = await typeResponse.json();
        return {
            results: typeData.pokemon.map((pokemon: any) => pokemon.pokemon),
            next: null,
        };
    }

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch Pokemon List");
    }
    const data = await response.json();
    return data;
}

export const fetchPokemonDetails = async (name: string) => {
    const response = await fetch(`${API_URL}pokemon/${name}`);
    const data = await response.json();
    return data;
};