import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

interface Item {
  name: string;  
  src?:string;
  subname?: string;
  href: string;
}

let images: Array<Item>=[
  {
    name: 'Chairs',
    src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic7.webp',
 href:"/Chairs"
  },
  {
    name: 'Beds',
    src:'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2ltn4cw9jdlhjo3feh76.png',
    href:"/Beds"
  },
  {
    name: 'Tables',
    href:"/Tables",
    src: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9u4f9oue8m019gqn61l9.png',
  },
  {
    name: 'Desks',
    href:"/Desks",
    src: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/se3hudwzxseqx1m7h2xm.png',
  },
  {
    name: 'Cabinets',
    href:"/Cabinets",
    src: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i1qh212qzryb4k1kh1fx.png',
  },
  {
    name: 'Lighting',
    href:"/Lighting",
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4A45I7wOfcqqyAS4XJ-hb1Je4vE4Z-jmSZQ&usqp=CAU',
  }
];

const TopProductPage: React.FC = () => {
  const { name } = useParams();
  //console.log(useParams())
  const selectedImage = images.find((item) => item.name === name);
  return (
    <>
      <Flex 
     
        h="280px"
        w={"80%"}
        bg={"#61463a"}
        color={"white"}
        // borderRadius={"20px"}
        alignItems={"center"}
       
      justifyContent={"space-evenly"}
       flexDirection={["column-reverse","row"]}

        m={"auto"}
        mt={"50px"}
      >
        <Box m={"10px 0"} textAlign={"center"}
          textTransform={"uppercase"}
          w={"50%"}
          
          fontSize={["32","62"]}
          fontWeight={"600"}
          fontFamily={"Poppins"}
        >
          
          {name}
        </Box>
        <Box w={["90%","40%"]}  m={"10px 10px"}  >
        {selectedImage ? (
            <Image src={selectedImage.src} alt={selectedImage.name} style={{
              height:"250px",width:"300px"
            }} />
          ) : (
            <Image
              src="https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-shop-pic1.webp"
              alt="Placeholder Image"
              style={{
                height:"200px",width:"300px"
              }} 
            />
          )}
         
        </Box>
      </Flex>
    </>
  );
};

export default TopProductPage;