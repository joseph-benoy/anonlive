export const postData = async(url:string,data:any)=>{
    try{
        const res = await fetch(url,{
            method:"post",
            body:data
        })
        return true;
    }
    catch(e){
        return false;
    }

}