// <<<<<<< fw26_1006_day5
// // import React from 'react'
// // import { Link } from 'react-router-dom'

// // export const Navbar = () => {
// //   return (
// //     <div>Navbar

// //       <Link to=""></Link>
// //     </div>

// //   )
// // }


// import React from 'react';
// import { Box, Flex, Input, InputGroup, InputLeftElement, IconButton } from '@chakra-ui/react';
// import { FaHome, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   return (
//     <Flex bg="teal.500" p={4} alignItems="center" justifyContent="space-between">
//       <Box>
//         <Link to="/">
//           <IconButton as="a" href="#" aria-label="Home" icon={<FaHome />} variant="ghost" color="white" size="lg" />
//         </Link>
//       </Box>
//       <InputGroup>
//         <InputLeftElement
//           pointerEvents="none"
//           children={<FaSearch />}
//         />
//         <Input type="text" placeholder="Search..." size="lg" />
//       </InputGroup>
//       <Flex>
//         <Link to="/cart">
//           <IconButton as="a" href="#" aria-label="Cart" icon={<FaShoppingCart />} variant="ghost" color="white" size="lg" />
//         </Link>
//         <Link to="/profile">
//           <IconButton as="a" href="#" aria-label="Login" icon={<FaUser />} variant="ghost" color="white" size="lg" /></Link>
//       </Flex>
//     </Flex>
//   );
// };

// export { Navbar };
// =======
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
// >>>>>>> main

import React from 'react'
import { Link } from 'react-router-dom'
// import {Products} from "../pages/Products";
export const Navbar = () => {
  return (
    <div>

      <Link to='/product'>Products</Link>

    </div>
    
  )
}
