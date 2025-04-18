import "../errorMessage/errorMessage.css"

export default function ErrorMessage() {
    return (
        <div className="error-message">
            <p>Nenhum perfil foi encontrado com esse nome de usuário</p>
            <span>Tente novamente</span>
        </div>
    )
}