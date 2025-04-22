import { useState } from "react";
import "./App.css";
import { FaGithub } from "react-icons/fa";
import Profile from "./components/Profile/Profile";
import ErrorMessage from "./components/errorMessage/errorMessage";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // <-- Novo estado
  const [animateProfile, setAnimateProfile] = useState(false);

  const triggerAnimation = (setter, duration = 500) => {
    setter(true);
    setTimeout(() => setter(false), duration);
  };

  const handleSearch = async () => {
    if (!username.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(response.status === 404
          ? "Usuário não encontrado!"
          : "Erro ao buscar usuário.");
      }

      const data = await response.json();
      setUserData(data);
      setError(false);
      triggerAnimation(setAnimateProfile);
    } catch {
      setUserData(null);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="svg-icon">
        <img src="/BuscarPerfil-github/assets/Camada_1.svg" alt="camada " />
      </div>
      <div className="background-glow glow-left"></div>
      <div className="background-glow glow-right"></div>

      <div className="container">
        <div className="top">
          <FaGithub className="logo" />
          <h1 className="title">
            PerfiI
          </h1>
          <img src="/BuscarPerfil-github/assets/GitHub.png" alt="GitHub logo" />


        </div>

        <SearchBox
          username={username}
          setUsername={setUsername}
          onSearch={handleSearch}
        />

        {loading && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}

        {!loading && <Profile userData={userData} animate={animateProfile} />}
        {error && <ErrorMessage />}
      </div>
    </>
  );
}
