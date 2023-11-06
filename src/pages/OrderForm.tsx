import React, { useState, ChangeEvent } from "react";
import {
  Box,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);

      toast({
        title: "Order Placed",
        description: "Your payment was successful.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      navigate("/");
    }, 2000);
  };

  return (
    <Box maxW="40%" mx="auto" mt="4" p="4">
      {paymentSuccess ? (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Payment Successful</AlertTitle>
          <AlertDescription>Your payment was successful.</AlertDescription>
        </Alert>
      ) : (
        <form>
          <Input
            type="text"
            name="name"
            placeholder="Name on Card"
            value={formData.name}
            onChange={handleChange}
            mb="2"
          />
          <Input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            mb="2"
          />
          <Input
            type="text"
            name="expirationDate"
            placeholder="Expiration Date"
            value={formData.expirationDate}
            onChange={handleChange}
            mb="2"
          />
          <Input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            mb="2"
          />
          <Button colorScheme="teal" onClick={handlePayment} mt="4">
            Make Payment
          </Button>
        </form>
      )}
    </Box>
  );
};