import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

import api from "../../services/api";

import { Button } from "../../components/UI/Button";

import "./styles.scss";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar caso, tente novamente.");
    }
  }

  return (
    <div className="new-incident-container">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <motion.div
            whileHover={{ scale: 1, x: -15 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar para home
            </Link>
          </motion.div>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button className="button" type="submit">
            Cadastrar
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
