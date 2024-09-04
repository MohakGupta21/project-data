import { Movie } from "../models/movieModel.js";

export const getAllMovies = async(req,res)=>{
    // console.log("GET");
    try {
        const movies = await Movie.find();
        // console.log(movies);
    
        res.status(200).json(movies); 
    } catch (error) {
        // console.log(error);
        res.status(500).json({error:error.message});   
    }

}

export const updateMovies = async(req,res)=>{
    // console.log("GET");
    const id = req.params.id;
    // console.log(id);
    const movie = await Movie.findOne({id:id});


    try {
        if(movie){
            await movie.updateOne({$set: req.body});
            res.status(200).json({'message':'Updated Successfully'});

        }
        else
            res.status(402).json({'message':'Movie does not exist'});


        // res.status(200).json(Movie);
    } catch (error) {
        // console.log(error);
        res.status(500).json({error:error.message});
       
    }

}

export const addMovie = async(req,res)=>{

    const {id,title,description,watched,release_year,genre,rating,review}=req.body;
    // console.log(id);
    const newMovie = new Movie({
        id,title,description,watched,release_year,genre,rating,review
    });
    // console.log("GET");
    try {
        await newMovie.save();
        res.status(200).json(newMovie);
    } catch (error) {
        // console.log(error);
        res.status(500).json({error:error.message});
    }
}

export const deleteMovie = async(req,res)=>{
    // console.log("GET");
    const id = parseInt(req.params.id);

    try {
        const movie = await Movie.find({id:id});
        
        if(movie){
            await Movie.findOneAndDelete({id:id});
            res.status(200).json({'message':'Deleted Successfully'});

        }
        else
            res.status(402).json({'error':'Movie does not exist'});

    } catch (error) {
        // console.log(error);
        res.status(500).json({message:error.message});
       
    }
}