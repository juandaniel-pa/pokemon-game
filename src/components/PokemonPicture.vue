<template>

<div class="pokemon-container">
    <img :src="imgSrc" 
            class="hidden-pokemon"
            alt="Pokemon">


    <img v-if="showPokemon" :src="imgSrc" 
            class="fade-in"
            alt="Pokemon">   
</div>
    
</template>

<script>
export default {
    props: {
        pokemonId: {
                type: Number,
                required: true,         
            },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data (){
        return{

        }
    },
    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
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