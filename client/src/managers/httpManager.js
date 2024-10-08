import axios from 'axios';
const API_BASE_URL = "http://localhost:3001";



const createUser = async (userData)=>{
    return await axios.post(`${API_BASE_URL}/user`,userData);     
}
const searchUser = async function (email){
    return(await axios.get(`${API_BASE_URL}/search-user?email=${email}`));
}
const createChannel = async (userData)=>{
    return await axios.post(`${API_BASE_URL}/channel`,userData);     
}
const getChannelList = async function (email){
    return(await axios.post(`${API_BASE_URL}/channel-list`,{"email":email}));
}
const SendMessage = async function (requestData){
    return (await axios.post(`${API_BASE_URL}/message`,requestData));
}
export const httpManager={
    createUser,
    searchUser,
    createChannel,
    getChannelList,
    SendMessage
};