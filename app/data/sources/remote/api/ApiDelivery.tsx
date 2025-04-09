import axios from "axios";

const home = "192.168.1.133"
const emulator = "10.0.2.2"
const ApiDelivery = axios.create({
    baseURL: "http://192.168.1.133:8000/api",
    headers: {
        "Content-Type": "application/json",
    },
})

export {ApiDelivery};