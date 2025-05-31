// pages/index.js
import Image from "next/image";

export default function Home() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e1e2f, #12121a)",
    color: "white",
    padding: "2rem",
  };

  const paragraphStyle = {
    maxWidth: "600px",
    marginBottom: "1rem",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    textAlign: "justify",
  };

  const iconStyle = {
    width: "24px",
    height: "24px",
    marginRight: "8px",
    verticalAlign: "middle",
  };

  const linkStyle = {
    color: "#ffd700",
    textDecoration: "none",
    margin: "0 0.5rem",
    display: "inline-flex",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      {/* Logo (opcional, se tiver em /public/logo.png) */}
      <Image
        src="/recursos/logoStartJovem.png"
        alt="Logo Start Jovem"
        width={120}
        height={120}
        style={{
          borderRadius: "50%", // arredonda totalmente
          border: "2px solid #fff", // opcional: uma borda branca
        }}
      />

      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        🚧 Start Jovem – Em Construção
      </h1>

      <p style={paragraphStyle}>
        Este projeto está sendo desenvolvido com os conhecimentos adquiridos no
        <strong> curso.dev</strong>, inspirado na estrutura do
        <strong> TabNews</strong>.
      </p>

      <p style={paragraphStyle}>
        O <strong>Start Jovem</strong> será uma comunidade feita por e para
        jovens empreendedores. Um espaço para compartilhar ideias, contar
        histórias, tirar dúvidas e crescer juntos.
      </p>

      <p style={{ ...paragraphStyle, textAlign: "center" }}>
        Estamos preparando tudo com carinho. Volte em breve! 🚀
      </p>

      <footer
        style={{
          marginTop: "2rem",
          fontSize: "0.9rem",
          color: "#ccc",
          textAlign: "center",
        }}
      >
        © 2025 Start Jovem
      </footer>

      {/* Redes sociais com ícones locais */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <p style={{ marginBottom: "0.5rem" }}>Conecte-se comigo:</p>
        <div style={{ fontSize: "1rem" }}>
          <a
            href="https://github.com/sandroccosta "
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <img src="/recursos/github.png" alt="GitHub" style={iconStyle} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexsandro-costa-2008011b1/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <img
              src="/recursos/linkedin.png"
              alt="LinkedIn"
              style={iconStyle}
            />
            LinkedIn
          </a>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
          Repositório do projeto:{" "}
          <a
            href="https://github.com/sandroccosta/clone-tabnews-curso.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#90ee90" }}
          >
            GitHub - clone-tabnews-curso.dev
          </a>
        </p>
      </div>
    </div>
  );
}
