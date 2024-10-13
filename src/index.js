const displayRamens = () => {
  fetch('http://localhost:3000/ramens') // Fetch data from the JSON server
    .then(response => response.json()) // Parse the JSON response
    .then(ramens => {
      const ramenMenu = document.getElementById('ramen-menu'); 
      ramenMenu.innerHTML = ''; 

      ramens.forEach(ramen => {
        const img = document.createElement('img'); 
        img.src = ramen.image; 
        img.alt = ramen.name;   

        img.addEventListener('click', () => handleClick(ramen)); 

        ramenMenu.appendChild(img); 
      });
    })
    .catch(error => {
      console.error('Error fetching ramen data:', error); 
    });
};

const handleClick = (ramen) => {
  const detailImage = document.querySelector('.detail-image'); 
  const nameElement = document.querySelector('.name'); 
  const restaurantElement = document.querySelector('.restaurant'); 
  const ratingDisplay = document.getElementById('rating-display'); 
  const commentDisplay = document.getElementById('comment-display'); 

  detailImage.src = ramen.image; 
  detailImage.alt = ramen.name;    
  nameElement.textContent = ramen.name; 
  restaurantElement.textContent = ramen.restaurant; 
  ratingDisplay.textContent = ramen.rating; 
  commentDisplay.textContent = ramen.comment; 
};

const addSubmitListener = () => {
  const form = document.getElementById('new-ramen'); 

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = document.getElementById('new-name').value; 
    const restaurant = document.getElementById('new-restaurant').value; 
    const image = document.getElementById('new-image').value; 
    const rating = document.getElementById('new-rating').value; 
    const comment = document.getElementById('new-comment').value; 

    const newRamen = {
      name: name,
      restaurant: restaurant,
      image: image,
      rating: rating,
      comment: comment
    };

    const ramenMenu = document.getElementById('ramen-menu'); 
    const img = document.createElement('img'); 
    img.src = newRamen.image; 
    img.alt = newRamen.name; 

    img.addEventListener('click', () => handleClick(newRamen)); 

    ramenMenu.appendChild(img); 

    form.reset(); 
  });
};

const main = () => {
  displayRamens(); 
  addSubmitListener(); 
};

window.addEventListener('load', main);
