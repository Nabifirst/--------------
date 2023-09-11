import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRout = (props: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [navigate, token]);

  return props.children;
};

export default ProtectedRout;
