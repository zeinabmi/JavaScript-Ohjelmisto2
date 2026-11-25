const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
const results = document.querySelector('#results');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchValue = searchInput.value;

    fetch(`https://api.chucknorris.io/jokes/search?query=${searchValue}`)
        .then(response => response.json())
        .then(data => {
            results.innerHTML = '';

            data.result.forEach(joke => {
                const article = document.createElement('article');

                const paragraph = document.createElement('p');
                paragraph.textContent = joke.value;

                article.appendChild(paragraph);
                results.appendChild(article);
            });
        });
});