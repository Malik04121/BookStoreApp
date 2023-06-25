import { Box, Button, Checkbox, Flex, Text } from "@chakra-ui/react"
import { useState } from "react";
import { fetchBooks } from "./redux/action";
import { useDispatch } from "react-redux";

let catData=["Art",'Biography & Autobiography',"Business & Economics","Education","Fiction","History","Humor","Philosophy"]
function Filter(){
    const [checkboxValue,setCheckboxValue]=useState("")
    const [selectedCheckbox, setSelectedCheckbox] = useState('');
    const  dispatch=useDispatch()


    const checkboxhandler = (e, index) => {
        setCheckboxValue(e.target.value);
        dispatch(fetchBooks(e.target.value))

      };

    return(
        <>
        <Box w="20%"  bg="rgb(61, 133, 61)" color="white">
            <Flex mt="20px" justifyContent="space-around" alignItems="center">
                <Text as="b" fontSize="xl">Filter</Text>
                <Button>Reset</Button>
            </Flex>
            <Box  p="8%" mt="2rem">
            <Text fontSize="xl" mb="1rem" as="b">
              Book Category
            </Text>
            {catData.map((ele, index) => (
              <Flex mt="1rem">
                <Checkbox
                  textTransform="capitalize"
                  onChange={(e) => checkboxhandler(e, index)}
                  value={ele}
                  isChecked={ele === checkboxValue}
                >
                  {ele}
                </Checkbox>
              </Flex>
            ))}
          </Box>

        </Box>
        </>
    )
}
export {Filter}