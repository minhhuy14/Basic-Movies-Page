import Header from './Header.js';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Main from './Main.js';

export default {
    name: 'App',
    data(){
        return {

        };
    },
    components:{
        Header,
        Nav,
        Main,
        Footer
    },
    methods:{

    },
    template:`
        <Header/>
        <Nav/>
        <Main />
        <Footer/>
    `
}