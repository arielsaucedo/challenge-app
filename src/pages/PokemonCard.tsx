import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

export const PokemonCard = (props: any) => {
  const { searchResult } = props.props;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginBottom: 30 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={searchResult.sprites.other.home.front_default}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          {searchResult.species.name.toUpperCase()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick}>Sprites</Button>
      </CardActions>
      {isActive ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Avatar
              alt={searchResult.species.name}
              sx={{ width: 70, height: 70 }}
              src={searchResult.sprites.front_default}
            />

            <Avatar
              alt={searchResult.species.name}
              sx={{ width: 70, height: 70 }}
              src={searchResult.sprites.front_shiny}
            />
          </Stack>
        </Box>
      ) : null}
    </Card>
  );
};
