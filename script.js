// Ejercicio 1
/*Crea un programa que imprima en consola los números impares del 1 al 50.*/

function ejercicio1() {
    let vector = [];
    for(let i = 0; i<50; i++){
        if(i % 2 != 0) {
            vector.push(i);
        }   
    }
    let salida = document.getElementById("resultado1");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector}]`;
}

// Ejercicio 2
/*Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6*/

function ejercicio2() {
    let input = document.getElementById("inputEjercicio2").value;
    var pokemons = 
    [ 'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
    'spearow',
    'fearow',
    'ekans',
    'arbok',
    'pikachu',
    'raichu',
    'sandshrew',
    'sandslash',
    'nidoran-f',
    'nidorina',
    'nidoqueen',
    'nidoran-m',
    'nidorino',
    'nidoking',
    'clefairy',
    'clefable',
    'vulpix',
    'ninetales',
    'jigglypuff',
    'wigglytuff',
    'zubat',
    'golbat',
    'oddish',
    'gloom',
    'vileplume',
    'paras',
    'parasect',
    'venonat',
    'venomoth',
    'diglett',
    'dugtrio',
    'meowth',
    'persian',
    'psyduck',
    'golduck',
    'mankey',
    'primeape',
    'growlithe',
    'arcanine',
    'poliwag',
    'poliwhirl',
    'poliwrath',
    'abra',
    'kadabra',
    'alakazam',
    'machop',
    'machoke',
    'machamp',
    'bellsprout',
    'weepinbell',
    'victreebel',
    'tentacool',
    'tentacruel',
    'geodude',
    'graveler',
    'golem',
    'ponyta',
    'rapidash',
    'slowpoke',
    'slowbro',
    'magnemite',
    'magneton',
    'farfetchd',
    'doduo',
    'dodrio',
    'seel',
    'dewgong',
    'grimer',
    'muk',
    'shellder',
    'cloyster',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'drowzee',
    'hypno',
    'krabby',
    'kingler',
    'voltorb' ]
    let vector = []; 
    for(let i=4; i < input; i=i+5){
        vector.push(pokemons[i]);
    }
    let salida = document.getElementById("resultado2");
    salida.innerHTML = "";
    salida.innerHTML = `[${vector}]`;
}

// Ejercicio 3

function ejercicio3() {
    let vector = [4,"dos",8,"tres",5,9,1,"cero"];
    let resultado = [];
    for(let i=0; i < vector.length; i++) {
        if(typeof(vector[i])=="number") {
            resultado.push(vector[i]);
        }
    }
    let salida = document.getElementById("resultado3");
    salida.innerHTML = "";
    salida.innerHTML = `[${resultado}]`;
}
