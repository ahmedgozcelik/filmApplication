// api: 02f36b989cc341b1d6a1831b92e8a190
// url: https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

//model-view-controller

import Search from './models/Search';

const search = new Search('abc');
console.log(search);
search.getResult();