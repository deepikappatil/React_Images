import axios from 'axios'

//Pre-configured instance of axios client: Default props set for making request or header or params
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wY_J0QSznctksR9Z2eXBw3cNftMuxH8O-eVXll8B3lI'
    }
})





//Access Key: wY_J0QSznctksR9Z2eXBw3cNftMuxH8O-eVXll8B3lI
//URL: https://api.unsplash.com/search/photos
//Authorization: Client-ID YOUR_ACCESS_KEY  or https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY