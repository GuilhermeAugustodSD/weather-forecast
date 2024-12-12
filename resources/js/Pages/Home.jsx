import Container from "@/Components/Container";
import MainBox from "@/Components/MainBox";
import SearchBox from "@/Components/SearchBox";
import { useState } from "react";

export default function Welcome() {

  const [search, setSearch] = useState("Brasília")
  return (
    <>
      <Container>
        <SearchBox changeValue={setSearch}/>
        <MainBox search={search}/>
      </Container>
    </>
  );
}
