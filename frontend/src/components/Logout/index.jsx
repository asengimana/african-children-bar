import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("token", "");
    localStorage.setItem("userId", "");
    window.location.reload();
    navigate("/");
  }, [navigate]);
  return <div></div>;
}
