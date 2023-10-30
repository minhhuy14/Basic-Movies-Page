
import Movies from './db/data.js';

// Define the DB provider module
export function fetch(queryInfo) {
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
                let uniqueItems=new Set();

                try {
                    if (classInfo=='movie')
                    {
                        let found = false;
                        for (let i=0; i<Movies.Movies.length; i++)
                        {
                            let movie=Movies.Movies[i];
                            if (movie.fullTitle.toLowerCase().search(pattern)!=-1)
                            {
                                if (!uniqueItems.has(movie.id)){
                                    uniqueItems.add(movie.id);
                                    objResult.items.push(movie);
                                    objResult.total+=1;
                                    found=true;
                                }
                                
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
                                    if (!uniqueItems.has(movie.id)) {
                                        uniqueItems.add(movie.id);
                                        objResult.items.push(movie);
                                        objResult.total+=1;
                                        found=true;
                                    }
                                }

                            }
                        }
                        if (!found)
                        {
                                reject(new Error('Actor not found'));
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
                    reviewsInfo:[]
                };
                try {
                    if (classInfo=='movie')
                    {
                        let found=false;
                        for (let i=0; i<Movies.Movies.length; i++)
                        {
                            let movie=Movies.Movies[i];
                            if (movie.id.toLowerCase().search(pattern)!=-1)
                            {
                            objResult.item=movie;
                            found=true;
                            break;
                            }
                            
                        }
                        if (found==false){
                            for (let i=0; i<Movies.MostPopularMovies.length; i++)
                            {
                                let movie=Movies.MostPopularMovies[i];
                            if (movie.id.toLowerCase().search(pattern)!=-1)
                            {
                                objResult.item=movie;
                                found=true;
                                break;
                            } 
                            }
                        }
                        if (found==false){
                            for (let i=0; i<Movies.Top50Movies.length; i++)
                            {
                                let movie=Movies.Top50Movies[i];
                            if (movie.id.toLowerCase().search(pattern)!=-1)
                            {
                                objResult.item=movie;
                                found=true;
                                break;
                            } 
                            }
                        }
                        //Tìm kiếm trên reviewsList để lấy review cho movie
                        for (let i=0;i<Movies.Reviews.length;i++)
                        {
                            let rv=Movies.Reviews[i];
                            if (rv.movieId.toLowerCase().search(pattern)!=-1)
                            {
                                objResult.reviewsInfo=rv.items;
                                break;
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
                        sortByRevenue(Movies.Movies);
                        for (let i=0;i<5;i++)
                        {   
                            objResult.items.push(Movies.Movies[i]);
                            objResult.total += 1;
                        }
                    }
                    objResult.total_page =Math.floor( objResult.total / objResult.per_page) + ((objResult.total % objResult.per_page) == 0 ? 0 : 1);
                    console.log(objResult);
                    resolve(objResult); 
                } catch (error) {
                    reject(error); 
                }
                
            }
            })
        }

//         
export function sortByRevenue(list){
            list.sort((a, b) => {
                const grossA = a.boxOffice.cumulativeWorldwideGross ? parseInt(a.boxOffice.cumulativeWorldwideGross.replace('$', '').replace(/,/g, '')) : a.boxOffice.grossUSA ? parseInt(a.boxOffice.grossUSA.replace('$', '').replace(/,/g, '')) : 0;
                const grossB = b.boxOffice.cumulativeWorldwideGross ? parseInt(b.boxOffice.cumulativeWorldwideGross.replace('$', '').replace(/,/g, '')) : b.boxOffice.grossUSA ? parseInt(b.boxOffice.grossUSA.replace('$', '').replace(/,/g, '')) : 0;
                return grossB - grossA;
            })
        }
