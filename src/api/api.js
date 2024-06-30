import axios from "axios";

const YT_API = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyC6_NacjhsacxEI-TDvbnob1IT5A2SToDs",
    },
});
export default YT_API;