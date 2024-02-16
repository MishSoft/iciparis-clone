"use client";
import Image from "next/image";
import Header from "./components/Header/Header";
import PreviewMenu from "./components/PreviewMenu/PreviewMenu";
import Brands from "./components/Brands/Brands";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

export default function Home() {
  const [isSeach, setIsSearch] = useState<boolean>(false);
  return (
    <main>
      <Header handleSearch={setIsSearch} />
      <PreviewMenu />
      <Brands />
      {isSeach && <SearchBar />}
    </main>
  );
}
