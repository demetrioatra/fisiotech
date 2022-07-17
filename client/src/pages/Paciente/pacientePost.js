import { useState } from "react";

const Paciente = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('mario');
  const [origemid, setOrigemId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const paciente = { nome, telefone, idade, email, origemid };

    fetch('http://localhost:3500/pacientes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paciente)
    }).then(() => {
      console.log('Novo paciente adicionado');
    })
  }

  return (
    <div className="create">
      <h2>Adicionar um novo paciente</h2>
      <form onSubmit={handleSubmit}>
        <label>Paciente Nome:</label>
        <input 
          type="text" 
          required 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br/>
        <label>Paciente Telefone:</label>
        <input 
          type="text" 
          required 
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        /><br/>
        <label>Paciente Idade:</label>
        <input 
          type="text" 
          required 
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        /><br/>
        <label>Email:</label>
        <input 
          type="text" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <label>Origem ID:</label>
        <input
          value={origemid}
          onChange={(e) => setOrigemId(e.target.value)}
        ></input><br/>
        <button>Adicionar Paciente</button>
      </form>
    </div>
  );
}
 
export default Paciente;