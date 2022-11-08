import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import fetchUrl from '../../functions/fetchUrl';

import '../../styles/pages.css'
import "../../styles/analyzer/analyzer.css"
import Hunt from './hunt';


const Analyzer = () => {
    const [success, setSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState()
    const [info, setInfo] = useState()
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [poke, setPoke] = useState('')
    const [pokeLink, setPokeLink] = useState('')

    let navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
        setIsAnalyzing(false)
    }
    const handleFetch = (pokeName) => {
        fetchUrl(`/hunts/${pokeName}`, 'GET', '', { setSuccess, setErrMsg, setInfo })
        setIsAnalyzing(true)
    }

    return (
        <div className='Page'>
            <div className='pageContainer'>
                <div className='analyzerMenu'>
                    <div>
                        <h3>Electric</h3>

                        <button onClick={() => handleFetch('Raichu')}> Raichu</button>

                        <button onClick={() => handleFetch('Ampharos')}> Ampharos</button>

                        <button onClick={() => handleFetch('Electabuzz')}> Electabuzz</button>

                    </div>

                </div>
                <div className='analyzerView'>
                    Dashboard
                    {(info !== undefined) ?

                        <Hunt info={info} />
                        : null}

                </div>
            </div>
            <button onClick={handleClick}>Return Home</button>
        </div>
    );
}

export default Analyzer;