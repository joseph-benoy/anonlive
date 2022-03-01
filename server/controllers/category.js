import { addNewCategory, getAllCategories } from "../services/category.js"

export const addCategory = async(req,res)=>{
    try{
        if(req.body.name){
            const result =  await addNewCategory(req.body.name);
            return res.json({
                status:"added new category"
            });
        }
        else{
            throw new Error("Couldn't add new catgory");
        }
    }
    catch(e){
        return e;
    }
}
export const getCategories = async(req,res)=>{
    try{
        const result = await getAllCategories();
        return res.json(result);
    }
    catch(e){
        return res.status(500).json({
            error:"couldn't get catgories"
        })
    }
}