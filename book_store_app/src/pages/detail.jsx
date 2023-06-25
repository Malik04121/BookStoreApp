import { Box, Button, Flex, Heading, Image, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
function Details(){
     const {id}=useParams()
     const {books}=useSelector(state=>state)
     const [bookdata,setBookData]=useState({})
     const toast=useToast()


     useEffect(()=>{
         const filteredBook=books.filter(item=>item.id==id)
         if (filteredBook.length > 0) {
            setBookData(filteredBook[0]);
        }
        //  setBookData(filteredBook[0])
     },[books,id])

     const cartHandler=()=>{
        const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    
        const isBookInCart = cartData.find((item) => item.id === bookdata.id);
    
        if (!isBookInCart) {
          cartData.push(bookdata);
          localStorage.setItem("cart", JSON.stringify(cartData));
    
          console.log("Book added to cart:", bookdata);
          toast({
            position: "top",
            title: "Book is added in cart",
            status: "success",
            duration: 9000,
            isClosable: true,
            bg:"green"
          });
        } else {
          console.log("Book is already in the cart:", bookdata);
        }
     }
    
    return(
         <>
         {Object.keys(bookdata).length > 0 && (
            <Flex p="2%" bg="rgb(44, 44, 44)" color="white">
                <Box w="40%" display="flex" flexDirection="column" alignItems="center" >
                    <Image src={bookdata.volumeInfo.imageLinks?.thumbnail} w="60%" h="70%" m="auto"/>
                    <Button m="auto" mt="1.8rem" onClick={cartHandler}>Add to cart</Button>
                    
                </Box>
                <Box w="60%">
                    <Heading>{bookdata.volumeInfo.title}</Heading>
                    <Text mt="1.2rem">{bookdata.volumeInfo.categories}</Text>
                    <Text mt="1.2rem">{bookdata.volumeInfo.description}</Text>
                    <Flex mt="1.2rem">
                        <Text as="b"> Publish Date:&nbsp;</Text>
                        <Text>{bookdata.volumeInfo.publishedDate}</Text>
                    </Flex>    
                    <Flex mt="1.2rem">
                        <Text as="b"> Author:&nbsp;</Text>
                        <Text>{bookdata.volumeInfo.authors}</Text>
                    </Flex>             
                    <Flex mt="1.2rem">
                        <Text as="b"> Publisher:&nbsp;</Text>
                        <Text>{bookdata.volumeInfo.publisher}</Text>
                    </Flex>  
                    <Flex mt="1.2rem">
                        <Text as="b"> Price:&nbsp;</Text>
                        <Text>₹{bookdata.volumeInfo.pageCount}</Text>
                    </Flex>  
                </Box>
            </Flex>
        )}
        
        </>
    )
}
export {Details} 