import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'primary.main', 
        color: 'white',
        textAlign: 'center', 
        py: 2, 
        width: '100%',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
      </Typography>
      
    </Box>
  )
}

export default Footer