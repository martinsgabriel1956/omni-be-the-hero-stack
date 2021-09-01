import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Container, Content } from "./styles.js";

import api from "../../services/api";

import { Button } from "../../components/UI/Button";
import { MyModal } from "../../components/UI/Modal";
import { CardContainer } from "../../components/UI/CardContainer";

import logoImg from "../../assets/logo.svg";
import logoImgLight from "../../assets/logo-light.svg";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    setIsOpen(false);

    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      if (!name || !email || !whatsapp || !city || !uf) {
        toast.error("Fill all the fields, please!");
      } else {
        const res = await api.post("/ongs", data);
        setMsg(`${res.data.id}`);
        modalIsOpen();
      }
    } catch (err) {
      toast.error("Error in registration, try again!!");
    }
  }

  function modalIsClose() {
    setIsOpen(false);
  }

  function modalIsOpen() {
    setIsOpen(true);
  }

  function navigationToHome() {
    setName("");
    setEmail("");
    setWhatsapp("");
    setCity("");
    setUf("");
    setTimeout(() => {
      history.push("/");
    }, 1000);
    setIsOpen(false);
  }

  function copyToClipboard() {

  }

  return (
    <>
      <ToastContainer
        style={{
          fontSize: 20,
        }}
      />
      <Container>
        <CardContainer
          changeTheme={props.theme}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <section>
            <img
              src={
                props.theme && localStorage.getItem("theme") === "light"
                  ? logoImg
                  : logoImgLight
              }
              alt="Be The Hero"
            />
            <h1>Registration:</h1>
            <p>
              Make your register, enter in the dashboard and help people to find
              your ONG cases.
            </p>
            <motion.div
              whileHover={{ scale: 1, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#E02041" />
                Back to home
              </Link>
            </motion.div>
          </section>

          <form onSubmit={handleRegister}>
            <input
              placeholder="ONG Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Whatsapp"
              maxLength="11"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
              <input
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                placeholder="UF"
                style={{ width: 80 }}
                value={uf}
                maxLength="2"
                onChange={(e) => setUf(e.target.value)}
              />
            </div>

            <motion.div whileHover={{ scale: 1.025, rotate: 0 }}>
              <Button className="button" type="submit">
                Register
              </Button>
            </motion.div>
          </form>
        </CardContainer>

        <MyModal
          isOpen={isOpen}
          onRequestClose={modalIsClose}
          changeTheme={props.theme}
        >
          <button className="modal-close-btn" onClick={modalIsClose}>
            x
          </button>
          <h1>Your access ID: </h1>
          <h3 className="id">{msg}</h3>
          <button
            className="modal-accept-btn"
            type="button"
            onClick={navigationToHome}
          >
            Accept
          </button>
        </MyModal>
      </Container>
    </>
  );
}
