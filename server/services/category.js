import redis from "../utils/redis.js";

export const addNewCategory = async(categoryName)=>{
    try{
        const result = await redis.lpush("AlCategories",categoryName);
        return result;
    }
    catch(e){
        return e;
    }
}