import { fetch } from './dbProvider.js';

export default{
    name:'Main',
    data(){
        return {
          topBoxOfficeMovies:[],
          mostPopularMovies:[],
          top15PopularMovies:[],
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
        
    },
    template:`
    <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="(movie, index) in topBoxOfficeMovies" :key="index" type="button" data-bs-target="#carouselExampleCaptions" 
        :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-label="'Movie ' + (index + 1)" 
        :aria-current="index === 0"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(movie, index) in topBoxOfficeMovies" :key="index" class="carousel-item top-movies-item" :class="{ active: index === 0 }">
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
    <div class="carousel-indicators">
      <button v-for="(movie, index) in 5" :key="index" type="button" data-bs-target="#carouselExampleCaptions" 
    :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-label="'Movie ' + (index + 1)" 
    :aria-current="index === 0"></button>
    </div>
    <div class="carousel-inner">
    <div v-for="(group, index) in chunk(top15PopularMovies, 3)" :key="index" class="carousel-item" :class="{ active: index === 0 }">
    <div class="d-flex">
        <div v-for="movie in group" class="p-2 flex-fill ">
            <img :src="movie.image" class="d-block w-50 popular-movies-styles" alt="...">
        </div>
    </div>
</div>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  <div class="popular-movies">
  <h5>Top Rating</h5>
  <div id="carouselExampleIndicators3" class="carousel slide" style="height: 40%;">
  <div class="carousel-indicators indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
  <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
  <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
  <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
</div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="d-flex">
          <div class="p-2 flex-fill">Item 1</div>
          <div class="p-2 flex-fill">Item 2</div>
          <div class="p-2 flex-fill">Item 3</div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex">
          <div class="p-2 flex-fill">Item 4</div>
          <div class="p-2 flex-fill">Item 5</div>
          <div class="p-2 flex-fill">Item 6</div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex">
          <div class="p-2 flex-fill">Item 7</div>
          <div class="p-2 flex-fill">Item 8</div>
          <div class="p-2 flex-fill">Item 9</div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex">
          <div class="p-2 flex-fill">Item 10</div>
          <div class="p-2 flex-fill">Item 11</div>
          <div class="p-2 flex-fill">Item 12</div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex">
          <div class="p-2 flex-fill">Item 13</div>
          <div class="p-2 flex-fill">Item 14</div>
          <div class="p-2 flex-fill">Item 15</div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
    `
}