import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export const PokemonSearchPage = () => {
  const [formValues, setFormValues] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Funciona esta mierda?");
  };

  const handleInputChange = (e: any) => {
    setFormValues(e.target.value);
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
          </Box>
        </form>
      </Box>
    </>
  );
};
