export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    // console.log(url + '/fightingType');

    const response = await fetch(url);

    const jsonResponse = await response.json();

    return jsonResponse.results;
}

// TODO write star wars fetch function
