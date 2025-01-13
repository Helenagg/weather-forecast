import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useFavorites } from '../context/FavoritesContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { favoritesText } from '../locale/es';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <>
      <Box sx={{ px: 2 }}>
        <Paper
          elevation={3}
          sx={{
            boxShadow: (theme) =>
              `0px 4px 10px ${theme.palette.secondary.dark}`,
            mt: 2,
            p: 2,
          }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Typography variant='h5'>{favoritesText.FAVORITES}</Typography>
            <FavoriteSharpIcon sx={{ color: 'alert.main', mt: 0.5 }} />
          </Box>
          <List>
            {favorites.length > 0 ? (
              favorites.map((city) => (
                <ListItem
                  key={city}
                  secondaryAction={
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => removeFavorite(city)}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  }>
                  <ListItemText primary={city} />
                </ListItem>
              ))
            ) : (
              <Typography variant='body' sx={{ mt: 2, textAlign: 'center' }}>
                {favoritesText.NO_DATA}
              </Typography>
            )}
          </List>
        </Paper>
      </Box>
    </>
  );
};

export default Favorites;
