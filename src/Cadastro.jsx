import { useState } from 'react';
import ListaUsuarios from './Listausuarios';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cadastrado, setCadastrado] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);
    setNome('');
    setEmail('');
    setSenha('');
    setCadastrado(true);
  }

  if (cadastrado) {
    return <ListaUsuarios />;
  }

  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>LogIn</h2>
      <div style={{ backgroundColor: '#069E6E', padding: '20px', borderRadius: '5px' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#000' }}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;