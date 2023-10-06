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

for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + " (height:" + pokemonList[i].height + ")"
  );

  // write the if statement to only check for pokemon that have a height above 3
  if (pokemonList[i].height > 3 && pokemonList[i].height < 0.5) {
    document.write(" - wow that's big!");
  }
  // use document.write to write two line breaks. You can add the line breaks together with the + operator like you've done above
  // A line break is written with "<br>"" and will allow each pokemon to be on a new line.

  document.write("<br>");
  document.write("<br>");

}