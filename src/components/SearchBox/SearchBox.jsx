import "../SearchBox/SearchBox.css";
import { CiSearch } from "react-icons/ci";

export default function SearchBox({ username, setUsername, onSearch, error }) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch();
        }
    };

    return (
        <div className="search-box">
            <input
                spellCheck="false"
                type="text"
                placeholder="Digite um usuário do GitHub"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                    if (error) error(false);
                }}
                onKeyDown={handleKeyDown}
            />
            <button onClick={onSearch} aria-label="Buscar usuário">
                <CiSearch className="icon-button" />
            </button>
        </div>
    );
}
