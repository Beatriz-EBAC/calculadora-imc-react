import { useState } from 'react'
import './App.css'

function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const calcularIMC = () => {
    if (!peso || !altura || Number(peso) <= 0 || Number(altura) <= 0) {
      return null
    }

    const imc = Number(peso) / (Number(altura) * Number(altura))

    let classificacao = ''

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso'
    } else if (imc < 25) {
      classificacao = 'Peso normal'
    } else if (imc < 30) {
      classificacao = 'Sobrepeso'
    } else if (imc < 35) {
      classificacao = 'Obesidade grau I'
    } else if (imc < 40) {
      classificacao = 'Obesidade grau II'
    } else {
      classificacao = 'Obesidade grau III'
    }

    return { valor: imc.toFixed(2), classificacao }
  }

  const resultado = calcularIMC()

  return (
    <main className="container">
      <section className="calculadora">
        <h1>Calculadora de IMC</h1>
        <p className="subtitulo">Descubra seu Índice de Massa Corporal</p>

        <div className="campo">
          <label htmlFor="peso">Peso (kg)</label>
          <input
            id="peso"
            type="number"
            placeholder="Ex.: 70"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="altura">Altura (metros)</label>
          <input
            id="altura"
            type="number"
            step="0.01"
            placeholder="Ex.: 1.70"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>

        <div className="resultado">
          {resultado ? (
            <>
              <h2>Seu IMC</h2>
              <p className="valor">{resultado.valor}</p>
              <p className="classificacao">{resultado.classificacao}</p>
            </>
          ) : (
            <p>Informe seu peso e sua altura para calcular.</p>
          )}
        </div>

        <h3>Classificação do IMC</h3>
        <ul className="tabela">
          <li>Abaixo de 18,5 — Abaixo do peso</li>
          <li>18,5 a 24,9 — Peso normal</li>
          <li>25 a 29,9 — Sobrepeso</li>
          <li>30 a 34,9 — Obesidade grau I</li>
          <li>35 a 39,9 — Obesidade grau II</li>
          <li>40 ou mais — Obesidade grau III</li>
        </ul>
      </section>

      <footer>Projeto desenvolvido com ReactJS - EBAC</footer>
    </main>
  )
}

export default App