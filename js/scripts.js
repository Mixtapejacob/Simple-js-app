let pokemonRepository = (function () {
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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    console.log(pokemon.name + "inside the function");
    let bulletitem = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("custombutton");
    listItem.appendChild(button);
    bulletitem.appendChild(listItem);
    button.addEventListener("click", function () {
      console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();
pokemonRepository.getAll().forEach(function (pokemon) {
  // Call the addListItem function and pass pokemon as an argument
 addListItem(pokemon) ;

});



// pokemonRepository.getAll().forEach(function (pokemon) {
//   document.write(pokemon.name)
//   button.addEventListener('click', function () {
//     document.write(pokemon);
//   })});


  // write the if statement to only check for pokemon that have a height above 3
  if (pokemon.height > 3) {
    document.write(" - wow that's big!");
  }
  // use document.write to write two line breaks. You can add the line breaks together with the + operator like you've done above
  // A line break is written with "<br>"" and will allow each pokemon to be on a new line.

  document.write("<br>" + "<br>");



  // console.log(pokemonRepository.getAll()); // []
  // pokemonRepository.getAll().forEach(function (pokemon) {
  // Use document.write and if statements to write the pokemon information exactly like we did before
  // })



  // pokemonList.forEach(function (pokemon) {
  //   console.log(pokemon.name + "inside the function");
  //   let bulletitem = document.querySelector(".pokemon-list");
  //   let listItem = document.createElement('li')
  //   let button = document.createElement('button')
  //   button.innerText = pokemon.name
  //   button.classList.add('custombutton');
  //   listItem.appendChild(button);
  //   bulletitem.appendChild(listItem)


  // });

  // function addListItem(pokemon) {
  //   console.log(pokemon.name + "inside the function");
  //   let bulletitem = document.querySelector(".pokemon-list");
  //   let listItem = document.createElement('li')
  //   let button = document.createElement('button')
  //   button.innerText = pokemon.name
  //   button.classList.add('custombutton');
  //   listItem.appendChild(button);
  //   bulletitem.appendChild(listItem)
  //   button.addEventListener('click', function () {
  //     console.log(pokemon);
  //   });

  // }



  // return {
  //   add: function (pokemon) {
  //     pokemonList.push(pokemon);
  //   },
  //   getAll: function () {
  //     return pokemonList;
  //   }
  // };


  // console.log(pokemonRepository1.getAll()); // []
  // pokemonRepository1.add({ name: 'Pikachu' });
  // console.log(pokemonRepository1.getAll()); // [ { name: 'Pikachu' } ]

  // let pokemonRepository = (function () {
  //   let pokemonList = [];

  //   function add(pokemon) {
  //     pokemonList.push(pokemon);
  //   }

  //   function getAll() {
  //     return pokemonList;
  //   }

  //   return {
  //     add: add,
  //     getAll: getAll
  //   };




  console.log(pokemonRepository.getAll()); // []
