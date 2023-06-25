import {Flex,Input,Text,InputRightElement,InputGroup} from "@chakra-ui/react"
import { SearchIcon} from "@chakra-ui/icons"

import {Link } from "react-router-dom"
import {BsCart2} from "react-icons/bs"
import { fetchBooks } from "./redux/action"
import { useDispatch } from "react-redux"


function Navbar(){
    const  dispatch=useDispatch()
   
    const handleChange=(e)=>{
        let id = setInterval(() => {
            clearInterval(id);
            if(e.target.value!==""){
                dispatch(fetchBooks(e.target.value))
            }
            else{
            dispatch(fetchBooks("Biography & Autobiography"))

            }
          }, 1000);
    }

    return(
        <>
          <Flex position="sticky" top="0px" bg="black" color="white" h="80px" alignItems="center" justifyContent="space-around" zIndex="1000">
                <Link to="/cart">
                    <Text fontSize="2xl">Book Store</Text>
                    </Link>
            <Flex alignItems="center" color="white" w="30%">
                 
                 <InputGroup>
                 <Input placeholder="Search" type="text" onChange={(e)=>handleChange(e)}/>
                 <InputRightElement children={<SearchIcon color="gray.300" borderRadius="16px" />}/>
                 </InputGroup>
            </Flex>
            <Flex alignItems="center" color="white" gap="7px">
                    <BsCart2 size="1.3rem"/>
                    <Link to="/cart">
                    <Text fontSize="xl">Cart</Text>
                    </Link>
                </Flex>
          </Flex>
        </>
    )
}
export {Navbar} 