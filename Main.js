import { fetch } from './dbProvider.js';

export default{
    name:'Main',
    props:['showDetailMovie'],
    data(){
        return {
          topBoxOfficeMovies:[],
          mostPopularMovies:[],
          top15PopularMovies:[],
          top50Movies:[],
          top15RatingMovies:[],
          hoveredID:-1,
        };
    },
    methods:{
      chunk(array, size) {
        return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
            array.slice(i * size, i * size + size)
        );
      },
      onHover(id){
        this.hoveredID= id
      }
    },
    created()
    {   
        fetch('get/topboxoffice/?per_page=5&page=1')
          .then(result =>{
              this.topBoxOfficeMovies=result.items;
              console.log('Top office: ');
              console.log(this.topBoxOfficeMovies);
          });
        
        fetch('get/mostpopular/?per_page=3&page=1')
          .then(popularresult =>{
              this.mostPopularMovies=popularresult.items;
              this.top15PopularMovies=this.mostPopularMovies.slice(0,15);
              console.log('Top Popular: ');
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
  <div id="topMoviesIndicator" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="(movie, index) in topBoxOfficeMovies" :key="index" type="button"
        data-bs-target="#topMoviesIndicator" :data-bs-slide-to="index" :class="{ active: index === 0 }"
        :aria-label="'Movie ' + (index + 1)" :aria-current="index === 0"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(movie, index) in topBoxOfficeMovies" 
        :key="index" 
        class="carousel-item top-movies-item"
        :class="{ active: index === 0 }"
        @click=showDetailMovie(movie.id)>
        <img :src="movie.image" class="d-block top-movies-img" alt="">
        <div class="carousel-caption d-none d-md-block top-movies-caption">
          <h5>{{ movie.title }}</h5>
          <p>{{ movie.year }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#topMoviesIndicator" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#topMoviesIndicator" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="popular-movies">
    <h5>Most Popular</h5>
    <div id="popularIndicator" class="carousel slide" style="height: 40%;">
      <div class="carousel-indicators indicator-style">
        <button v-for="(movie, index) in 5" :key="index" type="button" data-bs-target="#popularIndicator"
          :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-label="'Movie ' + (index + 1)"
          :aria-current="index === 0"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(group, index) in chunk(top15PopularMovies, 3)" 
          :key="index" class="carousel-item"
          :class="{ active: index === 0 }">
          <div class="movie-item-box">
          <div v-for="movie in group" class="item-movie">
              <img :src="movie.image" class="d-block movies-styles zoom-onhover" alt=""
              @click=showDetailMovie(movie.id) @mouseover="onHover(movie.id)" @mouseleave="onHover(null)">
              <div class="d-none d-md-block popular-movies-caption" v-if="this.hoveredID==movie.id">
                  <h5>{{ movie.title }}</h5>
                  <p>{{ movie.year }}</p>
              </div>
          </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#popularIndicator"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#popularIndicator"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <div class="top-rating-movies">
    <h5>Top Rating</h5>
    <div id="topRatingIndicator" class="carousel slide" style="height: 40%;">
      <div class="carousel-indicators indicator-style">
        <button v-for="(movie, index) in 5" :key="index" type="button" data-bs-target="#topRatingIndicator"
          :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-label="'Movie ' + (index + 1)"
          :aria-current="index === 0"></button>
      </div>
      <div class="carousel-inner">
        <div v-for="(group, index) in chunk(top15RatingMovies, 3)" :key="index" class="carousel-item"
          :class="{ active: index === 0 }">
          <div class="movie-item-box">
          <div v-for="movie in group" class="item-movie">
            <img :src="movie.image" class="d-block movies-styles zoom-onhover" alt=""
            @click=showDetailMovie(movie.id) @mouseover="onHover(movie.id)" @mouseleave="onHover(null)">
            <div class="d-none d-md-block popular-movies-caption" v-if="this.hoveredID==movie.id">
              <h5>{{ movie.title }}</h5>
              <p>{{ movie.year }}</p>
            </div>
          </div>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#topRatingIndicator"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#topRatingIndicator"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
    `
}