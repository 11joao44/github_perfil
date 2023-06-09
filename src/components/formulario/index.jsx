import { useState, useEffect } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)

    useEffect(() => {
        
    })

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        console.log(soma)
        console.log(media)

        if (media >= 7) {
            return (
                <p>Você ficou acima da média</p>
            )
        } else {
            return (
                <p>Você ficou abaixo da média</p>
            )
        }

    }

    return (
        <form>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario