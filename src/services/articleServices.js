import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = async ()=> {
    try {
        const response = await axiosWithAuth().get('http://localhost:5000/api/articles');
        return response;
    } catch (error) {
        console.error('Could not fetch articles!', error);
    }
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.