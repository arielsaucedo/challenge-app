import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { PokemonCard } from "./PokemonCard";

const baseUrl = "https://pokeapi.co/api/v2/";

export const PokemonSearchPage = () => {
  const [formValues, setFormValues] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios
      .get(`${baseUrl}/pokemon/${formValues}`)
      .then((response) => {
        setSearchResult(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (e: any) => {
    setFormValues(e.target.value);
  };

  const handleReset = () => {
    setSearchResult(null);
    setFormValues("");
  };

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        style={{ textAlign: "center" }}
      >
        Buscador
      </Typography>
      <Divider variant="fullWidth" style={{ backgroundColor: "white" }} />
      <Box
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <form onSubmit={handleSubmit}>
          <Grid item>
            <TextField
              id="name-input"
              name="pokemon"
              type="text"
              value={formValues}
              onChange={handleInputChange}
              size="small"
              style={{ backgroundColor: "white", width: "400px" }}
            />
          </Grid>

          <Box style={{ marginTop: "10px", textAlign: "center" }}>
            <Button variant="contained" color="primary" type="submit">
              Buscar
            </Button>
            <Button
              variant="outlined"
              style={{
                color: "white",
                borderColor: "white",
                marginLeft: "10px",
              }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Box>

      {searchResult === null ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Typography variant="h5">
            Realiza la busqueda de tu pokemon favorito
          </Typography>
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <PokemonCard props={{ searchResult }} />
        </Box>
      )}
    </>
  );
};
