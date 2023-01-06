import axios from "axios";
import { Apikey } from "../Apikey";



export const getMovies = async (category, subCategory, language, page) => {
    try {
        const { data } = await axios(` https://api.themoviedb.org/3/${category}/${subCategory}?api_key=${Apikey}&language=${language}${page}`)
        const results = data.results || data 
        return results
    }catch(e){
        console.log(e)
    }   
}