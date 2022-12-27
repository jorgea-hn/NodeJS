const moviesDB = [
    {
        id:1,
        title:'Nueve Reinas',
        mainActor:2,
    },
    {
        id:2,
        title:'El secreto de tus ojos',
        mainActor:1,
    },
    {
        id:3,
        title:'Cinema paradiso',
        mainActor:3,
    }
];

const actorsDB =[
    {
        id:1,
        name:"Guillermo Francella",
    },
    {
        id:2,
        name:"Ricardo Maestre",
    },
    {
        id:3,
        name:"Jose Perentino",
    },
];
function getMovieById(id){
    return new Promise((resolve,reject)=>{
        const movie = moviesDB.find(movie=> movie.id===id);
        if (!movie) reject(new Error("Movie does not exist"));
        resolve(movie)
    })
};

function getActorById(id){
    return new Promise((resolve,reject)=>{
        const actor = actorsDB.find(actor=> actor.id===id);
        if (!actor) reject(new Error("Movie does not exist"));
        resolve(actor)
    })
};


function getCompleteMovideById(movieId){
    getMovieById(movieId).then(movie=>{
        getActorById(movie.mainActor).then(actor=>{
            console.log(`La pelicula elegida es ${movie.title}, y su actor principal es ${actor.name}`)
        })
    })
    .catch(error => console.log(error))
    .finally(()=> console.log("Operations finished"))
}

getCompleteMovideById(2)