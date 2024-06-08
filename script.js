const catContainer = document.getElementById('cat-container');
const cats = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg'];

cats.forEach(cat => {
  const catDiv = document.createElement('div');
  catDiv.classList.add('cat');
  catDiv.style.backgroundImage = `url(${cat})`;
  catContainer.appendChild(catDiv);
});
