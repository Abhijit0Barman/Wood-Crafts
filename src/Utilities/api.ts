import axios, { AxiosRequestConfig } from "axios";

//https://bb-nwfw.onrender.com/
export let ProductURL="https://bb-nwfw.onrender.com/woodcraft";
export const userUrl="https://bb-nwfw.onrender.com/wood_c_users"
export const getProductDataFromAPI=(params:AxiosRequestConfig)=>{

  return  axios.get(ProductURL,params)
}

export const getSingleProductDataFromAPI=(id:any)=>{
console.log(id)
  return  axios.get(ProductURL+"/"+id)
}

export const  PostUserDataInAPI=(newUser:any)=>{
return axios.post(userUrl,newUser)
}

export const GetAllUserDataFromAPI=()=>{
  return   axios.get(userUrl)
}

export const  AddCartProductToAPI=(userData:any)=>{
return axios.patch(userUrl+"/"+userData.id,userData)
}


export function extractTotalPages(linkHeader: any) {
  if (!linkHeader) {
    return 1; 
  }

  const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
  return match ? parseInt(match[1], 10) : 1;
}