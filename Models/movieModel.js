import mongoose from "mongoose";
// import AutoIncrementFactory from 'mongoose-sequence';

// const AutoIncrement = AutoIncrementFactory(mongoose);
const movieSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    watched:{
        type:Boolean,
        required:true
    },
    release_year:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    review:String
});

// Add the auto-increment plugin to your schema
// movieSchema.plugin(AutoIncrement, { inc_field: 'id' });

// Create the model
const Movie = mongoose.model('movies', movieSchema);

export default Movie;