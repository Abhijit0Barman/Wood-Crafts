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

  
interface BrandOptions {
  [key: string]: string[];
}
  const BRAND_OPTIONS: BrandOptions={
    "Tables": ['ModernLiving', 'MarbleElegance', 'RusticVibes', 'GlassGlow', 'FarmhouseCharm', 'MidCenturyStyle', 'GlassElegance'],
    "Chairs": ['LuxuryComfort', 'ErgoComfort', 'AccentStyle', 'VelvetElegance', 'WoodenCraft', 'LeatherLux', 'VelvetChic'],
    "Beds": ['DreamComfort', 'ComfortDream', 'MidCenturyStyle', 'CanopyDreams', 'UpholsteredLux', 'comfort'],
    "Desks": ['MinimalCraft', 'CornerCraft', 'ModernStyle', 'GlassElegance', 'IndustrialStyle', 'starStyle'],
    "Cabinets": ['VintageVibes', 'ModernMedia', 'ContemporaryCraft', 'RusticCharm', 'ModernLiving', 'Dijati'],
    "Lighting":['IndustrialGlow', 'CrystalGlow', 'ArtDecoGlow', 'ModernGlow', 'Git Lab', 'Tygot', 'Lexton', 'Roshini'],
  
  "product":['ModernLiving','LuxuryComfort','DreamComfort','MinimalCraft','VintageVibes','IndustrialGlow'],
  }

  interface ColorOptions {
    [key: string]: string[];
  }

  const COLOR_OPTIONS:ColorOptions= {
    "Beds":  ['Espresso', 'Gray', 'Walnut', 'Black', 'Beige'],
    "Cabinets":['Antique White', 'Walnut', 'Black', 'Weathered Oak', 'White and Black', 'Wooden', 'White'],
    "Chairs":['Black', 'Pink', 'Teal', 'Oak', 'Brown', 'Navy Blue', 'White', 'wood'],
    "Desks": ['White', 'Espresso', 'Clear and Silver', 'Rustic Brown', 'Brown'],
    "Lighting": ['Black', 'Silver', 'Gold', 'Chrome', 'Bronze', 'White and Gold', 'White and Black', 'Skin and pink', 'black and golden', 'white light, natural light, and warm light', 'black'],
    "Tables": ['Walnut', 'White and Gold', 'Rustic Brown', 'Clear and Gold', 'Antique White'],
    "product":['Gray','Wooden','White and Gold','Walnut','Black','Silver','Bronze',],
  }

  interface DesktopNavProps {
    isDesktop: boolean | null;
    name: string;
  }

  export const DesktopNav: React.FC<DesktopNavProps>= () => {
    const linkColor = useColorModeValue('#282828', 'gray.200');
    const linkHoverColor = useColorModeValue('gray', 'white');
    const isDesktop = useBreakpointValue({ base: false, md: true });

  const { name } = useParams(); 
  // const dispatch = useDispatch<ThunkDispatch< RootState,undefined, AnyAction>>();
  // const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [searchParams, setSerchparams]=useSearchParams()
  const [Brand, setBrand] = useState<string[]>([]);
  const [Color, setColor] = useState<string[]>([]);
  

  const { products } = useSelector((store: any) => ({
      products: store.productReducer.products,
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
    }));
 
   const handleBrandChange = (brand: string) => {
    const option=brand
    console.log(option)
    let newbrand=[...Brand]
    if(newbrand.includes(option)){
      newbrand= newbrand.filter(el=>el!==option)
    }else{
      newbrand.push(option)
    }
    setBrand(newbrand)
  
  };

  const handleColorChange = (color: string) => {
    const option = color;
    let newColor = [...Color];
    if (newColor.includes(option)) {
      newColor = newColor.filter(el => el !== option);
    } else {
      newColor.push(option);
    }
    setColor(newColor);
  };


    useEffect(() => {
      let params : Record<string, any> = {
        category:name==="product"?null:name,
        brand:Brand,
        color: Color,
       
    } 
  let rating=searchParams.get("rating");
  if(rating){
    params.rating = rating;
  }
 
 
    setSerchparams(params);
  
 
 
    }, [name, Brand,  Color,setSerchparams, searchParams]);
  
  
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
 <hr />

        <Sort results={products?.length} />
        <hr />
        <h3 style={{color:'red'}}><b>Filter by Brand OR Color</b></h3>
        <Box display={'flex'} flexDirection={'column'} p={2} fontSize={'16px'} fontWeight={400} color={linkColor} cursor={'pointer'} textAlign={'center'}>
      
      
          <h3 style={{
            marginBottom:"10px",
          color:'black'
          }}> <b>Filter by Brand</b> </h3> 
        
            { 
            
            BRAND_OPTIONS[name||'']?.map((brand) => (
            
             <div key={brand} style={{
              margin:'3px',
              display:"flex",
              justifyContent:'center',
              alignItems:'center',
              gap:'10px'
             }}>
                <input
                  type="checkbox"
                  name="brand"
                  value={brand}
                  checked={Brand.includes(brand)}
                  onChange={()=>handleBrandChange(brand)}
                />
                <label >
                {brand}
              </label>
              </div>


            ))}

<hr />
<h3 style={{
  marginBottom: "10px",
  marginTop:'10px',
  color: 'black'
}}><b>Filter by Color</b></h3>
{COLOR_OPTIONS[name || '']?.map((color) => (
  <div key={color} style={{
    margin: '3px',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  }}>
    <input
      type="checkbox"
      name="color"
      value={color}
      checked={Color.includes(color)}
      onChange={() => handleColorChange(color)}
    />
    <label>
      {color}
    </label>
  
  </div> ))}
 
          </Box>

        </Stack> 
             )}
 

      </Box>
    );
  };
 