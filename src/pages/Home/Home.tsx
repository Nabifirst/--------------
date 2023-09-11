import React, { useState } from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} from "../../api/todos";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import picture5 from "../../assets/5.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Home = () => {
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setModal1(true);
  };

  const handleClose1 = () => {
    setModal(false);
  };

  const handleClickOpen1 = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal1(false);
  };

  const { data = [] } = useGetProductsQuery("");

  const [modal1, setModal1] = useState<boolean>(false);

  const [modal, setModal] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [text3, setText3] = useState<string>("");
  const [idx, setIdx] = useState<number | null>(null);

  // const [title,setTitle]=useState<string>("")

  const handleEdit = (e:any) => {
    setModal(true);
    setIdx(e.id);
    setText(e.title);
    setText1(e.title1);
    setText2(e.price);
    setText3(e.img);
  };

  // const [delFnc] = useDelTodosMutation();
  const [add] = useAddProductMutation();

  const [del] = useDeleteProductMutation();

  const [editTodo] = useEditProductMutation();

  const [title, setTitle] = useState<string>("");
  const [title1, setTitle1] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [img, setImg] = useState<string>("");

  return (
    <div className=" p-[20px]">
      <div className=" grid grid-cols-3">
        {data.map((e: any) => {
          return (
            <div key={e.id} className=" flex">
              {/* <img src={"http://localhost:3000/api/products" + e.src} alt="" /> */}
              {/* {
                e.media.map((el) => {
                  return (
                    <div>
                      <img src={el.src} alt="" />
                    </div>
                  )
                })
              } */}
              <div className=" hover:scale-105 transition-all">
                <div className="mt-[20px] w-[282px]">
                  <div className=" flex items-start ">
                    <img
                      className=" w-[282px]  h-[300px] rounded-[7px] "
                      src={e.img}
                      alt=""
                    />
                    <img
                      className=" relative right-[50px] mt-[20px]"
                      src={picture5}
                      alt=""
                    />
                  </div>
                  <div className=" flex justify-between items-center p-[10px]">
                    <div>
                      <h1 className=" text-[16px] font-bold">{e.title}</h1>
                      <div className=" ">
                        <button className=" text-[16px] text-gray-500">
                          {e.price}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className=" p-[5px] bg-gray-300 rounded-[10px]">
                        {e.title1}
                      </p>
                    </div>
                  </div>
                  {/* console.log(title); */}
                </div>
                <div className=" flex justify-center gap-[50px]">
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
              <input
                className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                value={text2}
                onChange={(event) => {
                  setText2(event.target.value);
                }}
                type="text"
                name=""
                id="neka"
              />
              <input
                className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                value={text3}
                onChange={(event) => {
                  setText3(event.target.value);
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
                    title: text,
                    title1: text1,
                    price: text2,
                    img: text3,
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

        {/* {modal ? (
          <div>
            <input
              onChange={(event) => setText(event.target.value)}
              type="text"
              value={text}
              name=""
              id=""
            />
            <button
              onClick={() => {
                editTodo({ title: text, idx });
              }}
            >
              Edit
            </button>
          </div>
        ) : null} */}

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
                    <div></div>

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
                  </div>
                  <div>
                    <input
                      className="  p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                      value={price}
                      onChange={(event) => {
                        setPrice(event.target.value);
                      }}
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <input
                      className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                      value={img}
                      onChange={(event) => {
                        setImg(event.target.value);
                      }}
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button
                onClick={() => {
                  if (
                    title.length === 0 ||
                    title1.length === 0 ||
                    price.length === 0 ||
                    img.length === 0
                  ) {
                    return alert("Please Full Sentence");
                  } else {
                    add({
                      title: title,
                      title1: title1,
                      price: price,
                      img: img,
                    });
                  }
                  setImg("");
                  setTitle("");
                  setTitle1("");
                  setPrice("");
                  setModal1(false);
                }}
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
