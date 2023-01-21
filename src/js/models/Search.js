//model class
export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
    }

    async getResult(){
        const api_key = "02f36b989cc341b1d6a1831b92e8a190";
        const base_url = "https://api.themoviedb.org/3";
    
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();
        console.log(this.data.results);
    }
}