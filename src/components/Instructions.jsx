import { Box, Typography } from '@mui/material';

const Instructions = () => {
  return (
    <>
      <Box
        display='flex'
        marginTop={10}
        gap={2}
        minHeight='100vh'
        flexDirection='column'>
        <Typography variant='h4' sx={{ color: 'primary.main', mb: 4 }}>
          Instruciones de la aplicación
        </Typography>
        <Typography variant='body' sx={{ textAlign: 'left' }}>
          Buscar Clima
        </Typography>
        <Typography variant='body' sx={{ textAlign: 'left' }}>
          Ingresa el nombre de una ciudad en el campo de búsqueda y presiona
          enter.
        </Typography>
        <Typography variant='body' sx={{ textAlign: 'left' }}>
          Se mostrará la información del clima actual, como temperatura,
          humedad, y las condiciones meteorológicas.
        </Typography>
        <Typography variant='body' sx={{ textAlign: 'left' }}>
          Puedes agregar ciudades a tus favoritos haciendo clic en el ícono de
          "favorito" junto al nombre de la ciudad.
        </Typography>
        <Typography variant='body' sx={{ textAlign: 'left' }}>
          Las ciudades favoritas se guardan en el contexto y se mantienen
          disponibles para consultas futuras.
        </Typography>
        <Typography variant='body' sx={{ textAlign: 'left' }}>
          Si la ciudad no se encuentra o si ocurre un error con la solicitud, se
          mostrará una notificación en la parte inferior derecha de la pantalla.
        </Typography>
      </Box>
    </>
  );
};

export default Instructions;
