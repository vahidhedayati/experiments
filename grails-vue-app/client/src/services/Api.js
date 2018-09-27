import axios from 'axios'
import Auth from '@/services/Auth'

const instance = axios.create({
  baseURL: `http://localhost:8080/`
})

/*
      config.headers['Content-type']= [
        'application/json'
      ].join(' ')
 */

instance.interceptors.request.use((config, next) => {
//  JSON.parse(localStorage.getItem('auth')).access_token
    if (JSON.parse(localStorage.getItem('vuex')).user.token) {

      config.headers['Authorization'] = [
        'Bearer', JSON.parse(localStorage.getItem('vuex')).user.token

      ].join(' ')

    } else {
      delete config.headers['Authorization']
    }

    //+JSON.stringify(config)+"-----"
console.log(">>VFF "+JSON.parse(localStorage.getItem('vuex')).user.token+"------------"+ JSON.stringify(localStorage));
//console.log(">>VFF "+JSON.parse(localStorage.auth).access_token)
   // console.log("config >>>> "+localStorage.accessToken+"---"+JSON.stringify(localStorage)+"");
    return config;

  }, function (error) {
  console.log("in this block");
    return Promise.reject(error);
  });



// Add a response interceptor
instance.interceptors.response.use((response) =>{
    console.log("AAAA"+response)
    return response;
  }, function (error) {
  console.log("EEE"+error)
    return Promise.reject(error);
  });

export default () => {
  return instance
}
