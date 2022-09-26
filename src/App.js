import { useState } from 'react';
import palavras from './palavras'

const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export default function App() {
    const [word, setWord] = useState('')
    let [wordToShow, setWordToShow] = useState('')
    let [clicados, setClicados] = useState([])
    const [erros, setErros] = useState(0)

    function pickWord() {
        setClicados([])
        setErros(0)
        const sort = Math.floor(Math.random() * palavras.length + 1)

        let trace = [];
        for (let i = 0; i < palavras[sort].length; i++) {
            trace.push(' _ ');
        }
        setWordToShow(trace)


        console.log(sort)
        setWord([...palavras[sort]]);

    }
    function trial(char, i) {
        for (let i = 0; i < word.length; i++) {

            if (erros < 6) {

                if (word[i] === char) {
                    wordToShow[i] = char;
                    setWordToShow([...wordToShow])
                    setClicados([...clicados, char])
                    let soma = erros;
                    setErros(soma)

                } else {
                    setClicados([...clicados, char])
                    let soma = erros + 1;
                    setErros(soma)
                }
            } else {
                setClicados([...letras])
            }
        }

    }



    return (
        <>
            <main>
                <img data-identifier="game-image" src={`./assets/forca${erros}.png`} />
                <div className="palavra">
                    <button data-identifier="choose-word" onClick={pickWord}>Escolher Palavra</button>
                    <h1 data-identifier="word">{wordToShow}</h1>
                </div>

            </main>

            <ul className='letras'>
                {letras.map((e, i) => <li data-identifier="letter" onClick={() => trial(e, i)} className={clicados.includes(e) ? "letra clicada" : "letra"}>{e}</li>)}
            </ul>
            <input data-identifier="type-guess"></input>
        </>
    )
}