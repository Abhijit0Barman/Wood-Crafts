import React from 'react'
import ProductItems from "../components/ProductItems";
import { Box } from "@chakra-ui/react";
import TopProductPage from "../components/TopProductPage";
import { DesktopNav } from "../components/ProductNavbar";

export const Products:React.FC = () => {
  return (
    <Box display={'flex'}>
      <Box ><DesktopNav isDesktop={null} name={''} /></Box>
      <Box w="auto"> <TopProductPage />
    <Box fontFamily={"Poppins"}>
      <ProductItems />
    </Box></Box>
     </Box>
  )
}





