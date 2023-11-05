import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { AddProductReview,} from "../Redux/UserPage/action";
import { getSingleProductData } from "../Redux/UserPage/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux"; 
import { RootState } from '../Redux/store';
import { Star } from "../components/stars";
import styled from "styled-components"

interface Review {
  username: string;
  rating: number;
  comment: string;
}

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  size: string;
  material: string;
  color: string;
  finish_type: string;
  about: string;
  rating: number;
  reviews: Review[];
}

export const SingleProduct: React.FC = () => {
 
  let { id } = useParams();
  const dispatch =useDispatch<ThunkDispatch< RootState,undefined, AnyAction>>();
  const [datas,setdata]=useState<Product[]>([])
  const product:Product=useSelector((store:any)=>store.productReducer.singleProduct)
  // {
  //   id: 2,
  //   category: "Chairs",
  //   name: "Leather Lounge Chair",
  //   price: 299.95,
  //   image: "https://themes.muffingroup.com/be/furniturestore/wp-content/uploads/2022/06/furniturestore-product-pic6.webp",
  //   brand: "LuxuryComfort",
  //   size: "28\" x 32\" x 35\"",
  //   material: "Leather",
  //   color: "Black",
  //   finish_type: "Matte",
  //   about: "Relax in style with our Leather Lounge Chair. This black leather chair features a matte finish and exceptional comfort, perfect for your living room. Dimensions: 28\" x 32\" x 35\".",
  //   rating: 4,
  //   reviews: [
  //     {
  //       username: "ComfortSeeker",
  //       rating: 5,
  //       comment: "This lounge chair is incredibly comfortable."
  //     },
  //     {
  //       username: "LeatherLover",
  //       rating: 4,
  //       comment: "Great value for a stylish leather chair."
  //     },
  //     {
  //       username: "FurnitureEnthusiast",
  //       rating: 4,
  //       comment: "Assembly was straightforward, but it took some time."
  //     },
  //     {
  //       username: "ModernLivingFan",
  //       rating: 5,
  //       comment: "Perfect addition to my modern living room."
  //     }
  //   ]
  // }
  // const handleCart=(e:)=>{

  // }

 
  const getdata=()=>{
    

axios.get(`https://bb-nwfw.onrender.com/woodcraft/?_limit=4`, {
 
})
  .then(response => {
    const data = response.data;
    console.log(data)
    setdata(data);
  })
  .catch(error => {
    console.error('Error fetching data:');
  });

  }
  useEffect(() => {
    console.log(id)
    getdata()
    dispatch(getSingleProductData(id))
  }, []);
  return (
    <>
    <Container>
      <LeftContainer>
        <img src={product.image} alt="" />
      </LeftContainer>

      <DIV>
        <Heading>{product.name}</Heading>
        <br></br>
        
        <Star rating={product.rating} />
        <br></br>
        <Price>  ₹ {product.price}</Price>
        <RightContainer>
        <About><b>About :</b> {product.about}</About>
        <br></br>
        <Specification><b>Specification</b></Specification>
        <br/>
        <List>
          <ListItem><b>Category :</b> {product.category}</ListItem>
          
       
          <ListItem><b>Brand :</b> {product.brand}</ListItem>
          
        
          <ListItem><b>Material :</b> {product.material}</ListItem>
          <ListItem><b>Color :</b> {product.color}</ListItem>
          <ListItem><b>Size :</b> {product.size}</ListItem>
          <ListItem><b>Finishing :</b> {product.finish_type}</ListItem>
        </List>
        
        {/* {product.revie<br></br>
        <br></br>ws.map(el => (
          <ReviewContainer key={el.username}>
            <ReviewName><b>Name</b> : {el.username}</ReviewName>
            <p><b>Comment</b> : {el.comment}</p>
             <p><b>Rating :-</b></p>
            <Star rating={product.rating} />
            
            
          </ReviewContainer>
        ))} */}
      </RightContainer>
      <br></br>
        
      <Button><b>ADD TO CART</b></Button>
      </DIV>

    </Container>
    <br></br>
    <Specification><b>Other Products</b></Specification>
    <ProductGridContainer>
      {datas.map((el)=>(
        <Product key={el.id}>
         <div>
          <img src={el.image} alt="" style={{width:"100%",height:"300px"}} />
         </div>
         <div>
          <p>{el.name}</p>
          <p>₹{el.price}</p>
         </div>

        </Product>
      ))}
     
    </ProductGridContainer>
    </>
  );
};



const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top:30px;
  background-color:#61463ad5;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftContainer = styled.div`
  width: 30%;
  padding: 10px;
  margin-top:70px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin-top:10px;
  }
`;
const DIV=styled.div`
 width: 60%;
  padding: 20px;
  background-color:#61463a;
  color:white;
  text-align: left;
 

`
const RightContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin-top:30px;
  max-height: 250px;
  overflow-y: auto;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: none;
  }
`;

const Heading = styled.p`
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Price = styled.p`
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const About = styled.p`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Specification = styled.p`
  font-size: 25px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const List = styled.ul`
  max-height: 400px;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    max-height: none;
    overflow: visible;
  }
`;

const ListItem = styled.li`
  font-size:17px;
`;

const Button = styled.button`
  width: 150px;
  background-color: #908a7e;
  padding: 10px;
  border-radius: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ReviewContainer = styled.div`
  width: 100%;
  margin: auto;
  background: white;
  padding: 10px;
  margin-bottom: 20px;
`;

const ReviewName = styled.h3`
  margin: 0;
`;

const ProductGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top:20px;
  @media (max-width: 900px) {
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    display: block;
  
  }
`;

const Product = styled.div`

  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
`;

