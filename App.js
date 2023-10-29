import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';

import DetailMovieInfo from './DetailMovieInfo.js';

import Movies from './db/data.js';

import {fetch} from './dbProvider.js';

export default {
    name: 'App',
    data(){
        return {
            selectedMovie:null,
           
        };
    },
   
    components:{
        Header,
        Nav,
        Main,
        DetailMovieInfo,
        Footer,
    },
    methods:{
        showData: function() {
                        console.log(Movies);
                        const result=fetch('get/top50/?per_page=15&page=1');
                        console.log('Result ');
                        console.log(result.get);
        },
        showDetailMovie(movieId){
            console.log('Show detail:');
            console.log(movieId);

           fetch(`detail/movie/${movieId}`)
           .then(
                mv => this.selectedMovie=mv.item
            );

            console.log(this.selectedMovie);
        },
    },
    created(){
        this.showData();
    },
    template:`
        <Header/>
        <Nav/>
        <Main v-if="!selectedMovie" :showDetailMovie="showDetailMovie" />
        <DetailMovieInfo :selectedMovie="selectedMovie" v-if="selectedMovie"/>
        <Footer/>
    `
}