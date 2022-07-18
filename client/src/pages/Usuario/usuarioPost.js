import { useState } from "react";

const Paciente = () => {
  const [pacienteid, setPacienteId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const plano = { pacienteid };

    fetch('http://localhost:3500/planos', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plano)
    }).then(() => {
      console.log('Novo paciente adicionado');
    })
  }

  return (
    <div className="create">
      <h2>Adicionar um novo plano</h2>
      <form onSubmit={handleSubmit}>
        <label>Paciente Id:</label>
        <input 
          type="text" 
          required 
          value={pacienteid}
          onChange={(e) => setPacienteId(e.target.value)}
        ></input>
        <button>Adicionar um plano</button>
      </form>
    </div>
  );
}
 
export default Paciente;