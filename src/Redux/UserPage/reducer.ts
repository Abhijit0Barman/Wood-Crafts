import { AddCartProductToAPI } from "../../Utilities/api";
import {
  ADD_CART_PRODUCT_SUCCESS,
    PRODUCT_FAILURE,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    SINGLE_PRODUCT_SUCCESS,
    LOGOUT,LOGIN_SUCCESS,LOGIN_FAILURE
  } from "../actionTypes";
  
  // Define your initial state with types
  
  
  
  
  
  
  const initialState= {
    
    isError: false,
    isAuth: false,
    isLoading: false,
    userName: "",
    user: {},
    products: [],
    singleProduct: {},
    cart:[]
     // Use type assertion or provide a default value
  };
  
  
  
  // Create the reducer with types
  export const reducer = (
    state: any = initialState,
    action: { type: string; payload: any } // Replace 'any' with the actual type of payload
  ) => {
    switch (action.type) {
      case PRODUCT_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case PRODUCT_FAILURE: {
        return {
          ...state,
          isError: true,
          isLoading: false,
        };
      }
      case PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          products: action.payload // Use type assertion or handle the actual conversion
        };
      }
      case SINGLE_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          singleProduct: action.payload // Use type assertion or handle the actual conversion
        };
      }
     
      default:
        return state; // Return the state as is for unknown actions
    }
  };
  
  export default reducer;