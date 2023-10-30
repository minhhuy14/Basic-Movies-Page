export default{
    name: 'DetailActorInfo',
    props: ['selectedActor'],
    
    template:`
        <div v-if="selectedActor.birthDate!=null">
        <div class="main-movie-content">
            <div class="detail-content">
                <h3> {{selectedActor.name}} </h3><br>
                <h5>BirthDate: {{selectedActor.birthDate}}</h5>
                <h5>Awards: {{selectedActor.awards}}</h5>
                <h5>Awards: {{selectedActor.role}}</h5>
                <h5>Summary</h5>
                <p>{{selectedActor.summary}}</p>
            </div>
            <img :src="selectedActor.image" class="detail-img">
        </div>
        <div class="addtion-content">
            <h5>Cast Movies</h5>
            <table class="table table-bordered border-secondary table-hover table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Movie ID</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody class="table-striped">
                <tr v-for="mv in selectedActor.castMovies">
                    <th scope="row">{{ mv.id }}</th>
                    <td>{{ mv.role }}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div v-else class="no-results">
            <h2>Can not find more information about this Actor from the database</h2>
        </div>
    `
}