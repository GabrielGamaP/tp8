import { useState, useEffect } from 'react';

function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [grupoAtual, setGrupoAtual] = useState(0);

  async function buscarUsuarios() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsuarios(data);
  }

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const gruposDeUsuarios = chunk(usuarios, 4);

  function proximoGrupo() {
    setGrupoAtual(grupoAtual + 1);
  }

  function grupoAnterior() {
    setGrupoAtual(grupoAtual - 1);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "-10%" }}>
      <h2 style={{ marginBotton: '20px 0', color: "#fff" }}>Usuários Cadastrados</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '750px' }}>
        {gruposDeUsuarios[grupoAtual] && gruposDeUsuarios[grupoAtual].map((usuario) => (
          <div key={usuario.id} style={{ backgroundColor: '#069E6E', color: '#fff', width: '240px', height: '240px', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
            <h3>{usuario.name}</h3>
            <p>{usuario.email}</p>
          </div>
        ))}
      </div>
      {gruposDeUsuarios.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <button onClick={grupoAnterior} disabled={grupoAtual === 0}>
            Anterior
          </button>
          <button onClick={proximoGrupo} disabled={grupoAtual === gruposDeUsuarios.length - 1}>
            Próximo
          </button>
        </div>
      )}
    </div>
  );
}

export default ListaUsuarios;
