import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Spacer,
  StackDivider,
  Container,
  useMediaQuery,
} from '@chakra-ui/react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const Cart: React.FC = () => {
  const [isLargerThan450px] = useMediaQuery('(min-width: 450px)');
  // const stripePromise = loadStripe(
  //   'pk_test_51NwhZLSG2DdjK2iecru6SmXEg4hif3HaKsAwcUHwZELTMpLM3cWcMQUzckaFuoVre8oi65WO7pEIco6EsoPm9Gum008dHzgXiF'
  // ); // Replace with your Stripe Publishable Key

  // const { userSuccessData } = useSelector(
  //   (store: any) => {
  //     return {
  //       userSuccessData: store.loginReducer.userSuccessData,
  //     };
  //   },
  //   shallowEqual
  // );

  const [cartData, setCartData] = useState<Item[]>([]);

  const getdata=()=>{
    axios.get("https://api-f37k.onrender.com/Cart")
    .then(res=>setCartData(res.data))
    .catch(()=>{
      console.log("err")
    })
  }
  useEffect(() => {
    getdata();
  }, []);



  const calculateTotalPrice = () => {
    return cartData?.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const increaseQuantity = (itemId: number) => {
    const updatedCart = cartData?.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
    axios.patch('https://api-f37k.onrender.com/Cart', { cart: updatedCart });
  };

  const decreaseQuantity = (itemId: number) => {
    const updatedCart = cartData?.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartData(updatedCart);
    axios.patch('https://api-f37k.onrender.com/Cart', { cart: updatedCart });
  };

  


  const navigate = useNavigate();

  const makePayment = () => {
    navigate('/payment');
  };

  const deletehandle = (id: number) => {
    const updatedCart = cartData?.filter((item) => item.id !== id);
    setCartData(updatedCart);
    axios.patch('https://api-f37k.onrender.com/Cart', { cart: updatedCart });
  };

  return (
    <Container maxW="xl" mt={1}>
      <Heading>Your Shopping Cart</Heading>
      <VStack
        align="start"
        divider={<StackDivider />}
        spacing={4}
        mt={4}
        width="80%"
      >
        {cartData?.map((item) => (
          <HStack key={item.id} width="100%">
            <Image
              src={item.image}
              alt={item.name}
              maxW="100px"
              objectFit="contain"
            />
            <VStack align="start" spacing={5}>
              <Text fontSize="lg" fontWeight="bold">
                {item.name}
              </Text>
              <Text>${item?.price?.toFixed(2)}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <HStack>
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </Button>
                <Button
                  colorScheme="teal"
                  size="sm"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </Button>
              </HStack>
            </VStack>
            <Spacer />
            <Button
              onClick={() => {
                deletehandle(item.id);
              }}
              colorScheme="red"
              size="sm"
            >
              Remove
            </Button>
          </HStack>
        ))}
      </VStack>
      <Box mt={4}>
        <Text fontSize="lg" fontWeight="bold">
          Total: ${calculateTotalPrice()?.toFixed(2)}
        </Text>
      </Box>
      <Button
        colorScheme="blue"
        mt={4}
        size="lg"
        width="100%"
        onClick={makePayment}
      >
        Proceed to Payment
      </Button>
    </Container>
  );
};
