import { Box, Button, Flex, Heading, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { fetchBooks } from "./redux/action"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"



function BookCard(){
    const [bookdata,setBookdata]=useState([])
    const  dispatch=useDispatch()
    const {books,loading}=useSelector(state=>state)
    
    useEffect(()=>{
         dispatch(fetchBooks("Biography & Autobiography"))
    },[])
    useEffect(()=>{
        setBookdata(books)
    },[books])

    return (
        <>
        {loading ? (
        <Flex justifyContent="center" alignItems="center" height="100vh" ml="30%">
          <Spinner size="xl" color="green.500" as="b"/>
        </Flex>
      ) : (
        
         <SimpleGrid w="80%" bg="rgb(44, 44, 44)"   columns={[2, 2, 4]} columnGap="5%" rowGap="1%" p="2%" pb="500px">
            {bookdata.map((ele)=>(
                <Box  h="450px" display="flex" flexDirection="column" color="white" _hover={{
                    backgroundColor: "#252525",
                    transition: "500ms linear",
                    transform: "scale(1.1)",
                  }} >
                    <Box  h="60%" position="relative" overflow="hidden">
                    <Image src={ele.volumeInfo.imageLinks?.thumbnail}  w="100%" h="100%" />
                    </Box>
                      <Box bg="rgb(61, 133, 61)" flex="1" p="4%" display="flex" flexDirection="column">
                        <Text fontSize="lg" as="b">{ele.volumeInfo.title}</Text>
                    <Flex>
                        <Text as="b">Author:</Text>
                        <Text>{ele.volumeInfo.authors}</Text>
                    </Flex>
                    <Flex>
                        <Text as="b">Price:</Text>
                        <Text>₹{ele.volumeInfo.pageCount}</Text>
                    </Flex>
                    <Box mt="auto"  alignSelf="center">
                    <Link to={`/details/${ele.id}`}>
                       <Button m="auto">View More</Button>
                       </Link>
                    </Box>
                    </Box>
                    
                </Box>
            ))}
                

         </SimpleGrid>
      )
         }
        </>
    )
}
export {BookCard}