import axios from 'axios';
const apiUrl = "http://localhost:5000/api/countries-tz/"

class Countries {
    get = ()=>axios.get(apiUrl)
}

export default new Countries();