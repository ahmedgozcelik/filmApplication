// api: 02f36b989cc341b1d6a1831b92e8a190
// url: https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

//model-view-controller

const state = {};

const searchController = async () => {
    const keyword = document.getElementById("txt-keyword").value;
    if(keyword) {
        state.search = new Search(keyword);
        await state.search.getResult();
        console.log(state.search.data);

    }else {
        alert("Anahtar kelimes girmelisiniz.")
    }
}

import Search from './models/Search';

document.getElementById("form-search").addEventListener("submit", function(e){
    e.preventDefault();
    searchController();
    console.log("form submitted");
})