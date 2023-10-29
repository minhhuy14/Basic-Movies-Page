import { fetch } from './dbProvider.js';

export default{
    name:'Main',
    data(){
        return {
          topBoxOfficeMovies:[],
          mostPopularMovies:[],
          top15PopularMovies:[],
          top50Movies:[],
          top15RatingMovies:[]
        };
    },
    methods:{
      chunk(array, size) {
        return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
            array.slice(i * size, i * size + size)
        );
    },
    },
    created()
    {
        fetch('get/topboxoffice/?per_page=5&page=1')
          .then(result =>{
              this.topBoxOfficeMovies=result.items;
          });
        
        fetch('get/mostpopular/?per_page=3&page=1')
          .then(popularresult =>{
              this.mostPopularMovies=popularresult.items;
              this.top15PopularMovies=this.mostPopularMovies.slice(0,15);
              console.log('Popular: ');
              console.log(this.top15PopularMovies);
          });
          fetch('get/top50/?per_page=3&page=1')
          .then(toprating_result =>{
              this.top50Movies=toprating_result.items;
              this.top15RatingMovies=this.top50Movies.slice(0,15);
              console.log('Top Rating: ');
              console.log(this.top15RatingMovies);
          });
        
    },
    template:`
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="(movie, index) in topBoxOfficeMovies" :key="index" type="button"
        data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index" :class="{ active: index === 0 }"
        :aria-label="'Movie ' + (index + 1)" :aria-current="index === 0"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(movie, index) in topBoxOfficeMovies" :key="index" class="carousel-item top-movies-item"
        :class="{ active: index === 0 }">
        <img :src="movie.image" class="d-block w-50 top-movies-img" alt="...">
        <div class="carousel-caption d-none d-md-block top-movies-caption">
          <h5>{{ movie.title }}</h5>
          <p>{{ movie.year }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="popular-movies">
    <h5>Most Popular</h5>
    <div id="carouselExampleIndicators2" class="carousel slide" style="height: 40%;">
      <div class="carousel-indicators">
        <button v-for="(movie, index) in 5" :key="index" type="button" data-bs-target="#carouselExampleIndicators2"
          :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-label="'Movie ' + (index + 1)"
          :aria-current="index === 0"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(group, index) in chunk(top15PopularMovies, 3)" :key="index" class="carousel-item"
          :class="{ active: index === 0 }">
          <div class="d-flex justify-content-around">
            <div v-for="movie in group" class="p-2 flex-fill">
              <img :src="movie.image" class="d-block w-50 popular-movies-styles" alt="...">
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <div class="top-rating-movies">
    <h5>Top Rating</h5>
    <div id="carouselExampleIndicators3" class="carousel slide" style="height: 40%;">
      <div class="carousel-indicators">
        <button v-for="(movie, index) in 5" :key="index" type="button" data-bs-target="#carouselExampleIndicators3"
          :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-label="'Movie ' + (index + 1)"
          :aria-current="index === 0"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(group, index) in chunk(top15RatingMovies, 3)" :key="index" class="carousel-item"
          :class="{ active: index === 0 }">
          <div class="d-flex justify-content-around">
            <div v-for="movie in group" class="p-2 flex-fill">
              <img :src="movie.image" class="d-block w-50 popular-movies-styles" alt="...">
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
    `
}