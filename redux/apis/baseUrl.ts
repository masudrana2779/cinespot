import axios from 'axios';

export default axios.create({
    baseURL: "https://api.medico.bio",
    headers: {
        "Content-type": "application/json",
        'Authorization': 'Bearer 5pake7mh5ln64h5t28kpvtv3iri'
    }
});