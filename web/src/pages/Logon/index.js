import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";

import { Button } from "../../components/UI/Button";

import "./styles.scss";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
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
      alert("Falha no login, tente novamente");
    }
  }

  return (
    <>
      <div className="logon-container">
        <motion.section
          className="form"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
        >
          <img src={logoImg} alt="Be The Hero" />
          <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>

            <input
              placeholder="Sua ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            <motion.div whileHover={{ scale: 1.05, rotate: 0 }}>
              <Button className="button" type="submit">
                Entrar
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041" />
                Não Tenho Cadastro
              </Link>
            </motion.div>
          </form>
        </motion.section>

        <motion.img
          src={heroesImg}
          alt="Heroes"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        />
      </div>
    </>
  );
}
