import './styles.css'

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} — ERP Nexus. Todos os direitos reservados.
            </p>
        </footer>
    )
}