import axios from "axios";
import { baseurl } from "./config.api";

const baseService = axios.create({baseURL:baseurl,headers:{}})
const registration =(payload:any)=>{
    try{
        const res=baseService.post('/registration', payload)
    }
    catch(err){
        throw err;
    }
}
