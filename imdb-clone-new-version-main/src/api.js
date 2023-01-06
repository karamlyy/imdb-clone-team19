import axios from "axios";

const countLimit = 20

export const getMoviesByPage = async (page) => {
    return await axios.get(`http://localhost:3001/movies?_page=${page}&_limit=${countLimit}`)
}

export const submitContact = async (data) => {
    return await axios.post('http://localhost:3001/contacts', data)
}