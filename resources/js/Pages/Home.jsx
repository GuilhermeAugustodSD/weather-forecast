import Container from "@/Components/Container";
import MainBox from "@/Components/MainBox";
import SearchBox from "@/Components/SearchBox";
import { useEffect, useState } from "react";

export default function Welcome() {

  const [search, setSearch] = useState("")

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSearch(`${position.coords.latitude} ${position.coords.longitude}`)
        },
      );
    } else {
      setSearch("Brasília")
    }
  }, []);
  return (
    <>
      <Container>
        <SearchBox changeValue={setSearch}/>
        <MainBox search={search}/>
      </Container>
    </>
  );
}
