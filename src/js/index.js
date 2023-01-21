// api: 02f36b989cc341b1d6a1831b92e8a190
// url: https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

async function getResult(keyword){
    const api_key = "02f36b989cc341b1d6a1831b92e8a190";
    const base_url = "https://api.themoviedb.org/3";

    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${keyword}`);
    const data = await response.json();
    console.log(data.results);
}

getResult('abc');
