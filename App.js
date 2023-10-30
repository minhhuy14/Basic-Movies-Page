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
           fetch(`detail/movie/${movieId}`)
           .then(
                mv => {
                    this.selectedMovie=mv;
                }
            ) 
            .catch(() => {

            });

        },
        showDetailActor(actorId){
            console.log('Show detail Actor '+actorId);
           fetch(`detail/name/${actorId}`)
           .then(
               
                actor=> {
                    this.selectedActor=actor.item;
                }
            )
            .catch(() => {

            });

        },
        async search(query) {
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
            catch(e){};

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
               
            console.log('Số lượng kết quả tìm kiếm: '+this.searchResults.length);
    
        }},
    template:`
        <Header/>
        <Nav @goHome="selectedMovie=null,selectedActor=null,isSearching=false" @search="search"/>
            <DetailMovieInfo :selectedMovie="selectedMovie" :showDetailActor="showDetailActor" v-if="selectedMovie&&!selectedActor"/>
            <DetailActorInfo :selectedActor="selectedActor" v-else-if="selectedActor"/>
            <SearchInfo v-else-if="isSearching" :searchResults="searchResults" :notFound="notFound" :showDetailMovie="showDetailMovie"/> 
            <Main v-else :showDetailMovie="showDetailMovie"/>
        <Footer/>
    `
}