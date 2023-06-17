
const tabs = document.querySelectorAll('.blogs-tab-link');
const cardContainer = document.querySelector('.card-container');


tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    tabs.forEach(tab => tab.classList.remove('active'));


    tab.classList.add('active');


    const category = tab.getAttribute('data-category');


    updateCards(category);
  });
});

function updateCards(category) {
  
  cardContainer.innerHTML = '';


  for (let i = 1; i <= 6; i++) {
    const card = createCardElement(`Card ${i} - ${category}`);
    cardContainer.appendChild(card);
  }
}


function createCardElement(title) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  `;
  return card;
}

updateCards('personal');
