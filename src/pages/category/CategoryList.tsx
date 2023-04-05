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

function CategoryList() {
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

  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    let categoryService = new CategoryService();

    categoryService.getAll().then((res) => {
      setCategory(res.data);
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleClose1 = () => setOpen(false);

  const [name, setName] = useState("");
  const [description, setDes] = useState("");

  const handleAdd = () => {
    if (!loggedIn) {
      alert("Please login before making changes");
      navigate("/login");
      return;
    }

    let categoryService = new CategoryService();
    let newValueProduct: Category = {
      name: name,
      description: description,
    };
    categoryService.getAdd(newValueProduct);
    categoryService.getAll().then((res) => {
      setCategory(res.data);
    });
  };

  const handleDelete = (item: any) => {
    if (!loggedIn) {
      alert("Please login before making changes");
      navigate("/login");
      return;
    }
    let categoryService = new CategoryService();
    let it: Category = item.id;
    categoryService.getDelete(it);

    categoryService.getAll().then((res) => {
      setCategory(res.data);
    });
  };

  const handleUpdate = () => {};

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Descriptions</TableCell>

              {/* <TableCell align="right">Update</TableCell> */}
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">
                <button onClick={handleOpen}>Add</button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((i) => (
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
                <TableCell align="right">{i.description}</TableCell>

                {/* <TableCell align="right">
                  <button onClick={handleOpen1}>Update</button>
                </TableCell> */}
                <TableCell align="right">
                  <button onClick={() => handleDelete(i)}>Delete</button>
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
              type={"number"}
              onChange={(e) => setDes(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>
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
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="UnitPrice"
              name="unitPrice"
              type={"number"}
              onChange={(e) => setDes(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default CategoryList;
