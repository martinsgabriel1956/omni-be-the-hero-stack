import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { Spin as Hamburger } from "hamburger-react";

import "react-toastify/dist/ReactToastify.css";
import { Container } from "./styles.js";

import { MyModal } from "../../components/UI/Modal";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [isOpenHamburger, setOpenHamburger] = useState(false);

  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId,
        },
      })
      .then((res) => {
        setIncidents(res.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    setIsOpen(false);

    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });
      setIncidents(incidents.filter((incident) => incident.id !== id));
      modalIsOpen();
      setMsg(`Incident deleted with success!`);
      modalIsClose();
    } catch (err) {
      toast.error("Erro in delete case, try again!!");
    }
  }

  function modalIsClose() {
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }

  function modalIsOpen() {
    setIsOpen(true);
  }

  function handleLogout() {
    localStorage.clear();
    toast.success(`See you later!!`);

    setTimeout(() => {
      history.push("/");
    }, 6000);
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        closeOnClick
        style={{
          fontSize: 20,
        }}
      />
      <Container>
        <motion.header
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logoImg} alt="Be The Hero" />
          <span>
            Welcome, <strong>{ongName}</strong>{" "}
          </span>

          <Link className="btn" to="/incidents/new">
            Register a new case
          </Link>
          <button
            title="logout"
            id="logoutBtn"
            onClick={handleLogout}
            type="button"
          >
            <FiPower size={18} color="#E02041" />
          </button>
        </motion.header>
        <motion.h1
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Registered Cases:
        </motion.h1>
        <motion.ul
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASE:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIPTION</strong>
              <p>{incident.description}</p>

              <strong>VALUE:</strong>
              <p>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(incident.value)}
              </p>

              <button
                onClick={() => handleDeleteIncident(incident.id)}
                type="button"
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </motion.ul>
        <MyModal isOpen={isOpen} onRequestClose={modalIsClose}>
          <button className="modal-close-btn" onClick={modalIsClose}>
            x
          </button>
          <h1 class="id">{msg}</h1>
        </MyModal>
      </Container>
    </>
  );
}
