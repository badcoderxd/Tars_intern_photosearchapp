import axios from 'axios';
const URL = 'https://api.unsplash.com/photos/?client_id=hgCjeF3JU5se3taX0uuhsd16bMmmAK7wQV1iGy0FRHM';


export function artistList(keywords){
    const request = axios.get(`https://nodejspract.herokuapp.com/imexample`)
                    .then(response => response.data.results)
                    console.log(keywords)
   
    //`https://api.unsplash.com/search/photos?query=${keywords}&client_id=hgCjeF3JU5se3taX0uuhsd16bMmmAK7wQV1iGy0FRHM`
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}


export function artistListAll(){
    const request = axios.get(`${URL}`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_ALL',
        payload: request   
    }
}

export function artistDetail(id){
    const request = axios.get(`https://api.unsplash.com/photos/${id}/?client_id=hgCjeF3JU5se3taX0uuhsd16bMmmAK7wQV1iGy0FRHM`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_DETAIL',
        payload: request   
    }
}


export function clearArtistDetail(){
    return{
        type:'CLEAR_ARTIST_DETAIL',
        payload:null
    }
}
