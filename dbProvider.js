
import Movies from './db/data.js';

// Define the DB provider module
export default {
    data: function() {
        return {
            Movies,
        }
    },

    methods: {
        fetch: function(queryInfo) {
            return new Promise((resolve, reject) => {
            
            console.log(queryInfo);
            const str = queryInfo.toLowerCase().split('/');
            const typeInfo=str[0];
            const classInfo=str[1];
            let pattern='';
            let perpage;
            let page;
            if (typeInfo!='detail')
            {
                const rest=str[2].split('?');
                pattern=rest[0];
                const params=rest[1];
                
                const paramValues=params.split('&')
                const firstParam=paramValues[0];
                const secondParam=paramValues[1];

                perpage=firstParam.split('=')[1];
                page=secondParam.split('=')[1];
            }
            else {
                pattern=str[2];
            }

            let objResult={
            };
            if (typeInfo=='search')
            {
                objResult = {
                    [typeInfo]:pattern,
                    page: parseInt(page),
                    per_page: parseInt(perpage),
                    total_page: 0,
                    total: 0,
                    items:[]
                };

                try {
                    if (classInfo=='movie')
                    {
                        let found = false;
                        for (let i=0; i<Movies.Movies.length; i++)
                        {
                            let movie=Movies.Movies[i];
                            if (movie.fullTitle.toLowerCase().search(pattern)!=-1)
                            {
                                objResult.items.push(movie);
                                objResult.total+=1;
                                found=true;
                            } 
                        }
                        if (!found)
                        {
                                reject(new Error('Movie not found'));
                        }
                    } 
                    else if (classInfo=='name')
                    {
                        let found=false;
                        for (let i=0; i<Movies.Movies.length; i++)
                        {
                            let movie=Movies.Movies[i];
                            for (let j=0; j<movie.actorList.length; j++)
                            {
                                if (movie.actorList[j].name.toLowerCase().search(pattern)!=-1)
                                {
                                    objResult.items.push(movie);
                                    objResult.total+=1;
                                    found=true;
                                }

                            }
                            if (!found)
                            {
                                reject(new Error('Actor not found'));
                            }
                            
                        }
                    }
                    objResult.total_page =Math.floor( objResult.total / objResult.per_page) + ((objResult.total % objResult.per_page) == 0 ? 0 : 1);
                    console.log(objResult);
                    resolve(objResult); 
                } catch (error) {
                    reject(error); 
                }
            }

            if (typeInfo=='detail'){
                objResult = {
                    id:pattern,
                    item:{},
                };
                try {
                    if (classInfo=='movie')
                    {
                    for (let i=0; i<Movies.Movies.length; i++)
                    {
                        let movie=Movies.Movies[i];
                        if (movie.id.toLowerCase().search(pattern)!=-1)
                        {
                           objResult.item=movie;
                        }
                        
                    }
                     }
                    if (classInfo=='name')
                    {
                        for (let i=0; i<Movies.Names.length; i++)
                     {
                        let actor=Movies.Names[i];
                        if (actor.id.toLowerCase().search(pattern)!=-1)
                        {
                           objResult.item=actor;
                        }
                        
                    }
                    }
                    console.log(objResult);
                    resolve(objResult); 
                } catch (error) {
                    reject(error);
                }
                
            }

            if (typeInfo=='get'){
                objResult={
                [typeInfo]:classInfo,
                page: parseInt(page),
                per_page: parseInt(perpage),
                total_page: 0,
                total: 0,
                items:[]
                }
                try {
                    if (classInfo=='top50')
                    {
                    for (let i=0; i<Movies.Top50Movies.length; i++)
                    {
                        let movie=Movies.Top50Movies[i];
                        objResult.items.push(movie);  
                        objResult.total += 1; 
                    }
    
                    }
                    else if (classInfo=='mostpopular')
                    {
                    for (let i=0; i<Movies.MostPopularMovies.length; i++)
                    {
                        let movie=Movies.MostPopularMovies[i];
                        objResult.items.push(movie);  
                        objResult.total += 1; 
                        
                    }
                    }
                    else if (classInfo=='topboxoffice'){

                    }
                    objResult.total_page =Math.floor( objResult.total / objResult.per_page) + ((objResult.total % objResult.per_page) == 0 ? 0 : 1);
                    console.log(objResult);
                    resolve(objResult); // Resolve the promise with the result
                } catch (error) {
                    reject(error); // Reject the promise with the error
                }
                
            }
            })
        },

        showData: function() {
            console.log(Movies);
            this.fetch('detail/movie/tt0015864');
        }
    },

    template: `
    <button type = "button" @click = "showData">Click me</button>
    `,
};