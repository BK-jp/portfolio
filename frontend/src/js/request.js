import axios from "axios";
import { getRequestHeader } from "./config";
import { setLocalStorage, deleteLocalStorage } from 'js/config';

const login = ({data}) =>{
    axios
        .post('/api/auth/login', data)
        .then(response =>{
            if(response.status === 200){
                setLocalStorage(response.data.access_token);
                window.location.href = response.data.targetUrl;
            }else{
                alert('Login Fail');
            }
        })
        .catch(error =>{
            console.log(error);
            alert(error.response.data.message);
        });
}

const post = ({url, data, res, err}) => {
    document.querySelector('.loadingBox').classList.add('show');
    axios
        .post('/api'+url, data, {headers: getRequestHeader()})
        .then(response =>{
            if(response.status === 200){
                return res(response.data);
            }else{
                return response;
            }
        })
        .catch(error =>{
            if(error.response.status === 401){
                refreshToken(result =>{
                    if(result){
                        return post({url, data, res, err});
                    }else{
                        deleteLocalStorage();
                        return err(error.response.data);
                    }
                });
            }else{
                return err(error.response.data);
            }
        })
        .finally(()=>{
            document.querySelector('.loadingBox').classList.remove('show');
        });
}

const get = ({url, data, res, err}) =>{
    axios
        .get('/api'+url, data, {headers: getRequestHeader()})
        .then(response =>{
            if(response.status === 200) return res(response.data);
            else return response;
        })
        .catch(error =>{
            if(error.response.status === 401){
                refreshToken(result =>{
                    if(result){
                        return get({url, data, res, err});
                    }else{
                        deleteLocalStorage();
                        return err(error.response.data);
                    }
                });
            }else{
                return err(error);
            }
        });
}

const refreshToken = (callback)=>{
    axios
        .post('/api/auth/refreshToken', {}, {headers: getRequestHeader()})
        .then(response =>{
            console.log(response.data);
            if(response.status === 200){
                deleteLocalStorage();
                setLocalStorage(response.data.access_token);
                return callback(true)
            }
            else return callback(false);
        })
        .catch(error =>{
            console.log(error);
            return callback(false);
        });
}

export default {
    login,
    post,
    get
}