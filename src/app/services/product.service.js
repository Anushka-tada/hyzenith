


import axios from "axios";

import { BASE_URL } from ".././utils/apibaseurlConfiguration";
// import { headers } from "next/headers";

// const getConfig = () => {
//   return {
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Accept: "application/json",
//       Authorization: Bearer ${JSON.parse(localStorage.getItem("access_token"))},
//     },
//   }
// }

// const userData = JSON.parse(localStorage.getItem("user"))

// const getConfig = () => {
//   return{
//     headers:{
//         "Content-Type": "multipart/form-data",
//        Accept: "application/json",
//        Authorization: `Bearer ${userData.token}`,
//     }
//   }
// }

// all products

export const getProductServ = async (payload) => {
  try {
    const response = await axios.post(BASE_URL + "product/list" , payload);
    console.log(payload)
    return response.data;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error; 
  }
};

// product details

export async function getProduct(id) {
  try {
    const res = await axios.get(BASE_URL+`product/details/${id}`);
    //  console.log(res.data.data);
    return res.data.data;
   
  } 
  catch (error) {
    throw new Error('Product not found');
  }
}


// product categories

export const getCategory = async () => {
  try {
    const response = await axios.post(BASE_URL + "category/list");
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.error("Error fetching product categories:", error);
    throw error; 
  }
};


// // add to cart


// export async function addProductToCart(formData , id) {
//   try {
//     const res = await axios.post(BASE_URL+`user/add-to-cart/${id}` , formData);
//      console.log(res.data.data);
//     return res.data.data;
   
//   } 
//   catch (error) {
//     throw new Error('Product not found');
//   }
// }


export async function addProductToCart(payload, productId, token) {

  const res = await axios.post(
    `${BASE_URL}user/add-to-cart/${productId}`,
    payload,
    // getConfig()
  );
  return res.data;
}

// add to wishlist

export async function addProductToWishlist(payload, productId, token) {

  const res = await axios.post(
    `${BASE_URL}user/add-to-wishlist/${productId}`, payload);
  return res.data;
}

// cart items


export const getCartItems = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}user/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete Error:", error);
    throw error;
  }
};


// wishlist items


export const getListItems = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}user/wishlist/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete Error:", error);
    throw error;
  }
};

// remove from cart


export const removeCart = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}user/remove-from-cart/${id}`);
    return response.data;
  } catch (error) {
    console.error("Delete Error:", error);
    throw error;
  }
};

