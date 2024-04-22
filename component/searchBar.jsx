import React, { useState, useEffect } from "react";
import Result from "../component/Result";
import { Button, Input } from "@chakra-ui/react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repoResult, setRepoResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async () => {
    // Fetch data based on searchInput and currentPage
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchInput}&page=${currentPage}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();
      setRepoResult(data.items);
      setTotalPages(Math.ceil(data.total_count / 30)); // Assuming 30 items per page
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [currentPage]); // Fetch data when currentPage changes

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div style={{ padding: "30px" }}>
        <Input
          placeholder="Enter your name"
          bg="gray.100"
          border="3px solid gray.300"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          _placeholder={{ color: "gray.500" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Result repos={repoResult} />

      <div>
        {currentPage > 1 && (
          <button onClick={handlePrevPage}>Previous Page</button>
        )}
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>Next Page</button>
        )}
      </div>
    </>
  );
};

export default SearchBar;
