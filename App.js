import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { Container , Paper , Box , Typography , AppBar , Toolbar, Button, TableContainer, Table, TableBody, TableHead, TableCell, TableRow, TablePagination, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from './Components/Navbar'
import axios from 'axios'
import Footer from './Components/Footer'


const useStyles = makeStyles((theme) => ({
  root : {
    width: "100vw",
    paddingTop: theme.spacing(5),
    marginTop: '130px',
    
  },
  
}));

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const loadUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  setUsers(res.data); 
  };

   useEffect(() => {
   loadUsers()
   },[]);
  return (
    <Container className={classes.root}>
      <Navbar/>
      <Box textAlign='right' >
      <Button 
      color="primary"
      variant="contained"
      mt={1}
      >Add Tracker</Button></Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650,}} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage)
            .map((user) => (
            <TableRow>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email} </TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.company.name}</TableCell>
            <TableCell>{user.website}</TableCell>
            </TableRow>
            ))}
           </TableBody>
        </Table>
        <TablePagination
      rowsPerPageOptions={[5,10]} 
      count={users.length}
      rowsPerPage={rowsPerPage}
      page={page}
      />
      </TableContainer>
     <Footer/>
     </Container>
     
  );
            }
           

export default App;
