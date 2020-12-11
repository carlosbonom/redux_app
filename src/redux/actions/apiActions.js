import * as types from './actionTypes';
import axios from 'axios';

export const store_all = (data)  =>({
    type: types.STORE_ALL,
    payload: {
        list: data.list,
        loading:data.loading
    }
})

export const SendingRequest = ()  =>({
    type: types.SENDING_REQUEST,
    payload: {
        loading:true
    }
})

export const RequestData = (data)  =>({
    type: types.REQUEST_DATA,
    payload: {
        list: data.data,
        loading:false
    }
})

export const RequestError = (error)  =>({
    type: types.REQUEST_ERROR,
    payload: {
        error: error,
        loading:false
    }
})

const getData = () =>{

   return axios.get('http://dev.contanimacion.com/api_tablon/api/mensajes')
            .then((res)=> res)
            .catch((error)=> error)
}

export const fetchData = () => dispatch => {
    dispatch(SendingRequest());
    return getData()
        .then(data => {
            dispatch(RequestData(data))
        })
        .catch(error => {
            dispatch(RequestError(error))
        })
}

/*
POSTS
*/

export const RequestPostData = (data)  =>({
    type: types.REQUEST_POST_DATA,
    payload: {
        ok: data.data[0].ok,
        loading:false
    }
})

const postData = (data) =>{

    return axios.post('http://dev.contanimacion.com/api_tablon/api/mensajes/add', data)
             .then((res)=> res)
             .catch((error)=> error)
}


export const sendNew = (data) => dispatch => {
    dispatch(SendingRequest());
    return postData(data)
        .then(data => {
            dispatch(RequestPostData(data))
        })
        .catch(error => {
            dispatch(RequestError(error))
        })
}