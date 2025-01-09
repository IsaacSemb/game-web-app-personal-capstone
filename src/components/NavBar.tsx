import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitcher from "./ColorModeSwitcher";

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="50px" />
      <ColorModeSwitcher/>
    </HStack>
  );
}

export default NavBar;
