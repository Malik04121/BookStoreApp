import { Box, Button, FormControl, FormLabel, Input, Radio, RadioGroup, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [paymentOption, setPaymentOption] = useState("");
  const toast=useToast()
  const navigate=useNavigate()

  const handlePaymentChange = (value) => {
    setPaymentOption(value);
  };

  const handleSubmit = () => {
    toast({
        position: "top",
        title: "Order is successfully placed",
        status: "success",
        duration: 3000,
        isClosable: true,
        bg:"green"
      });
      navigate("/")
  };

  return (
    <Box p={4}>
      <Box maxW="sm" mx="auto" bg="white" shadow="lg" rounded="lg" p={6}>
        <VStack spacing={4} alignItems="stretch">
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input type="text" id="name" placeholder="Enter your name" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input type="text" id="address" placeholder="Enter your address" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input type="tel" id="phone" placeholder="Enter your phone number" />
          </FormControl>

          <FormControl>
            <FormLabel>Payment Option</FormLabel>
            <RadioGroup value={paymentOption} onChange={handlePaymentChange}>
              <VStack spacing={2} alignItems="stretch">
                <Radio value="credit-card">Credit Card</Radio>
                <Radio value="paypal">PayPal</Radio>
                <Radio value="cash">Cash on Delivery</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <Button colorScheme="blue" mt={4} onClick={handleSubmit}>
            Place Order
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export {Checkout}
