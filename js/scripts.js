let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let bulletitem = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    let button = document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#modal');
    // button.classList.add("custombutton");
    button.innerText = pokemon.name;
    listItem.appendChild(button);
    bulletitem.appendChild(listItem);
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  
  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    // let modalHeader = $('.modal-header');
    modalTitle.empty();
    modalBody.empty();
    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;
    let contentElement = document.createElement('p');
    contentElement.innerText = 'Pokemon height' + ': ' + pokemon.height;
    let myImage = document.createElement('img');
    myImage.src = pokemon.imageUrl;
    modalBody.append(myImage);
    modalBody.append(titleElement);
    modalBody.append(contentElement);
    // $('#exampleModal').click(function () {
    //   // $(button).toggle('modal');
    // });
  }

  // function hideModal() {
  //   modalContainer.classList.remove('is-visible');
  // }

  // window.addEventListener("keydown", (e) => {
  //   if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
  //     hideModal();
  //   }
  // });

  // modalContainer.addEventListener("click", (e) => {
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    // Call the addListItem function and pass pokemon as an argument
    pokemonRepository.addListItem(pokemon);
  });
});
