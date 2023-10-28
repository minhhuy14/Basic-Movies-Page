import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';

import DBProvider from './dbProvider.js';

export default {
    name: 'App',
    data(){
        return {
            // DBProvider,
        };
    },
    components:{
        Header,
        Nav,
        Main,
        Footer,
        DBProvider
    },
    methods:{
        showData(){
            console.log(DBProvider.Movies);
        }
    },
    template:`
        <Header/>
        <Nav/>
        <Main />
        <Footer/>
        <DBProvider />
    `,
//     mounted(){
//         const searchResults = Movies[0].id;
// console.log(searchResults);

// // Get details of the movie with id 'tt0012349'
// const movieDetails = Movies.getDetails('tt0012349');
// console.log(movieDetails);
//     }
}