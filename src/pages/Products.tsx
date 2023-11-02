import React from 'react'
import ProductItems from "../components/ProductItems";
import { Box } from "@chakra-ui/react";
import TopProductPage from "../components/TopProductPage";
import { DesktopNav } from "../components/ProductNavbar";

export const Products:React.FC = () => {
  return (
    <div>
           <DesktopNav />
      <TopProductPage />
    <Box fontFamily={"Poppins"}>
      <ProductItems />
    </Box></div>
  )
}





