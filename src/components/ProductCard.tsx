import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  rating,
  brand
}) => {
  
  let Navigate=useNavigate()

  return (
  <Box bg={"#61463a"} color={"white"} borderRadius={"10px"} m={"auto"} p={"30px"} textAlign={"center"}>

    <Flex  h={["300px","300px","300px"]}  alignItems={"center"} justifyContent={"center"} >
    <Image
      m={"6px 6px"}
      w={"100%"}

      onClick={()=>Navigate("/product/"+id)}
        src={image}
      />
    </Flex>
   
      <Text> <b>{name}</b></Text>
      <Text color={"#c8ad90"}>{brand}</Text>
      <Text fontWeight={"500"}>₹ {price}</Text>
      <Flex alignItems={"center"} justifyContent={"center"} fontSize={"20"} m={"5px auto"}>
{new Array(Math.floor(rating)).fill(0).map(()=>{
    return(<FaStar  color="white" />)})}
    {new Array(5-Math.floor(rating)).fill(0).map(()=>{
    return(<FaStar color="grey" />)})}
    
</Flex>
    </Box>
  );
};

export default ProductCard;