import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import { Button } from "../../components/UI/Button";

import "react-toastify/dist/ReactToastify.css";
import { Container, HeroImg, Form } from "./styles.js";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
import logoImgLight from "../../assets/logo-light.svg";

import heroesImg from "../../assets/heroes.png";

export default function Logon(props) {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    
    try {
      const res = await api.post("sessions", { id });
      
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", res.data.name);
      
      history.push("/profile");
    } catch (err) {
      if(id.trim() === '') toast.error('Insert your ID!!');
      if(id) toast.error("Login failed, try again!!");
    }
  }

  return (
    <>
      <ToastContainer 
        style={{
          fontSize: 20,
        }}
      />
      <Container >
        <Form
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          changeTheme={props.theme}
        >
          <img src={props.theme && localStorage.getItem('theme') === 'light' ? logoImg : logoImgLight} alt="Be The Hero" />
          <form onSubmit={handleLogin}>
            <h1>Make your logon</h1>

            <input
              placeholder="Your ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <motion.div whileHover={{ scale: 1.025, rotate: 0 }}>
              <Button className="button" type="submit">
                Sign In
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ x: 25 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041" />
                I don't have an account
              </Link>
            </motion.div>
          </form>
        </Form>

        <HeroImg
          src={heroesImg}
          alt="Heroes"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        />
      </Container>
    </>
  );
}
