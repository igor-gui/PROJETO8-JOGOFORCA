import { useState } from 'react';
import palavras from './palavras'

const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z']

export default function App() {
    const [word, setWord] = useState('')
    let [wordToShow, setWordToShow] = useState('')
    let [trialClass , setTrialClass] = useState("letra")

    function pickWord() {
        const sort = Math.floor(Math.random() * palavras.length + 1)

        let trace = [];
        for (let i = 0; i < palavras[sort].length; i++) {
            trace.push(' _ ');
        }
        setWordToShow(trace)


        console.log(sort)
        setWord([...palavras[sort]]);

    }
    function trial(char){
        for(let i = 0; i < word.length; i++){
            setTrialClass("letra clicada")
            if(word[i] === char){
                wordToShow[i] = char;
            } 
        }
    }




    return (
        <>
            <main>
                <img src='./assets/forca0.png' />
                <div className="palavra">
                    <button onClick={pickWord}>Escolher Palavra</button>
                    <h1>{wordToShow}</h1>
                </div>

            </main>

            <ul className='letras'>
                {letras.map((e) => <li onClick={(e) => trial(e)} className={trialClass}>{e}</li>)}
            </ul>
        </>
    )
}