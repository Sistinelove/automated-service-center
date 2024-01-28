import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import "@mui/material/styles"; // Импорт стилей Material-UI
import MenuIcon from '@mui/icons-material/menu'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="bg-gray-800">
        <Container fixed>
          <Toolbar >
            <IconButton edge="start" color="inherit" arial-laabel="menu" sx={{mr:2}}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography variant='h6' >Service-center</Typography>
            <Box mr={3}>
              <Button variant="outlined" className="text-teal-400">Log in</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar >
    </Box>

  );
}
