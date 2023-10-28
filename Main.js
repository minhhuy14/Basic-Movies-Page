export default{
    name:'Main',
    data(){
        return {};
    },
    template:`
    <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      <div class="carousel-item">
      <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
    <div class="carousel-caption d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the third slide.</p>
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
  <div class="carousel-indicators indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
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