import React from 'react';
import { Box, Flex, Link, Center } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box bg="#785746" color="white" p={6}>
      <div style={{ textAlign: "center", margin: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ margin: "auto", display: "flex", gap: "20px" }}>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        <Link href="#">FAQ</Link>
        </div>
        <div style={{ margin: "auto", display: "flex", gap: "20px" }}>
          <Link href="#">Privacy Policy</Link> 
        <Link href="#">Terms & Conditions</Link>
        {/* <Link href="#">Shipping & Returns</Link> */}
      </div>
      <div >
        &copy; {new Date().getFullYear()} WoodCraft
      </div>
    </div>
    </Box >
  );
};

export { Footer };
