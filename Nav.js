export default {
    name: 'Nav',
    data() {
      return {
        
      };
    },

    methods: {
      goHome(){
        this.$emit('goHome');
        }
      },
    template: `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#" @click.prevent="goHome">Home</a>
                </li>
              </ul>
              <form class="d-flex" role="search" @submit.prevent="searchPage" v-on:keyup.enter.prevent="searchPage">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
    </nav>
    `,
  }
