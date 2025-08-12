import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: `https://insurance-policies-server-site.vercel.app/`
    baseURL: `https://insurance-policies-server-site.vercel.app/`
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;