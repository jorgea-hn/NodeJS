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
async function getMovieById(id){
    try{

        const movie = await moviesDB.find(movie=> movie.id===id);
        if (!movie) throw new Error("Movie does not exist");
        return movie;
    }catch(error){
        throw new Error(error.message);
    }
    
};

async function getActorById(id){
    try{

        const actor =await  actorsDB.find(actor=> actor.id===id);
        if (!actor) throw new Error("Movie does not exist");
        return actor;
    }
    catch(error){
        throw new Error (error.message);
    }

};


async function getCompleteMovideById(movieId){
    try{
        const movie = await getMovieById(movieId);
    const actor = await getActorById(movie.mainActor);
    console.log(`La pelicula selecionada es ${movie.title}, y su actor principal es ${actor.name}`)
    }
    catch(error){
        throw new Error (error.message);
    }
    
}

getCompleteMovideById(2)