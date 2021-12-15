import React from 'react'
import { Typography , AppBar , Toolbar, Button } from "@material-ui/core";

const Navbar = () => {
    return (
        <AppBar>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1}}>
            Proof of Performance
            </Typography>
          <Button color="inherit">utkarsh.upadhyay-edc@heyday.co</Button>
          <Button color="inherit">Logout</Button>
         </Toolbar>
      </AppBar>
    )
}

export default Navbar
