import React, {useState} from "react";
import { useAddProduct3Mutation, useDeleteProduct3Mutation, useEditProduct3Mutation, useGetProductsQuery, useGetUsersQuery, useGetsubCategoriesQuery } from "../../api/todos";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import picture5 from "../../assets/5.svg";

import { PlusOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const { Option } = Select;
const Product = () => {
    

      const handleClose1 = () => {
        setModal(false);
  };

   const [open, setOpen] = useState(false);

   const showDrawer = () => {
     setOpen(true);
   };

   const onClose = () => {
     setOpen(false);
   };
    
    const {data=[]}=useGetsubCategoriesQuery("")
    const [del] = useDeleteProduct3Mutation()
    const [editTodo] = useEditProduct3Mutation()
    const [add] = useAddProduct3Mutation()

    const [modal, setModal] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [text1, setText1] = useState<string>("");
    const [text2, setText2] = useState<string>("");
    const [text3, setText3] = useState<string>("");
    const [Brand, setBrand] = useState<string>("");
    const [Cotegory, setCotegory] = useState<string>("");
    const [idx, setIdx] = useState<number | null>(null);

    const [title, setTitle] = useState<string>("");
    const [title1, setTitle1] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [img, setImg] = useState<string>("");
    const [select, setSelect] = useState<string>("");
    const [select1, setSelect1] = useState<string>("");
  
    const handleEdit = (e) => {
      setModal(true);
      setIdx(e.id);
      setText(e.imya);
      setText1(e.familiya);
      setText2(e.narx);
        setText3(e.img);
      setBrand(e.Brand);
      setCotegory(e.Cotegory);
  };
  

    const handleClose = () => {
      setModal1(false);
  };
  
  const [modal1, setModal1] = useState<boolean>(false);

    

    //   const handleClose = () => {
        // setModal1(false);
    //   };

  return (
    <div className=" grid grid-cols-3">
      {data.map((e: any) => {
        return (
          <div key={e.id} className=" flex hover:scale-95 hover:transition-all">
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
                    <h1 className=" text-[16px] font-bold">{e.imya}</h1>
                    <div className=" ">
                      <button className=" text-[16px] text-gray-500">
                        {e.narx}
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className=" p-[5px] bg-gray-300 rounded-[10px]">
                      {e.familiya}
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
                    value={Cotegory}
                    onChange={(event) => setCotegory(event.target.value)}
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
                        imya: text,
                        familiya: text1,
                        narx: text2,
                        //   src: text3,
                        // e.media[0]?.src:text3,
                        img: text3,
                        Brand: Brand,
                        Cotegory: Cotegory,
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
          </div>
        );
      })}
      <div className=" flex justify-center w-[100%] items-center mt-[40px]">
        <Button
          onClick={showDrawer}
          className=" text-blue-600 mt-[40px] justify-center] "
        >
          <AddCircleOutlineSharpIcon fontSize="large" />
        </Button>
      </div>
      {/* {modal1 ? (
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
                    className=" p-[10px] w-[100%] border-[2px] border-gray-400 rounded-[10px] mt-[15px]"
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
                    className=" p-[10px] w-[100%] border-[2px] border-gray-400 rounded-[10px] mt-[15px]"
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
                    className=" p-[10px] w-[100%] border-[2px] border-gray-400 rounded-[10px] mt-[15px]"
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
                    className=" p-[10px] w-[100%] border-[2px] border-gray-400 rounded-[10px] mt-[15px]"
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
                  </select>
                </div>
                <div>
                  <select
                    className=" p-[10px] w-[100%] border-[2px] border-gray-400 rounded-[10px] mt-[15px]"
                    name=""
                    id=""
                    value={select1}
                    onChange={(event) => setSelect1(event.target.value)}
                  >
                    <option value="NONE">NONE</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Bruke">Bruke</option>
                    <option value="Tufli">Tufli</option>
                    <option value="Ruba">Ruba</option>
                  </select>
                </div>
                <div>
                  <input
                    className=" p-[10px] w-[100%] border-[2px] border-gray-400 rounded-[10px] mt-[15px]"
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
                    imya: title,
                    familiya: title1,
                    narx: price,
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
      ) : null} */}
      {/* <button onClick={showDrawer}>
        <AddCircleOutlineSharpIcon/>
      </button> */}
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <button
              onClick={() => {
                // if (
                //   title.length === 0 ||
                //   title1.length === 0 ||
                //   price.length === 0 ||
                //   img.length === 0
                // ) {
                //   return alert("Please Full Sentence");
                // } else {
                add({
                  imya: title,
                  familiya: title1,
                  narx: price,
                  img: img,
                  Brand: select,
                  Cotegory: select1,
                });
                // setTitle("");
                setOpen(false);
              }}
            >
              SUBMIT
            </button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Please enter user name"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: "Please enter url" }]}
              >
                <Input
                  value={img}
                  onChange={(event) => setImg(event.target.value)}
                  style={{ width: "100%" }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: "Please select an owner" }]}
              >
                <Input
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder="Please enter user name"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Input
                  value={title1}
                  onChange={(event) => setTitle1(event.target.value)}
                  placeholder="Please enter user name"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  { required: true, message: "Please choose the approver" },
                ]}
              >
                <select
                  className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px]"
                  name=""
                  id=""
                  value={select1}
                  onChange={(event) => setSelect1(event.target.value)}
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
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: "Please choose the dateTime" },
                ]}
              >
                <select
                  className=" p-[5px] w-[100%] border-[1px] border-gray-300 rounded-[7px] "
                  name=""
                  id=""
                  value={select}
                  onChange={(event) => setSelect(event.target.value)}
                >
                  <option value="NONE">NONE</option>
                  <option value="Одежда">Одежда</option>
                  <option value="Phone">Phone</option>
                </select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default Product;
