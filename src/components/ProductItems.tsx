import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductsData } from "../Redux/UserPage/action"; 
import ProductCard from "./ProductCard";
import { SimpleGrid , Box} from "@chakra-ui/react";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux"; 
import { RootState } from '../Redux/store';

const ProductItems: React.FC = () => {
  const { name } =  useParams<{ name: string }>();
  const dispatch = useDispatch<ThunkDispatch< RootState,undefined, AnyAction>>();
 

  const { products } = useSelector((store: any) => ({
    products: store.productReducer.products,
    isLoading: store.productReducer.isLoading,
    isError: store.productReducer.isError,
  }));
  const [searchParam] = useSearchParams();

  let getParams :any= {
    params: {
  category:name==="product"?null:name,
      _sort:searchParam.get("_sort"),
      _order:searchParam.get("_order"),
      brand:searchParam.getAll("brand"),
      color:searchParam.getAll("color"),
    },
    
  };
  let rating=searchParam.get("rating");
  if(rating!==""){
    getParams.params.rating=rating;
  }
  
  useEffect(() => {
  
    
   console.log(getParams.params)
dispatch(getProductsData(getParams))

  }, [searchParam, dispatch]);

 

  return <Box  >
 
  <SimpleGrid spacing={10} columns={[1,2,3]}  m={"80px auto"} mt={"40px"} w={"80%"}  >
  {products?.map((el: any)=> <ProductCard key={el.id} {...el}/>)}
  </SimpleGrid>
  
  </Box>
};

export default ProductItems;