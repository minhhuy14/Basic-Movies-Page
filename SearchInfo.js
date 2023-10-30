export default{
    name: 'SearchInfo',
    props:['searchResults','notFound','showDetailMovie'],
    
    template:`
    <div class="card-container">
        <div v-for="movie in searchResults" 
        @click=showDetailMovie(movie.id)
        class="card search-movie">
        <img :src="movie.image" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-title">{{movie.year}}</p>
            <p class="card-title">Rated: {{movie.ratings.imDb}}</p>
            <p class="card-title">Length: {{movie.runtimeStr}}</p>
        </div>   
        </div>
        <div v-if="notFound" class="no-results">
            <h2>Error: 404!</h2>
            <h2>No results found</h2>
        </div>
    </div>
    `
}