import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import { Filter } from "../component/filter"
import { BookCard } from "../component/bookcard"

function Home(){
   

    return(
        <>
          <Flex>
            <Filter/>
            <BookCard/>
          </Flex>
        </>
    )
}
export {Home} 