import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

import api from "../../services/api";
import "./styles.scss";

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
      const res = await api.post("ongs", data);
      alert(`Seu ID de acesso: ${res.data.id}`);

      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente");
    }
  }

  return (
    <div className="register-container">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <motion.div
            whileHover={{ scale: 1, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar para a Home
            </Link>
          </motion.div>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
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
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>

          <Button className="button" type="submit">
            Cadastrar
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
