import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCheck = (props: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (token) {
      return navigate("/Home");
    }
  }, [navigate, token]);

  return props.children;
};

export default AuthCheck;
