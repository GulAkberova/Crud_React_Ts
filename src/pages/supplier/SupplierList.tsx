import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../models/product/Product";
import { ProductService } from "../../network/product/ProductService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { crudContext } from "../../context/crudContext";
import { useNavigate } from "react-router-dom";
import { Category } from "../../models/category/Category";
import { CategoryService } from "../../network/category/CategoryService";
import { Supplier } from "../../models/supplier/Supplier";
import { SupplierService } from "../../network/supplier/Supplier";


function SupplierList() {
    const { loggedIn } = useContext(crudContext);
    const navigate = useNavigate();
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


  const [supplier, setSupplier] = useState<Supplier[]>([]);


  useEffect(() => {
    let supplierService = new SupplierService();

    supplierService.getAll().then((res) => {
        setSupplier(res.data);
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleClose1 = () => setOpen(false);

const [name1, setName1]=useState('')
const [name2, setName2]=useState('')
const [name3, setName3]=useState('')



  const handleAdd=()=>{
    if (!loggedIn) {
        alert("Please login before making changes");
        navigate("/login");
        return;
    }
  
    let supplierService = new SupplierService();
    let newValueProduct : Supplier={
        companyName: name1,
        contactName:name2,
        contactTitle:name3
       
    }
    supplierService.getAdd(newValueProduct)

  }
 
  const handleDelete=(item:any)=>{
    if (!loggedIn) {
        alert("Please login before making changes");
        navigate("/login");
        return;
    }
    let supplierService = new SupplierService();
    let it : Supplier=item.id
    supplierService.getDelete(it)
    
    supplierService.getAll().then((res) => {
        setSupplier(res.data);
      });


  }




const handleUpdate=()=>{

}

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>CompanyName</TableCell>
              <TableCell align="right">ContactName</TableCell>
              <TableCell align="right">ContactTitle</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">
              <button onClick={handleOpen}>Add</button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {supplier.map((i) => (
              <TableRow
                key={i.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {i.companyName}
                </TableCell>
                <TableCell align="right">{i.contactName}</TableCell>
                <TableCell align="right">{i.contactTitle}</TableCell>
              
                <TableCell align="right">
                  <button onClick={handleOpen1}>Update</button>
                </TableCell>
                <TableCell align="right">
                  <button onClick={()=>handleDelete(i)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>

          <Typography>
            <input
              placeholder="Name"
              name="name1"
              onChange={(e) => setName1(e.target.value)}
            />
               <input
              placeholder="Name"
              name="name2"
              onChange={(e) => setName2(e.target.value)}
            />
               <input
              placeholder="Name"
              name="name3"
              onChange={(e) => setName3(e.target.value)}
            />
          
           
            <button onClick={(handleAdd)}>Add</button>
          </Typography>
        </Box>
      </Modal>


      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>

          <Typography>
            <input
              placeholder="Name"
              name="name1"
              onChange={(e) => setName1(e.target.value)}
            />
           <input
              placeholder="Name"
              name="name2"
              onChange={(e) => setName2(e.target.value)}
            />
             <input
              placeholder="Name"
              name="name3"
              onChange={(e) => setName3(e.target.value)}
            />
           
            <button onClick={(handleAdd)}>Add</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default SupplierList;
