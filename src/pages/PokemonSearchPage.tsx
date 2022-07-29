import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { PokemonCard } from "./PokemonCard";

const baseUrl = "https://pokeapi.co/api/v2/";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const PokemonSearchPage = () => {
  const [formValues, setFormValues] = useState<string>("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios
      .get(`${baseUrl}/pokemon/${formValues.toLowerCase()}`)
      .then((response) => {
        setSearchResult(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setOpen(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleInputChange = (e: any) => {
    setFormValues(e.target.value);
  };

  const handleReset = () => {
    setSearchResult(null);
    setFormValues("");
  };

  const handleClose = () => {
    setOpen(false);
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

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }} style={{ textAlign: "center" }}>
          <h2 id="child-modal-title">Error</h2>
          <p id="child-modal-description">
            No se encuentra el pokemon solicitado. Intente nuevamente.
          </p>
          <Button onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>

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
          {loading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            <PokemonCard props={{ searchResult }} />
          )}
        </Box>
      )}
    </>
  );
};
