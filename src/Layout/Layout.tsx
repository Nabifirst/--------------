import React from "react";
import "./Layout.css";
import Dialog from "@mui/material/Dialog";
import { Link, Outlet } from "react-router-dom";
import logo from "./logo.png";
import { BiSearch, BiUserCircle, BiCategory, BiCategoryAlt } from "react-icons/bi";
import { GoFileMedia } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { FaProductHunt } from "react-icons/fa";
import avatar from "./avatar.png";
import Drawer from "@mui/material/Drawer";

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

const layout = () => {

   const [open1, setOpen1] = React.useState(false);
   const handleOpen1 = () => setOpen1(true);
   const handleClose1 = () => setOpen1(false);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor:any) => (
    <Box
      sx={{ width: "400px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="h-[100vh] py-[20px] px-[30px] bg">
        <h1 className="text-[25px] font-semibold">Поисковый запрос</h1>
        <input
          type="search"
          className="mt-[35px] py-[5px] px-[20px] text-[20px] text-[grey] bg-[#e3e3e3] rounded-[8px] w-[100%]"
          value="Поиск"
        />
        <div className=" mt-[25px] h-[1px]  w-[100%] bg-[gray]"></div>
        <h1 className="mt-[20px] text-[17px] font-semibold">Недавнее</h1>
        <p className="text-center text-[gray] mt-[200px]">
          Нет недавних запросов.
        </p>
      </div>
    </Box>
  );
  // drawer

  return (
    <div className=" dark:bg-black dark:text-white ">
      {/* <div className="fixed right-[10px] p-[10px] top-[10px] cart bg-[gray]  hover:bg-[#c5c5c5]">
        <BsCart2 className="text-[27px] text-white" />
      </div> */}
      <div className="flex">
        <div className="w-[240px] h-[100%] px-[15px] py-[20px] border-r-[1px] fixed dark:bg-black">
          <h1 className="text text-[30px]">Magoza</h1>
          <div className=" flex items-center justify-between py-[30px] sm:px-0">
            <ul className="grid gap-[10px]">
              <Link
                className="py-[10px] px-[15px] rounded-[12px] w-[200px] hover:bg-[#e3e3e3] dark:hover:text-black"
                to="/Home"
              >
                <div className="flex items-center gap-[10px]">
                  <FaProductHunt className="text-[27px]" />
                  <li className="text-[18px]">Categories</li>
                </div>
              </Link>
           
              <Link
                className="py-[10px] px-[15px] rounded-[12px] w-[200px] hover:bg-[#e3e3e3] dark:hover:text-black"
                to="Categories"
              >
                <div className="flex items-center gap-[10px]">
                  <BiCategory className="text-[27px]" />
                  <li className="text-[18px]">Sub Categories</li>
                </div>
              </Link>
              <Link
                className="py-[10px] px-[15px] rounded-[12px] w-[200px] hover:bg-[#e3e3e3] dark:hover:text-black"
                to="Brands"
              >
                <div className="flex items-center gap-[10px]">
                  <BiCategoryAlt className="text-[27px]" />
                  <li className="text-[18px]">Brands</li>
                </div>
              </Link>
              <Link
                className="py-[10px] px-[15px] rounded-[12px] w-[200px] hover:bg-[#e3e3e3] dark:hover:text-black"
                to="Product"
              >
                <div className="flex items-center gap-[10px]">
                  <BiCategoryAlt className="text-[27px]" />
                  <li className="text-[18px]">Product</li>
                </div>
              </Link>

              <div className="py-[10px] px-[15px] rounded-[12px] w-[200px] hover:bg-[#e3e3e3] dark:hover:text-black mt-[170px] flex items-center gap-[10px]">
                <GiHamburgerMenu className="text-[27px]" />
                <h1>Ещё</h1>
              </div>
              <div
                onClick={handleOpen1}
                className="flex cursor-pointer items-center gap-[10px] py-[10px] px-[15px] rounded-[12px] w-[200px] hover:bg-[#e3e3e3] dark:hover:text-black"
              >
                <BiUserCircle className="text-[27px]" />
                <li className="text-[18px]">Admin</li>
              </div>
            </ul>
          </div>
        </div>
        <Modal
          
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open1}
          onClose={handleClose1}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open1}>
            <div>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              ></Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <div className=" text-center">Do you want to Log Out</div>
                  <div className=" flex gap-[40px] justify-center mt-[10px]">
                    <Link to="/">
                  <div>
                    <button className=" p-[7px] bg-green-500 rounded-[10px]">
                      Yes
                    </button>
                  </div>
                    </Link>
                  <div>
                    <button onClick={handleClose1} className=" p-[7px] bg-red-500 rounded-[10px]">
                      No
                    </button>
                  </div>
                </div>
              </Typography>
            </Box>
            </div>
          </Fade>
        </Modal>
        <div className="ml-[250px] pl-[20px] pr-[10px] dark:bg-black w-[100%] h-[100%] overflow-auto">
          <Outlet />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="w-[500px] h-[70vh] rounded-[40px]">
          <div className="text-center border-b-[1px] py-[10px] border-[#999]">
            <h1 className="text-[20px]">Создание публикации</h1>
          </div>
          <div className="my-[100px] w-[100%] mx-auto text-center">
            <GoFileMedia className="text-[100px] mx-auto" />
            <h1 className="text-[20px]">Перетащите сюда фото и видео</h1>
            <button className="mt-[20px] text-center py-[5px] px-[20px] bg-[#0095f6] rounded-[12px] text-[#fff]">
              Выбрать на компьютере
            </button>
          </div>
        </div>
      </Dialog>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default layout;
