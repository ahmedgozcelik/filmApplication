import { elements } from '../Base';

export const displayResults = data => {
    data.results.forEach(movie => {
        const html = `
            <p>${movie.title}</p>
        `;
        elements.searchResult.insertAdjacentHTML("beforeend", html);
    });
}