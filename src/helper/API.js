import axios from 'axios'

const API = {
    getHot: (cb) => {
        axios.get('/reddit/hot').then(
            response => {
                switch (response.status) {
                    case 200:
                        cb(response.data);
                        break;
                    case 500:
                        return console.log(response.data);
                    default:
                        return
                }
            }
        )
    }
}

export default API;
