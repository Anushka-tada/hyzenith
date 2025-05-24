


import axios from "axios";

import { BASE_URL } from ".././utils/apibaseurlConfiguration";

// all products

export const getProductServ = async () => {
  try {
    const response = await axios.post(BASE_URL + "product/list");
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
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,  
    },
  };

  const res = await axios.post(
    `${BASE_URL}user/add-to-cart/${productId}`,
    payload,
    config
  );
  return res.data;
}

