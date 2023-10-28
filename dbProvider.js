
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
            // Parse the queryInfo string
            const str = queryInfo.toLowerCase().split('/');
            const typeInfo=str[0];
            console.log('Type '+typeInfo);
            const classInfo=str[1];
            console.log('ClassInfo: '+classInfo);
            let pattern='';
            let perpage;
            let page;
            if (typeInfo!='detail')
            {
                const rest=str[2].split('?');
                pattern=rest[0];
                const params=rest[1];
                console.log('Parram '+params);
                
                const paramValues=params.split('&')
                const firstParam=paramValues[0];
                console.log(firstParam);
    
                const secondParam=paramValues[1];
                console.log(secondParam);
                perpage=firstParam.split('=')[1];
                page=secondParam.split('=')[1];
                console.log('Page: '+page);
                console.log('Per Page: '+perpage);    
            }
            else {
                pattern=str[2];
                console.log('Pattern '+pattern);
                console.log(typeInfo);
                console.log(classInfo);
            }

            let objResult={
            };
            console.log('ABC');
            if (typeInfo=='search')
            {
                console.log(typeInfo);

                objResult = {
                    type: typeInfo,
                    class: classInfo,
                    page: parseInt(page),
                    per_page: parseInt(perpage),
                    total_page: 0,
                    total: 0,
                    items:[]
                };

                console.log(classInfo);
                if (classInfo=='movie')
                {
                    console.log('Type Info: '+typeInfo);
                    for (let i=0; i<Movies.Movies.length; i++)
                    {
                        let movie=Movies.Movies[i];
                        if (movie.fullTitle.toLowerCase().search(pattern)!=-1)
                        {
                            objResult.items.push(movie);
                            objResult.total+=1;
                        }
                    }
                    console.log(objResult);
                } else if (classInfo=='name')
                {
                    console.log('Type Info: '+typeInfo);
                    for (let i=0; i<Movies.Movies.length; i++)
                    {
                        let movie=Movies.Movies[i];
                        for (let j=0; j<movie.actorList.length; j++)
                        {
                            if (movie.actorList[j].name.toLowerCase().search(pattern)!=-1)
                            {
                                objResult.items.push(movie);
                                objResult.total+=1;
                            }

                        }
                        
                    }

                    console.log(objResult);
                }
            }

        

            
            // const params = new URLSearchParams(rest.join('/').split('?')[1]);
        
            // Handle the query based on the type and class
            // if (type === 'search' && className === 'movie') {
            //     // Perform a search in the Movies module
            //     const results = Movies.search(pattern, params);
            //     resolve(results);
            // } else if (type === 'detail' && className === 'movie') {
            //     // Get the details of a specific movie in the Movies module
            //     const details = Movies.getDetails(pattern);
            //     resolve(details);
            // } else if (type === 'get' && className === 'top50') {
            //     // Get the top 50 movies in the Movies module
            //     const top50 = Movies.getTop50();
            //     resolve(top50);
            // } else {
            //     // If the query is not recognized, reject the promise
            //     reject(new Error('Invalid query'));
            // }
            // });
            })
        },

        showData: function() {
            console.log(Movies);
            this.fetch('search/name/smith?per_page=10&page=2');
        }
    },

    template: `
    <button type = "button" @click = "showData">Click me</button>
    `,
};