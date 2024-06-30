import axios from "axios";
import { EntradaInterface } from "../components/interface/EntradaInterface";

const url = "http://localhost:3000";
const getPosts = async () => {
  try {
    const post = await axios.get(`${url}/entrada`);
    return post.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getPost = async (id: number) => {
  try {
    const post = await axios.get(`${url}/entrada/${id}`);
    return post.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const createPost = async (data: EntradaInterface) => {
  try {
    const post = await axios.post(`${url}/entrada`, data);
    return post;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const deletePost = async (id: number) => {
  try {
    const post = await axios.delete(`${url}/entrada/${id}`);
    return post;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const updatePost = async (id: number, data: EntradaInterface) => {
  try {
    const post = await axios.put(`${url}/entrada/${id}`, data);
    return post;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const searchPosts = async (searchTerm: string) => {
  try {
    const post = await axios.get(`${url}/busqueda?q=${searchTerm}`);
    return post.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getPosts, getPost, createPost, deletePost, updatePost, searchPosts };
