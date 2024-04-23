// Complete the Index page component here
// Use chakra-ui
import { Button } from "@chakra-ui/react"; // example
import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons

const Index = () => {
  // TODO: Create the website here!
  return (
    <Button as="a" href="/othello" colorScheme="teal" leftIcon={<FaPlus />}>
      Play Othello
    </Button>
  ); // example
};

export default Index;
