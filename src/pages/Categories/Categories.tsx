import React, { useState } from "react";
import {
  useAddProduct1Mutation,
  useDeleteProduct1Mutation,
  useEditProduct1Mutation,
  useGetCategoriesQuery,
} from "../../api/todos";
import picture5 from "../../assets/5.svg";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const Categories = () => {
  const { data = [] } = useGetCategoriesQuery("");

  const [del] = useDeleteProduct1Mutation();
    const [add] = useAddProduct1Mutation();
    const [editTodo] = useEditProduct1Mutation()

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    };
    

    
  const [modal, setModal] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [text3, setText3] = useState<string>("");
  const [Brand, setBrand] = useState<string>("");
  const [Category, setCategory] = useState<string>("");
  const [idx, setIdx] = useState<number | null>(null);
    
  const handleEdit = (e) => {
    setModal(true);
    setIdx(e.id);
    setText(e.Name);
    setText1(e.Cost);
    setText2(e.Sourname);
      setText3(e.img);
      setBrand(e.Brand)
      setCategory(e.Cotegory);
    };
    

      const handleClose1 = () => {
        setModal(false);
      };

      const handleClickOpen1 = () => {
        setModal(true);
      };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [modal1, setModal1] = useState<boolean>(false);

  const [title, setTitle] = useState<string>("");
  const [title1, setTitle1] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [select, setSelect] = useState<string>("");
  const [select1, setSelect1] = useState<string>("");

  const handleClose = () => {
    setModal1(false);
  };

  return (
    <div className=" pb-[50px]">
      <div className=" grid grid-cols-3 ">
        {data.map((e: any) => {
          return (
            <div
              key={e.id}
              className=" flex hover:scale-95 hover:transition-all"
            >
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
              <div className=" ">
                <div className="mt-[20px] w-[282px]">
                  <div className=" flex items-start ">
                    <img
                      className=" w-[282px]  h-[300px] rounded-[7px] "
                      src={e.img}
                      // src={ + e.media[0].src}
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
                      <h1 className=" text-[16px] font-bold">{e.Name}</h1>
                      <div className=" ">
                        <button className=" text-[16px] text-gray-500">
                          {e.Sourname}
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className=" p-[5px] bg-gray-300 rounded-[10px]">
                        {e.Cost}
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
                className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px]"
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
              <select
                className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                name=""
                id=""
                value={Brand}
                onChange={(event) => setBrand(event.target.value)}
              >
                <option value="NONE">NONE</option>
                <option value="GUCCI">GUCCI</option>
                <option value="Bambuk">Bambuk</option>
                <option value="NIKE">NIKE</option>
                <option value="BAGGOZZA">BAGGOZZA</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Nokia">Nokia</option>
              </select>
              <select
                className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                name=""
                id=""
                value={Category}
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="NONE">NONE</option>
                <option value="Одежда">Одежда</option>
                <option value="Phone">Phone</option>
              </select>
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
                    Name: text,
                    Cost: text1,
                    Sourname: text2,
                    img: text3,
                    Brand: Brand,
                    Cotegory: Category,
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
                      className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
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
                    <select
                      className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                      name=""
                      id=""
                      value={select}
                      onChange={(event) => setSelect(event.target.value)}
                    >
                      <option value="NONE">NONE</option>
                      <option value="GUCCI">GUCCI</option>
                      <option value="Bambuk">Bambuk</option>
                      <option value="NIKE">NIKE</option>
                      <option value="BAGGOZZA">BAGGOZZA</option>
                      <option value="Apple">Apple</option>
                      <option value="Samsung">Samsung</option>
                      <option value="Nokia">Nokia</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] mt-[15px]"
                      name=""
                      id=""
                      value={select1}
                      onChange={(event) => setSelect1(event.target.value)}
                    >
                      <option value="NONE">NONE</option>
                      <option value="Одежда">Одежда</option>
                      <option value="Phone">Phone</option>
                    </select>
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
                      Name: title,
                      Cost: title1,
                      Sourname: price,
                      img: img,
                      Brand: select,
                      Cotegory: select1,
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

export default Categories;
