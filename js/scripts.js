let pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["Grass", "Monster"],
  },
  {
    name: "Ekans",
    height: 2,
    types: ["Dragon", "Field"],
  },
  {
    name: "Arbok",
    height: 3.5,
    types: ["Field", "Dragon"],
  },
];

for (let i = 0; i < pokemonList.length; i++) 
  document.write(
    pokemonList[i].name + " (height:" + pokemonList[i].height + ")"
  );

  // write the if statement to only check for pokemon that have a height above 3
  if (pokemonList[i].height > 3 && pokemonList[i].height < 0.5) {
    document.write(" - wow that's big!");
  } 
  else if (pokemonList[i].height > 1.5 && pokemonList[i] < 1) {
    document.write('- that is ekans')
  }
  else (pokemonList[i].height > 0.5 && pokemonList[i] < 0.1); {
    document.write('it is a Bulbasaur')
  }