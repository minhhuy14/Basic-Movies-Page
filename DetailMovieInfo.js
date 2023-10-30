
export default{
    name: 'DetailMovieInfo',
    props: ['selectedMovie','selectedActor','showDetailActor'],
    data()
    {
        return {
           clickedActor:null,
           isLoading:false,
        }
    },
    methods:{
        onClickedActor(idActor){
            this.isLoading = true;
            clickedActor = idActor;
            this.isLoading = false;
        },
    },
    template:`
            <div v-if="isLoading">Loading Information...</div>
            <div v-else class="main-movie-content">
                <img :src = this.selectedMovie.item.image class="detail-img">
                <div class="detail-content">
                <h3> {{this.selectedMovie.item.title}} </h3><br>
                <h5>Full Titile: {{this.selectedMovie.item.fullTitle}}</h5>
                <h5>Release year: {{this.selectedMovie.item.year}}</h5>
                <h5>List Directors:</h5>
                <table class="table table-bordered border-secondary table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody class="table-striped">
                            <tr v-for="person in selectedMovie.item.directorList">
                                <th scope="row">{{ person.id }}</th>
                                <td>{{ person.name }}</td>
                            </tr>
                        </tbody>
                </table>
                <h5>Plot</h5>
                <p>{{this.selectedMovie.item.plot}}</p>
                <div class="actor-box">
                <h5>Genres</h5>
                <li v-for="it in this.selectedMovie.item.genreList">{{it.value}}</li>
                </div>
            </div>
            </div>
            <div class="addtion-content">
            <h5>Actor List</h5>
            <table class="table table-bordered border-secondary table-hover table-striped">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>As Character</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr v-for="person in selectedMovie.item.actorList"
                    @click=showDetailActor(person.id) >
                    <th scope="row">{{ person.id }}</th>
                    <td> <a class="actor-link">{{ person.name }}</a></td>
                    <td>{{ person.asCharacter }}</td>
                </tr>
            </tbody>
           </table>
           </div>
           <h5>Review Infomation</h5>
            <table class="table table-bordered border-secondary table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Username</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Content</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr v-for="rv in this.selectedMovie.reviewsInfo">
                    <th scope="row">{{ rv.username }}</th>
                    <td>{{ rv.title }}</td>
                    <td>{{ rv.date }}</td>
                    <td>{{ rv.content }}</td>
                    <td>{{ rv.rate }}</td>

                </tr>
            </tbody>
           </table>
        `



}