import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';

import Movies from './db/data.js';

import {fetch} from './dbProvider.js';

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
    },
    methods:{
        showData: function() {
                        console.log(Movies);
                        const result=fetch('get/top50/?per_page=15&page=1');
                        console.log('Result ');
                        console.log(result);
                    }
        },

    created(){
        this.showData();
    },
    template:`
        <Header/>
        <Nav/>
        <Main />
        <Footer/>
    `
}