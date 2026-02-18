import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

class APIClient<T> {
  enpoint: string;

  constructor(endpoint: string) {
    this.enpoint = endpoint;
  }

  getall = () => {
    return axiosInstance.get<T[]>(this.enpoint).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.enpoint, data).then((res) => res.data);
  };
}

export default APIClient;
