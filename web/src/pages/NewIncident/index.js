import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import api from "../../services/api";

import "react-toastify/dist/ReactToastify.css";
import { Container } from "./styles.js";

import { Button } from "../../components/UI/Button";
import { CardContainer } from "../../components/UI/CardContainer";

import logoImg from "../../assets/logo.svg";
import logoImgLight from "../../assets/logo-light.svg";

export default function NewIncident(props) {
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
      if (!title || !description || !value) {
        toast.error("Fill all the fields, please!!");
        return;
      }

      await api.post("/incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });

      toast.success("You're register a new case successfully!");

      setTimeout(() => {
        history.push("/profile");
      }, 6000);
    } catch (err) {
      alert("Erro ao cadastrar caso, tente novamente.");
    }
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <section>
            <img src={props.theme && localStorage.getItem('theme') === 'light' ? logoImg : logoImgLight} alt="Be The Hero" />
            <h1>Register a new case</h1>
            <p>Describe in details to find a hero when will resolve this!</p>

            <motion.div
              whileHover={{ scale: 1, x: -15 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
                Go back to Dashboard
              </Link>
            </motion.div>
          </section>

          <form onSubmit={handleNewIncident}>
            <input
              placeholder="Case Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              placeholder="Value In Reais"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <motion.div whileHover={{ scale: 1.025, rotate: 0 }}>
              <Button
                onClick={handleNewIncident}
                className="button"
                type="submit"
              >
                Register
              </Button>
            </motion.div>
          </form>
        </CardContainer>
      </Container>
    </>
  );
}
