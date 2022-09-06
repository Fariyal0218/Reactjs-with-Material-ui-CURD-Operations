import { Box,Typography } from "@material-ui/core";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import React from "react";

function ButtonAppBar(){
    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="static">
            <Toolbar>
                <IconButton 
                size="large"
                 edge="start" 
                 color="inherit" 
                 aria-label="menu" 
                 sx={{mr:2}}
                >
                    <MenuIcon/>
                </IconButton>

                <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        </Box>
    )
}
export default ButtonAppBar