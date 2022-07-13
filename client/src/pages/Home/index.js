import { useState, useEffect } from 'react'
import './index.css'

function Home() {
    const [pacientes, setPaciente] = useState([])

    useEffect(() => {
        function loadPacientes() {
            let getRoute = 'http://localhost:3500/pacientes'

            fetch(getRoute)
                .then((res) => res.json())
                .then((json) => {
                    setPaciente(json)
                })
        }
        loadPacientes()
    }, [])

    return (
        <div className = "container">
            {
                pacientes.map((p) => {
                    return (
                        <ul key = { p._id }>
                            <li>{ p.nome } - { p.telefone } - { p.idade } - { p.email }</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Home