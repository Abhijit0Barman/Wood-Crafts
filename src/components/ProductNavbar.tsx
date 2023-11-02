import {
    useColorModeValue,
    Box,
    Stack,
    useBreakpointValue,
    Image,
  } from '@chakra-ui/react';


import { Link } from 'react-router-dom';
  interface NavItem {
    label: string;  
    src?:string;
    subLabel?: string;
    href: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'CHAIRS',
      src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category1.svg',
   href:"/Chairs"
    },
    {
      label: 'BEDS',
      src:'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category2.svg',
      href:"/Beds"
    },
    {
      label: 'TABLES',
      href:"/Tables",
      src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category3.svg',
    },
    {
      label: 'DESKS',
      href:"/Desks",
      src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category4.svg',
    },
    {
      label: 'CABINETS',
      href:"/Cabinets",
      src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category5.svg',
    },
    {
      label: 'LIGHTING',
      href:"/Lighting",
      src: 'https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-category6.svg',
    }
  ];
  
  export const DesktopNav = () => {
    const linkColor = useColorModeValue('#282828', 'gray.200');
    const linkHoverColor = useColorModeValue('#d7b256', 'white');

    const isDesktop = useBreakpointValue({ base: false, md: true });
  
    if (!isDesktop) {
      return null;
    }

    return (
      <Box fontFamily={"Poppins"} boxShadow="rgba(0, 0, 0, 0.1) -4px 9px 25px -6px" m={"auto"} mt={"10px"} >
       {isDesktop && (
            <Stack direction="row" spacing={4} w="70%" m="auto" pb={"10px"}>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label} m={"auto"} 
            >
           <Image src={navItem.src} w={"25%"} m={"auto"}></Image>
 
                  <Box
                    p={1.5}
                    
                    fontSize={'16px'}
                    fontWeight={500}
                    color={linkColor}
                    cursor={'pointer'}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                  textAlign={"center"}
                    >
                  <Box display={"flex"} justifyContent={'space-evenly'} alignItems={"center"}>
                    <Box>
                      <Link to={navItem.href}>
                      {navItem.label}  
                      </Link>
                    
                    </Box>
                
                  </Box>
                               
                   
                  </Box>
     
            </Box>
          ))}
        </Stack>      )}
      </Box>
    );
  };
  