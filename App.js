import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';

import DetailMovieInfo from './DetailMovieInfo.js';

import DetailActorInfo from './DetailActorInfo.js';

import SearchInfo from './SearchInfo.js';

import {fetch} from './dbProvider.js';

export default {
    name: 'App',
    data(){
        return {
            selectedMovie:null,
            selectedActor:null,
            isLoading: false,
            searchResults:[],
            isSearching:false,
            notFound:false,
            
        };
    },
   
    components:{
        Header,
        Nav,
        Main,
        DetailMovieInfo,
        DetailActorInfo,
        SearchInfo,
        Footer,
    },
    methods:{
        showDetailMovie(movieId){
            console.log('Show detail:');
            console.log(movieId);
            this.isLoading = true;
           fetch(`detail/movie/${movieId}`)
           .then(
                mv => {
                    this.selectedMovie=mv;
                    this.isLoading = false;
                }
            ) 
            .catch(() => {

                this.isLoading=false;
            });

        },
        showDetailActor(actorId){
            console.log('Show detail Actor:');
            console.log(actorId);
            this.isLoading = true;
           fetch(`detail/name/${actorId}`)
           .then(
               
                actor=> {
                    this.selectedActor=actor.item;
                    console.log('Actorr');
                    console.log(actor);
                    this.isLoading = false;
                }
            )
            .catch(() => {
                this.isLoading=false;
            });

        },
        async search(query) {
            this.isLoading = true;
            this.isSearching = true;
            this.selectedMovie = null;
            this.selectedActor = null;
            this.searchResults = []; 
            this.notFound = false;
            try {
                const movieResults = await fetch(`search/movie/${query}?per_page=6&page=1`);
                console.log('Movie results:', movieResults);
                this.searchResults = movieResults.items;
            }
            catch(e){

            };

            try{
                const nameResults = await fetch(`search/name/${query}?per_page=6&page=1`);
                console.log('Name results:', nameResults);
                for (let i = 0; i < nameResults.items.length; i++) {
                    this.searchResults.push(nameResults.items[i]);
                }
            }
            catch(e)
            {
                if (this.searchResults.length == 0) {
                    this.notFound = true;
                }
            }
             finally {
                this.isLoading = false;
             }
               
            console.log(this.searchResults.length);
    
           
        }},
    template:`
        <Header/>
        <Nav @goHome="selectedMovie=null,selectedActor=null,isSearching=false" @search="search"/>
        <div v-if="isLoading">Loading Infomation...</div>
        <div v-else>
            <DetailMovieInfo :selectedMovie="selectedMovie" :showDetailActor="showDetailActor" v-if="selectedMovie&&!selectedActor"/>
            <DetailActorInfo :selectedActor="selectedActor" v-else-if="selectedActor"/>
            <SearchInfo v-else-if="isSearching" :searchResults="searchResults" :notFound="notFound" :showDetailMovie="showDetailMovie"/> 

            <Main v-else :showDetailMovie="showDetailMovie"/>
        </div>
        <Footer/>
    `
}