const ErrorModal = ({title, message, onConfirm}) => {
    return <div>
        <div className="backdrop" onClick={onConfirm}></div>
        <div className="card modal">
            <header className="header">
                <h2>{title}</h2>
            </header>
            <div className="content">
                <p>{message}</p>
            </div>
            <footer className="actions">
                <button onClick={onConfirm} className="btn">Okay</button>
            </footer>
        </div>
    </div>
}

export default ErrorModal