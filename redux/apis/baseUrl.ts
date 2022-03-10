import axios from "axios";

export default axios.create({
  baseURL: "http://103.4.145.126:3366/api/v1",
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer 1pake4mh5ln64h5t26kpvm3iri",
  },
});
