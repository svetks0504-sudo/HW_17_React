import { 
  ThemeProvider, 
  createTheme,
  CssBaseline,
  Typography } from '@mui/material';
import styled from '@emotion/styled';
import './App.css'
import { useState } from 'react';



const MyButton = styled('button')(({theme})=>({
padding: "10px",
backgroundColor: theme.palette.primary.main,
color: "#8842ca",
borderRadius: "5px",
cursor: 'pointer',
border: "none",
position: "absolute",
right: "50px",
top: "40px"
}));

function App() {
const [isDark, setIsDark] =  useState(false)

const theme = createTheme({
  palette: {
    mode: isDark ? "dark" : "light",
      primary: {
       main: isDark ? "#350a6e" : "#d3bcf1",
      }
    },
    typography: {
      h1: {
        color: isDark ? "#c58df3" : "#3b065e",
        fontSize: "2rem"
      }
    }
})
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Typography variant="h1" sx={{p:5}}>
        {isDark ? "Dark Theme" : "Light Theme"}
      </Typography>

      <MyButton
      onClick={() => setIsDark(!isDark)}>
        Toggle Theme
      </MyButton>

      <div className='loader'/>

    </ThemeProvider>
  )
}

export default App;
