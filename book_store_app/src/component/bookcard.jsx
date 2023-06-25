import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { fetchBooks } from "./redux/action"
import { useDispatch, useSelector } from "react-redux"



function BookCard(){
    const  dispatch=useDispatch()
    const {books}=useSelector(state=>state)
    
    useEffect(()=>{
         dispatch(fetchBooks("Biography & Autobiography"))
    },[])

    return (
        <>
         <SimpleGrid w="80%" bg="rgb(44, 44, 44)"  columns={[2, 2, 4]} columnGap="5%" rowGap="1%" p="2%">
            {books.map((ele)=>(
                <Box bg="red" h="450px" display="flex" flexDirection="column" color="white">
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
                        <Text>${ele.volumeInfo.pageCount}</Text>
                    </Flex>
                    <Box mt="auto">
                       <Button>View More</Button>
                    </Box>
                    </Box>
                    
                </Box>
            ))}

         </SimpleGrid>
        </>
    )
}
export {BookCard}