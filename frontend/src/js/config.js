export const authenticationCheck = () =>{
    return localStorage.getItem('Authorization') != null;
}

export const getRequestHeader = () =>{
    const token = localStorage.getItem('Authorization');

    if(token){
        return {Authorization: 'Bearer '+token};
    }else{
        return {};
    }
}

export const setLocalStorage = (access_token) =>{
    localStorage.setItem('Authorization', access_token);
}

export const deleteLocalStorage = () =>{
    const token = localStorage.getItem('Authorization');

    if(token){
        localStorage.removeItem('Authorization');
    }
}