import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  useNumberInput,
  Container,
  Heading,
  Stack,
  Avatar,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { AddProductReview, getSingleProductData } from "../Redux/UserPage/action";


export const SingleProduct: React.FC = () => {
return (
    <p>SingleProduct</p>
  );
};