import React, { useContext } from "react";
import "./Search.scss";
import { Ctx } from "../CtxProvider";
import { setData } from "../../api";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function Search() {
  const { setList, page, term, setTerm, setShowFilter } = useContext(Ctx);

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    setTerm(value);
  };

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    setData([term, page], setList);
  };

  const toggleFilter = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowFilter(true);
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <div className="inner">
        <IconButton
          color="primary"
          aria-label="Filter your search"
          onClick={toggleFilter}
          className="btn-filter"
        >
          <FilterAltIcon />
        </IconButton>
        <TextField
          variant="filled"
          type="search"
          label="Find Github repos"
          placeholder="search"
          onChange={handleChange}
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton
                  color="primary"
                  aria-label="Start searching"
                  type="submit"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <button type="submit">GO</button> */}
      </div>
    </form>
  );
}

export default Search;
