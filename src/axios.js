import axios from "axios"

const instance = axios.create({
  baseURL: "https://tinder-backend-two.vercel.app/",
})

export default instance