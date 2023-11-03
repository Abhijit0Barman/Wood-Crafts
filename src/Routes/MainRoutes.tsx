import { Route, Routes } from "react-router-dom";

import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import {Homepage} from "../pages/Homepage";
import {Products} from "../pages/Products";
import {SingleProduct} from "../pages/SingleProduct";



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />

      <Route path="/product/:id" element={<SingleProduct />} />
      
      <Route
        path="*"
        element={
          <Stack spacing={3}>
            <Alert status="error">
              <AlertIcon />
              There was an error processing your request
            </Alert>{" "}
          </Stack>
        }
      />
    </Routes>
  );
};

export default MainRoutes;