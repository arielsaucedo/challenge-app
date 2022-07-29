import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const PokemonCard = (props: any) => {
  console.log("props card", props);
  const { searchResult } = props.props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={searchResult.sprites.other.home.front_default}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {searchResult.species.name.toUpperCase()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Stats</Button>
        <Button size="small">Poderes</Button>
      </CardActions>
    </Card>
  );
};
