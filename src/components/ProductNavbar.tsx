import {
    useColorModeValue,
    Box,
    Stack,
    HStack,
    useBreakpointValue,
    Image,
  } from '@chakra-ui/react';
  import Sort from "./Sort";
  import React, {  useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { useParams, useSearchParams } from "react-router-dom";
  import { getProductsData } from "../Redux/UserPage/action"; 
  import { ThunkDispatch } from "redux-thunk";
  import { AnyAction } from "redux"; 
  import { RootState } from '../Redux/store';
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
  interface DesktopNavProps {
    isDesktop: boolean | null;
    name: string;
  }

  export const DesktopNav: React.FC<DesktopNavProps>= () => {
    const linkColor = useColorModeValue('#282828', 'gray.200');
    const linkHoverColor = useColorModeValue('gray', 'white');

    const isDesktop = useBreakpointValue({ base: false, md: true });

  const { name } = useParams(); 
  const dispatch = useDispatch<ThunkDispatch< RootState,undefined, AnyAction>>();
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  const { products } = useSelector((store: any) => ({
      products: store.productReducer.products,
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
    }));
    const [searchParam] = useSearchParams();
  
  const params :any= {
    params: {
  category:name==="product"?null:name,
  
      _sort:searchParam.get("_sort"),
      _order:searchParam.get("_order"),
      brand:'',
    },
  
  };
  let rating=searchParam.get("rating");
  if(rating!==""){
    params.params.rating=rating;
  }
  
  
   const handleBrandChange = (brand: string) => {
    if (brand === 'all') {
      setSelectedBrand('all'); 
      params.params.brand =''; 
    } else {
      setSelectedBrand(brand);
      params.params.brand = brand;
    }
    dispatch(getProductsData(params));
  };
    useEffect(() => {
     console.log(params)
     params.params.brand = selectedBrand;
  dispatch(getProductsData(params))
  
    }, [searchParam,name]);
  
  
    if (!isDesktop) {
      return null;
    }

    return (
      <Box fontFamily={"Poppins"} w="250px"  boxShadow="rgba(0, 0, 0, 0.1) -4px 9px 25px -6px" m={"auto"} mt={"10px"} >
       {isDesktop && (
            <Stack  spacing={2} w="auto" m="auto" pb={"10px"}>
          {NAV_ITEMS.map((navItem) => (
            <Box  key={navItem.label}  paddingLeft={'40px'} display={'flex'}  >
               <HStack spacing='10px'>
           <Image src={navItem.src} w={"20%"} m={"5px"} p={1} ></Image>
          
                  <Box
                    p={1} 
                    fontSize={'16px'}
                    fontWeight={400}
                    color={linkColor}
                    cursor={'pointer'}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}
                  textAlign={"center"}
                    >    
                      <Link to={navItem.href}>
                      {navItem.label}  
                      </Link>

                  </Box>
                  </HStack>
            </Box>
          ))}

        <Sort results={products?.length} />

        <Box display={'flex'} flexDirection={'column'} p={2} fontSize={'16px'} fontWeight={400} color={linkColor} cursor={'pointer'} textAlign={'center'}>
            <span>Filter by Brand:</span>
            {BRAND_OPTIONS.map((brand) => (
              <label key={brand}>
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={selectedBrand === brand}
                  onChange={() => handleBrandChange(brand)}
                />
             
                {  brand}
              </label>
            ))}
          </Box>

        </Stack> 
             )}


      </Box>
    );
  };
  const BRAND_OPTIONS = ['all','ModernLiving', 'DreamComfort', 'VintageVibes','LuxuryComfort'];