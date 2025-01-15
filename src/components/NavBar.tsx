import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";

interface props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitcher />
    </HStack>
  );
}

export default NavBar;
