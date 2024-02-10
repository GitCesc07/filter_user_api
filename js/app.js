// * Variables globales
const result = document.querySelector("#result"),
  filter = document.getElementById("filter");

let userArray = [], arrayNew = []
arrayData = [];

loadEvenListainer();

function loadEvenListainer() {

  loadAPI();


  // * Load information for api
  function loadAPI() {
    const url = "https://randomuser.me/api/?results=25";

    fetch(url)
      .then(answer => answer.json())
      .then(result => showUser(result.results))
    // .then(result => showUser(result))
  }



  // * view information the api
  function showUser(user) {

    // console.log(user);
    userArray = user;
    userArray.forEach(users => {
      const { name, picture, location } = users;

      const { first, last } = name;
      const { country } = location;
      const { medium } = picture;

      // const divCard = document.createElement("div");

      const divCard = document.createElement("li");

      arrayNew.push(divCard)

      divCard.innerHTML = `
        <div class="card-flex">
            <img class="img-user" src="${medium}" alt="users">
            <div>
                <h3 class="title-name">${first} ${last}</h3>
                <p class="paragraph-country">${country}</p>
              </div>
          </div>
        <div class="border-bottom"></div>      
      `;

      result.appendChild(divCard);
    });
  }


  filter.addEventListener("input", (e) => filterData(e.target.value))

  function filterData(searchUser) {
    arrayNew.forEach(user => {

      if (user.innerText.toLowerCase().includes(searchUser.toLowerCase())) {
        user.classList.remove("hide")
      }
      else {
        user.classList.add("hide")
      }
    })
  }

}
