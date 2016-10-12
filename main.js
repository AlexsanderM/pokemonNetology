class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  show() {
    console.log('Name: ' + this.name + ' level: ' + this.level);
  }
}

class PokemonList {
  constructor(...pokemons) {
    this.pokemons = pokemons;
  }

  add(name, level) {
    this.pokemons.push(new Pokemon(name, level));
  }

  show() {
    let listPokemons = this.pokemons;
    console.log('Список пакемонов: ' + listPokemons.length);

    for (let pokemon of listPokemons) {
            console.log('Name: ' + pokemon.name + ' level: ' + pokemon.name);
        }
  }

  push(name, level) {
    this.pokemons.push(new Pokemon(name, level));
  }

  move (addList) {
        let listPokemons = this.pokemons;
        listPokemons.pop(listPokemons[listPokemons.length - 1]);
  }
}


var bylba = new Pokemon('bylba', 90);
var rydi = new Pokemon('rydi', 34);
var raf = new Pokemon('raf', 53);
var rat = new Pokemon('rat', 55);
bylba.show();

var lost = new PokemonList(bylba, rydi);
var found = new PokemonList(raf,rat);

lost.push('poni', 90);

lost.add('cat', 21);
lost.add('dragon', 212);
lost.add('dog', 43);

found.add('fanki', 2);

console.log(lost);
console.log(found);

found.show();

lost.move();

console.log(lost);
console.log(found);
