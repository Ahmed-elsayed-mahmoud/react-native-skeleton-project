import axios from "axios"
import endpoints from "./endpoints"

const axiosRequest = (props) =>
  axios(props)
    .then((res) => res)
    .catch((err) => console.log(err))

const apis = {
  example: () => axiosRequest({ method: "GET", url: endpoints.example }),
}

export default apis
