import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';

import DetailMovieInfo from './DetailMovieInfo.js';

import DetailActorInfo from './DetailActorInfo.js';

import Movies from './db/data.js';

import {fetch} from './dbProvider.js';

export default {
    name: 'App',
    data(){
        return {
            selectedMovie:null,
            selectedActor:null,
        };
    },
   
    components:{
        Header,
        Nav,
        Main,
        DetailMovieInfo,
        DetailActorInfo,
        Footer,
    },
    methods:{
        showData: function() {
                        console.log(Movies);
                        const result=fetch('detail/movie/tt0099685');
        },
        showDetailMovie(movieId){
            console.log('Show detail:');
            console.log(movieId);

           fetch(`detail/movie/${movieId}`)
           .then(
                mv => this.selectedMovie=mv
            );

        },
        showDetailActor(actorId){
            console.log('Show detail Actor:');
            console.log(actorId);

           fetch(`detail/name/${actorId}`)
           .then(
               
                actor=> {
                    this.selectedActor=actor.item;
                    console.log('Actorr');
                    console.log(actor);
                }
            );

        },
    },
    created(){
        this.showData();
    },
    template:`
        <Header/>
        <Nav/>
        <Main v-if="!selectedMovie&&!selectedActor" :showDetailMovie="showDetailMovie"/>
        <DetailMovieInfo :selectedMovie="selectedMovie" :showDetailActor="showDetailActor" v-if="selectedMovie&&!selectedActor"/>
        <DetailActorInfo :selectedActor="selectedActor" v-if="selectedActor"/>
        <Footer/>
    `
}