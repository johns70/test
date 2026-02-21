import axios from 'axios';


export const httpClientPlugin = {

  get: async(url:string) => {
    try{
      const { data } = await axios.get( url );
      return data;
    } catch(err) {
      throw `Ha ocurrido un error`
    }
    // const resp = await fetch( url );
    // return await resp.json();     
  },

  post: async(url:string, body: object) => {
      // const resPost = await axios.post(url, body)
      // return resPost
    throw new Error("POST method not found")
  },
  put: async(url:string, body:string) => {
    throw new Error("PUT method not found")

  },
  delete: async(url:string) => {
    throw new Error("DELETE method not found")
  },

};
