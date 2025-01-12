import axios from "axios"
import { BASE_URL } from "../resources/ApiUrls"

const fetchClient = () => {
    const defaultOptions = {
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
        }
    }

    let instance = axios.create(defaultOptions);

    return instance;
};

export default fetchClient();