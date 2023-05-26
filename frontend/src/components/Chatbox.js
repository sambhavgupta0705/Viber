import { Box } from "@chakra-ui/layout";
// import { ChatState } from "../context/ChatProvider";
// import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    // ChatState
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      
      borderWidth="2px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} /> 
    </Box>
  );
};

export default Chatbox;