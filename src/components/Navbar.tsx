import React from 'react';
import { Box, Flex, Input, InputGroup, InputLeftElement, IconButton } from '@chakra-ui/react';
import { FaHome, FaSearch, FaShoppingCart, FaUser ,FaShopify } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Flex bg="#785746" p={4} alignItems="center" justifyContent="space-between">
      <Box>
        <Link to="/">
          <img src="./logo.png" alt="" style={{height:"70px"}}/>
        </Link>
      </Box>
      <Box>
        <Link to="/">
          <IconButton as="a" href="#" aria-label="Home" icon={<FaHome />} variant="ghost" color="white" size="lg" />
        </Link>
      </Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaSearch />}
        />
        <Input type="text" placeholder="Search..." size="lg" />
      </InputGroup>
      <Flex>
        <Link to="/products">
          <IconButton as="a" href="#" aria-label="Cart" icon={<FaShopify  />} variant="ghost" color="white" size="lg" />
        </Link>
        <Link to="/cart">
          <IconButton as="a" href="#" aria-label="Cart" icon={<FaShoppingCart />} variant="ghost" color="white" size="lg" />
        </Link>
        <Link to="/profile">
          <IconButton as="a" href="#" aria-label="Login" icon={<FaUser />} variant="ghost" color="white" size="lg" /></Link>
      </Flex>
    </Flex>
  );
};

export { Navbar };

// import React from 'react'
// import { Link } from 'react-router-dom'
// // import {Products} from "../pages/Products";
// export const Navbar = () => {
//   return (
//     <div>

//       <Link to='/product'>Products</Link>

//     </div>
    
//   )
// }