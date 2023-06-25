import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


let cartData=JSON.parse(localStorage.getItem("cart"))||[]
function Cart(){
    const [total,setTotal]=useState(0)
    const [data,setData]=useState([])
    const toast=useToast()
    console.log(cartData)

    const removeItemHandler=(ele)=>{
        console.log(ele,"mnbv")
        const updatedCartData = cartData.filter((item) => ele.id !== item.id);
        console.log(updatedCartData,"ksgkjsr")
        localStorage.setItem("cart", JSON.stringify(updatedCartData));
        setData(updatedCartData);
      
        toast({
          title: "Item removed from cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
    }

    useEffect(()=>{
        setData(cartData)
        let totalPrice = 0;
    cartData.forEach((item) => {
      // Assuming the price is stored in the 'price' property of each item
      const itemPrice = item.volumeInfo.pageCount || 0;
      totalPrice += itemPrice;
    });
    setTotal(totalPrice);
    },[cartData,data])


    return (
        <>
        
            <Flex pb="200px"  justifyContent="space-around" pr="5%" pl="5%" mt="3%">
           <Box bg="black" border="0.5px solid white" mt="20px" p="20px" borderRadius="20px" color="white" w="50%">
           {data.map((ele)=>(

                <Flex>
                    <Box w="50%">
                        <Image src={ele.volumeInfo.imageLinks?.thumbnail} w="70%" h="70%"/>
                    </Box>
                    <Box w="60%" >
                          <Text>{ele.volumeInfo.title}</Text>
                          <Flex mt="30px">
                              <Text> Price: &nbsp;</Text>
                              <Text as="b">₹{ele.volumeInfo.pageCount}</Text>
                              <Text></Text>
                          </Flex>
                          <Button onClick={()=>removeItemHandler(ele)} mt="1.2rem">Remove Item</Button>
                        </Box>
                        <Box w="40%">
                       <Text>Free Delivery</Text>
                       <Text fontSize="sm">Delivery in 1 to 3 days</Text>
                       <Text>(T&C apply)</Text>
                         </Box>
                </Flex>
           ))}
           </Box>
           <Box mt="30px" bg="black" p="20px" w="30%" border="0.7px solid white" borderRadius="20px" h="40%" color="white">
            <Box textAlign="Center"><Text as="b">Price Details</Text>
              </Box>
            <Box mt="30px">
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Price</Text>
                    <Text fontSize="lg" as="b">{total}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Delivery Charges</Text>
                    <Text fontSize="lg" as="b">Free</Text>
                </Flex>
            </Box>
            <Box mt="30px">
                 <Flex justifyContent="space-between">
                    <Text fontSize="lg" as="b">Total Amount</Text>
                    <Text fontSize="lg" as="b">{cartData?total:0}</Text>
                </Flex>
                
            </Box>
            <Box>
                <Text fontSize="sm" >You will save ₹34,400 on this order</Text>
            </Box>
            <Box justifyContent="flex-end" w="100%" mt="20px">
              <Link to="/checkout">
              <Button color="#353535" bg="#33FF83" w="100%" >Procede to Buy</Button>
              </Link>
           </Box>

        </Box>
            </Flex>
        
        </>
    )
}
export {Cart}