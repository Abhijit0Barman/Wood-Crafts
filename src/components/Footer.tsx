import React from 'react';
import { Box, Flex, Link, Center } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box bg="black" color="white" p={6}>
      <Flex justifyContent="space-between">
        <Box>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Privacy Policy</Link>
        </Box>
        <Box>
          <Link href="#">Shipping & Returns</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">FAQ</Link>
        </Box>
      </Flex>
      <Center mt={4}>
        &copy; {new Date().getFullYear()} Your E-Commerce Website
      </Center>
    </Box>
  );
};

export {Footer};
