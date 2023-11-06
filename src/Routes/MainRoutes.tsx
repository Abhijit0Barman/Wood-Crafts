import { Route, Routes } from "react-router-dom";

import { Alert, AlertIcon, Stack } from "@chakra-ui/react";
import {Homepage} from "../pages/Homepage";
import {Products} from "../pages/Products";
import {SingleProduct} from "../pages/SingleProduct";
import { Cart } from "../pages/Cart";
import { OrderForm } from "../pages/OrderForm";



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:name" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<OrderForm />} />

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