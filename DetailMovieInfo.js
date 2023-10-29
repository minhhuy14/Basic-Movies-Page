
export default{
    name: 'DetailMovieInfo',
    props: ['selectedMovie'],
    data()
    {
        return {
           
        }
    },

    mounted(){
        console.log('Selected Movie:');

        console.log(this.selectedMovie);
        
    },
    template:`
            <div class="detail-info">
            <img :src = this.selectedMovie.image class="detail-img">
            <div class="detail-content">
            <h3> {{this.selectedMovie.title}} </h3><br>
            <h5>Full Titile: {{this.selectedMovie.fullTitle}}</h5>
            <h5>Public year: {{this.selectedMovie.year}}</h5>
            <h5>List Directors:</h5>
            <table class="table table-bordered border-primary">
                    <thead class="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody class="table-striped">
                        <tr v-for="person in this.selectedMovie.directorList">
                            <th scope="row">{{ person.id }}</th>
                            <td>{{ person.name }}</td>
                        </tr>
                    </tbody>
            </table>
            <h5>Plot</h5>
            <p>{{this.selectedMovie.plot}}</p>
            <div class="actor-box">
            <h5>Genres</h5>
            <li v-for="it in this.selectedMovie.genreList">{{it.value}}</li>
            <h5>Actor List</h5>
            <table class="table table-bordered border-primary">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>As Character</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr v-for="person in this.selectedMovie.actorList">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.asCharacter }}</td>
                </tr>
            </tbody>
           </table>
        </div>
        </div>
        </div>
    `

}