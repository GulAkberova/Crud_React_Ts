import React, { useEffect, useState } from "react";
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

function ProductList() {
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


  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    let productService = new ProductService();

    productService.getAll().then((res) => {
      setProducts(res.data);
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [name, setName]=useState('')
const [unitPrice, setUnitPrice]=useState((''))
console.log(typeof(unitPrice));

const [unitsInStock, setUnitsInStock]=useState((''))
  const handleAdd=()=>{
    let productService = new ProductService();
    let newValueProduct : Product={
        name: name,
        unitPrice: unitPrice,
        unitsInStock: unitsInStock
       
    }
    productService.getAdd(newValueProduct)

    console.log(newValueProduct);
    console.log(products);

  }
 
  const handleDelete=(item:any)=>{
    let productService = new ProductService();
    let it : Product=item.id
    productService.getDelete(it)
    
    productService.getAll().then((res) => {
        setProducts(res.data);
      });


  }

useEffect(()=>{
   let a= localStorage.setItem('sf',JSON.stringify(products))
   localStorage.getItem
   
})
const getLocalItems=()=>{
    let ls=localStorage.getItem('sf')
    console.log('aaaaaaaaa',ls);

    // if(ls){
    //     return JSON.parse(localStorage.getItem('sf':string):void)
    // }else{
    //     return []
    // }
    
}

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">UnitPrice</TableCell>
              <TableCell align="right">UnitStock</TableCell>
              <TableCell align="right">Add</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((i) => (
              <TableRow
                key={i.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {i.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {i.name}
                </TableCell>
                <TableCell align="right">{i.unitPrice}</TableCell>
                <TableCell align="right">{i.unitsInStock}</TableCell>
                <TableCell align="right">
                  <button onClick={handleOpen}>Add</button>
                </TableCell>
                <TableCell align="right">
                  <button>Update</button>
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
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="UnitPrice"
              name="unitPrice"
              type={'number'}
              onChange={(e) => setUnitPrice(e.target.value)}

            />
            <input
              placeholder="UnitStock"
              name="unitStock"
              onChange={(e) => setUnitsInStock(e.target.value)}

            />
            <button onClick={(handleAdd)}>Add</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default ProductList;
