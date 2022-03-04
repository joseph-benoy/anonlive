import redis from "../utils/redis.js";

/**
 * Add new category to chatroom
 * @param {*} categoryName 
 * @returns result
 */
export const addNewCategory = async(categoryName)=>{
    try{
        const result = await redis.lpush("AlCategories",categoryName);
        return result;
    }
    catch(e){
        return e;
    }
}
/**
 * Get all catgories
 * @returns list
 */
export const getAllCategories = async()=>{
    try{
        const result = await redis.lrange("AlCategories",0,-1);
        return result;
    }
    catch(e){
        return e;
    }
}