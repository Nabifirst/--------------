import React from 'react'
import { useAddProduct2Mutation, useDeleteProduct2Mutation, useEditProduct2Mutation, useGetBrandsQuery } from '../../api/todos'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

import { useState } from 'react';
const Brands = () => {

      const handleClose1 = () => {
        setModal(false);
      };

  const [modal1, setModal1] = useState<boolean>(false);

      const handleClose = () => {
        setModal1(false);
      };

      const [modal, setModal] = useState<boolean>(false);
      const [text, setText] = useState<string>("");
      const [text1, setText1] = useState<string>("");
    const [idx, setIdx] = useState<number | null>(null);
    

      const handleEdit = (e: any) => {
        setModal(true);
        setIdx(e.id);
        setText(e.name);
        setText1(e.img); 
  };
  
  
    
    const { data = [] } = useGetBrandsQuery("")
    
    const [del] = useDeleteProduct2Mutation()
    const [add] = useAddProduct2Mutation()
    const [editTodo]= useEditProduct2Mutation()

      const [title, setTitle] = useState<string>("");
      const [title1, setTitle1] = useState<string>("");

  return (
    <div className=" grid  grid-cols-3  pb-[50px]">
      {data.map((e) => {
        return (
          <div className=" w-[300px] border-[1px] rounded-[10px] bg-gray-400 mt-[20px] hover:scale-95 hover:transition-all ">
            <img width={300} className=" h-[300px]" src={e.img} alt="" />
            <h1 className=" text-[18px] font-bold  pt-[20px] text-center">
              {e.name}
            </h1>
            <div className=" flex justify-center gap-[50px] pt-[15px] pb-[15px]">
              <button
                className=" text-red-500"
                onClick={() => {
                  del(e.id);
                }}
              >
                <DeleteIcon />
              </button>
              <button
                onClick={() => {
                  handleEdit(e);
                }}
                className=" text-orange-500"
              >
                <EditIcon />
              </button>
            </div>
          </div>
        );
      })}

      {modal ? (
        <Dialog
          open={modal}
          onClose={handleClose1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <input
              className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
              type="text"
              name=""
              id="neka"
            />
            <input
              className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
              value={text1}
              onChange={(event) => {
                setText1(event.target.value);
              }}
              type="text"
              name=""
              id="neka"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose1}>Disagree</Button>
            <Button
              onClick={() => {
                const edit = {
                  id: idx,
                  name: text,
                  img:text1
                  // complete: false,
                };
                editTodo(edit);
                setModal(false);
              }}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}

      <div className=" flex justify-center w-[100%] items-center mt-[40px]">
        <Button
          onClick={() => setModal1(true)}
          className=" text-blue-600 mt-[40px] justify-center] "
        >
          <AddCircleOutlineSharpIcon fontSize="large" />
        </Button>
      </div>
      {modal1 ? (
        <Dialog
          open={modal1}
          // TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div>
                <div>
                  <input
                    className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                    value={title1}
                    onChange={(event) => {
                      setTitle1(event.target.value);
                    }}
                    type="text"
                    name=""
                    id=""
                  />
                  <div></div>
                </div>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                if (title.length === 0 || title1.length === 0) {
                  return alert("Please Full Sentence");
                } else {
                  add({
                    name: title,
                    img: title1,
                  });
                }
                // setImg("");
                setTitle("");
                setTitle1("");
                // setPrice("");
                setModal1(false);
              }}
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
}

export default Brands