import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

import api from "../../services/api";

import { Button } from "../../components/UI/Button";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
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
        const res = await api.post("ongs", data);
        alert(`Your access ID: ${res.data.id}`);

        setTimeout(() => {
          history.push("/");
        }, 8000);
      }
    } catch (err) {
      toast.error("Error in registration, try again!!");
    }
  }

  return (
    <>
      <ToastContainer
        style={{
          fontSize: 20,
        }}
      />
      <div className="register-container">
        <motion.div
          className="content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <section>
            <img src={logoImg} alt="Be The Hero" />
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
        </motion.div>
      </div>
    </>
  );
}
