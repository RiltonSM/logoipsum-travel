import axios from "axios";

const api = axios.create({
    baseURL: "https://62d085741cc14f8c088b8a7b.mockapi.io/api/v1"
});

export { api }