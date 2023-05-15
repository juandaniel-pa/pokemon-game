import pokemonApi from "@/api/pokemonApi"

//Creamos el arreglo
const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map( (_, index) => index + 1)
    
}


//Mandamos a llamar el getPokemonOptions el cual tambien toma el arreglo de getPokemons y lo mezcla
const getPokemonOptions = async() => {

    const mixedPokemons = getPokemons()
                            .sort( () => Math.random() - 0.5)

    //Luego vamos a mandar a llamar el getPokemonNames     el cual con .splice elegimo solo los primeros 4                    
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4))

    return pokemons
}

const getPokemonNames = async( [a,b,c,d] = [] ) => {

    //peticion a pokemonApi
    //disparar las 4 peticiones de manera simultanea
    //Promise.all nos ayuda a disparar promesas de manera simultanea y estaria esperando un arreglo de promesas
    //aqui solo estamos definiendo las peticiones pero no la estamos llamando
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    
    //aqui desestructuramos el arreglo y mandamos a llamar con el await el arreglo de nuestras promesas
    const [p1, p2, p3, p4] = await Promise.all(promiseArr)

    //returnamos el nombre y id de los pokemones
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]


}

export default getPokemonOptions