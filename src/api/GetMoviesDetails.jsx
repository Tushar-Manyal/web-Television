
export const getMoviesDetails = async({params}) => {
    console.log(params);
    const id=params.moviesID
    try{
       const response=await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_APIKEY}`);
       const data=response.json();
       return data;
    }catch(error){
        console.log(error);
    }
 
};

