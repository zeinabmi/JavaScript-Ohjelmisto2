const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
const results = document.querySelector('#results');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchValue = searchInput.value;

    fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        results.innerHTML = '';

data.forEach(tvShow => {
    const article = document.createElement('article');
const image = document.createElement('img');
image.src = tvShow.show.image?.medium;
image.alt = tvShow.show.name;
    const name = document.createElement('h2');
    name.textContent = tvShow.show.name;
    const link = document.createElement('a');  
    const summary = document.createElement('div');
summary.innerHTML = tvShow.show.summary;
link.href = tvShow.show.url;
link.target = '_blank';
link.textContent = 'Details';

    article.appendChild(name);
    article.appendChild(link);
    article.appendChild(image);
    article.appendChild(summary);
    results.appendChild(article);
});
    });
});