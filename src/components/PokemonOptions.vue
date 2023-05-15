<template>
    <div class="options-container">
        <ul>
            <!-- Utilizar un v-for y recordar que debemos tener un :key -->
            <!-- el $emit emite algo, primero son 2 argumentos, el nombre del evento que quiero disparar y este se ocmunica con el PokemonPage  -->
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        },
        methods: {
            /* hola(){
                this.$emit
            } */
        }
    }
}
</script>

<style scoped>
    .pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    width: 100vw;
    margin-left: -50vw;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

/* Pokemon Options */
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>