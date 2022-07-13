import { useEffect, useState } from "react"
import api from "../../api"


function Plano() {
    const [planos, setPlanos] = useState([])

    useEffect(() => {
        async function loadPlanos() {
            try {
                const res = await api.get('planos')

                console.log('Planos listados com sucesso...', res.data)
                setPlanos(res.data)
            } catch (err) {
                console.log('Falha ao listar planos...', err)
            }
        }

        loadPlanos()
    }, [])

    return (
        <div className="container">
            {
                planos.map((p) => {
                    return (
                        <ul key = { p._id }>
                            <li>
                                { p.pacienteId },
                                { p.ficha[0].atencao },
                                { p.ficha[0].evolucao },
                                { p.ficha[0].pagamento },
                                { p.ficha[0].patologiaId },
                                { p.ficha[0].qtd_sessoes },
                                { p.ficha[0].sessoes[0].compareceu },
                                { p.ficha[0].sessoes[0].data },
                                { p.ficha[0].sessoes[0].fisioterapeuta },
                                { p.ficha[0].sessoes[0].hora },
                                { p.ficha[0].sessoes[0].pago },
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Plano