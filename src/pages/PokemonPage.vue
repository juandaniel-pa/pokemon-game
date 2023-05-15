<template>
    
    <h1 v-if="!pokemon">Espere porfavor...</h1>
    <!-- Una posible solucion es que agregamos el v-if y me muestre el pokemon cuando tengamos un pokemon -->
    <!-- en lugar del if podemos tener un v-else vue dice intenta verificar si pokemon tiene un valor, entonces mostrara el titulo espere porfavor -->
    <div v-else>
        
        <h1>Quien es este Pokemon?</h1>
        <!-- PICTURE -->
        <!-- Entonces en el :pokemonId mando el pokemon.id -->
        <PokemonPicture 
        :pokemonId="pokemon.id" 
        :showPokemon="showPokemon"/>

        <!-- OPCIONES -->
        <PokemonOptions 
        :pokemons="pokemonArr"
        @selection="checkAnswer"/>

    <template v-if="showAnswer">
        <h2 class="fade-in">{{message}}</h2>
        <button @click="newGame">Nuevo Juego</button>
    </template>


<!-- HOOKS: eso es un metodos que son llamados en ciertos momentos, cuando se actualizan, destruyen, actualizan -->
    </div>
    
</template>

<script>

//Componentes
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

//helpers
import getPokemonOptions from '@/helpers/getPokemonOptions'

//console.log(getPokemonOptions())


export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return{
            pokemonArr: [],
            //para saber este pokemon debo basarme en el arreglo del pokemon de abajo
            pokemon: null,
            //creamos la propiedad de showPokemon 
            showPokemon: false,
            showAnswer: false,
            message: '',
        }

    },
    methods: {
        async mixPokemonArray(){
            //debo basarme en este pokemon pero para eso debemos ocupar un numero que vaya entre 0 a 3
            this.pokemonArr = await getPokemonOptions()

            //Math.floor para que redonde y dentro math.random para generar un numero aleatorio multiplicado por 4 porque quiero que este entre 0 y 3
            //Esta constante me va a servir para agarrar 1 de estos pokemones de manera aleatoria
            const rndInt = Math.floor(Math.random() * 4)

            //el pokemon va a ser igual al array en la posicion rndInt
            this.pokemon = this.pokemonArr[rndInt]


            console.log(rndInt)
        },
        checkAnswer(pokemonId){
            this.showPokemon = true

            //con este show answer voy a demostrar de manera condicional los elementos
            this.showAnswer = true

            if (pokemonId === this.pokemon.id) {
                this.message = `Adivinaste es: ${this.pokemon.name}`
            } else {
                this.message = `Upps era: ${this.pokemon.name}`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.message = ''
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted(){
        //Esto aparece cuando el componente esta montado
        this.mixPokemonArray()
    }

}
</script>

