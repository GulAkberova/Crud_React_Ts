import axios from "axios";

export const nortwindApiInstance=axios.create({
    baseURL:'https://northwind.vercel.app/api',
    timeout:1000
})