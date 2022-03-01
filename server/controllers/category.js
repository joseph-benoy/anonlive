import { addNewCategory } from "../services/category.js"

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