import axios from 'axios'
import Auth from '@/services/Auth'

const instance = axios.create({
  baseURL: `http://localhost:8080/`
})

instance.interceptors.request.use((config, next) => {
    if (JSON.parse(localStorage.auth).access_token) {
      config.headers['Content-type']= [
        'application/json'
      ].join(' ')
      config.headers['Authorization'] = [
        'Bearer', JSON.parse(localStorage.auth).access_token
      ].join(' ')
    } else {
      delete config.headers['Authorization']
    }
    //+JSON.stringify(config)+"-----"
console.log(">>VFF "+JSON.parse(localStorage.auth).access_token)
    console.log("config >>>> "+localStorage.accessToken+"---"+JSON.stringify(localStorage)+"");
    return config;

  }, function (error) {
    return Promise.reject(error);
  });



// Add a response interceptor
instance.interceptors.response.use((response) =>{
    console.log(response)
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default () => {
  return instance
}
