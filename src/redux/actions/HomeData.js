
import axios from 'axios'

const homeAction = (data)=>async(dispatch)=>{
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {

              part: 'snippet',
                q:data,
              maxResults: '50',

            },
            headers: {
              'X-RapidAPI-Key': '131e8c53cdmsh37f44458eab9855p1c39a1jsn674fcb47133c',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
          
          await axios.request(options).then(function (response) {
              dispatch({type:'GET_VIDEOS',payload:response.data})
          }).catch(function (error) {
              console.error(error);
          });
        }
          catch(error){
            console.log(error);
          }
}

export default homeAction;