import axios from 'axios';
export const postData = async(url:string,data:any)=>{
    try{
        const res = await axios.post("/api/chatroom/new",data);
        return true;
    }
    catch(e){
        return false;
    }

}
export const toFormData = (data:any):FormData | boolean=>{
    try{
        var form_data = new FormData();
        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
        return form_data;
    }
    catch(e){
        return false;
    }
}