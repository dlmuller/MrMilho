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
    const [huntsShown, setHuntsShown] = useState('')

    let navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
        setIsAnalyzing(false)
    }
    const handleFetch = (pokeName) => {
        fetchUrl(`/hunts/electric/${pokeName}`, 'GET', '', { setSuccess, setErrMsg, setInfo })
        setIsAnalyzing(true)
    }
    const handleHuntsShown = (show) => {
        if (huntsShown == show) {
            setHuntsShown('')
        } else (
            setHuntsShown(show)
        )
    }


    return (
        <div className='Page'>
            <div className='pageContainer'>
                <div className='analyzerMenu'>

                    <div >
                        <div className={(huntsShown == 'Electric') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Electric')} className={'selector'} style={(huntsShown == 'Electric') ? { color: '#f7d446' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/2/2f/Electric.png" className={(huntsShown == 'Electric') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Electric') ?
                                    <span className={'textActive'}>Electric</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Electric') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/b/b4/26_-_Raichu.gif" onClick={() => handleFetch('Raichu')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/d/dc/181_-_Ampharos.gif" onClick={() => handleFetch('Ampharos')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/f/f6/125_-_Electabuzz.gif" onClick={() => handleFetch('Electabuzz')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Ground') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Ground')} className={'selector'} style={(huntsShown == 'Ground') ? { color: '#b29b5d' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/8/8f/Ground.png" className={(huntsShown == 'Ground') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Ground') ?
                                    <span className={'textActive'}>Ground</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Ground') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/6/6f/232_-_Donphan.gif" onClick={() => handleFetch('Donphan')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/c/cd/28_-_Sandslash.gif" onClick={() => handleFetch('Sandslash')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/2/25/105_-_Marowak.gif" onClick={() => handleFetch('Marowak')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Bug') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Bug')} className={'selector'} style={(huntsShown == 'Bug') ? { color: '#b6c822' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/7/7d/Bug.png" className={(huntsShown == 'Bug') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Bug') ?
                                    <span className={'textActive'}>Bug</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Bug') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/b/bb/123_-_Scyther.gif" onClick={() => handleFetch('Scyther')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/8/86/214_-_Heracross.gif" onClick={() => handleFetch('Heracross')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Leaf') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Leaf')} className={'selector'} style={(huntsShown == 'Leaf') ? { color: '#216219' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/c/c5/Grass.png" className={(huntsShown == 'Leaf') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Leaf') ?
                                    <span className={'textActive'}>Leaf</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Leaf') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/8/8b/154_-_Meganium.gif" onClick={() => handleFetch('Meganium')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/0/0a/3_-_Venusaur.gif" onClick={() => handleFetch('Venusaur')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Rock') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Rock')} className={'selector'} style={(huntsShown == 'Rock') ? { color: '#121212' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/0/0b/Rock.png" className={(huntsShown == 'Rock') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Rock') ?
                                    <span className={'textActive'}>Rock</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Rock') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/6/64/76_-_Golem.gif" onClick={() => handleFetch('Golem')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/e/e9/112_-_Rhydon.gif" onClick={() => handleFetch('Rhydon')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/8/8f/208_-_Steelix.gif" onClick={() => handleFetch('Steelix')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Water') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Water')} className={'selector'} style={(huntsShown == 'Water') ? { color: '#1774d1' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/9/9d/Water.png" className={(huntsShown == 'Water') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Water') ?
                                    <span className={'textActive'}>Water</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Water') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/3/39/9_-_Blastoise.gif" onClick={() => handleFetch('Blastoise')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/c/c5/160_-_Feraligatr.gif" onClick={() => handleFetch('Feraligatr')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/8/82/130_-_Gyarados.gif" onClick={() => handleFetch('Gyarados')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/5/54/226_-_Mantine.gif" onClick={() => handleFetch('Mantine')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Poison') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Poison')} className={'selector'} style={(huntsShown == 'Poison') ? { color: '#881f7f' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/0/03/Poison1.png" className={(huntsShown == 'Poison') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Poison') ?
                                    <span className={'textActive'}>Poison</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Poison') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/8/8f/34_-_Nidoking.gif" onClick={() => handleFetch('Nidoking')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/1/18/31_-_Nidoqueen.gif" onClick={() => handleFetch('Nidoqueen')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Flying') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Flying')} className={'selector'} style={(huntsShown == 'Flying') ? { color: '#c3ebf9' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/7/7f/Flying.png" className={(huntsShown == 'Flying') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Flying') ?
                                    <span className={'textActive'}>Flying</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Flying') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/7/7f/18_-_Pidgeot.gif" onClick={() => handleFetch('Pidgeot')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/e/e2/164_-_Noctowl.gif" onClick={() => handleFetch('Noctowl')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/3/3e/169_-_Crobat.gif" onClick={() => handleFetch('Crobat')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Fire') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Fire')} className={'selector'} style={(huntsShown == 'Fire') ? { color: '#f82416' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/3/30/Fire.png" className={(huntsShown == 'Fire') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Fire') ?
                                    <span className={'textActive'}>Fire</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Fire') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/6/6b/6_-_Charizard.gif" onClick={() => handleFetch('Charizard')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/8/8e/126_-_Magmar.gif" onClick={() => handleFetch('Magmar')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/5/56/157_-_Typhlosion.gif" onClick={() => handleFetch('Typhlosion')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/3/37/59_-_Arcanine.gif" onClick={() => handleFetch('Arcanine')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Ice') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Ice')} className={'selector'} style={(huntsShown == 'Ice') ? { color: '#9dd1cf' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/7/77/Ice.png" className={(huntsShown == 'Ice') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Ice') ?
                                    <span className={'textActive'}>Ice</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Ice') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/1/18/87_-_Dewgong.gif" onClick={() => handleFetch('Dewgong')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/3/30/91_-_Cloyster.gif" onClick={() => handleFetch('Cloyster')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/b/bc/221_-_Piloswine.gif" onClick={() => handleFetch('Piloswine')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Dragon') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Dragon')} className={'selector'} style={(huntsShown == 'Dragon') ? { color: '#bf2f4c' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/c/c7/Dragon.png" className={(huntsShown == 'Dragon') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Dragon') ?
                                    <span className={'textActive'}>Dragon</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Dragon') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/c/c8/149_-_Dragonite.gif" onClick={() => handleFetch('Dragonite')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/0/07/230_-_Kingdra.gif" onClick={() => handleFetch('Kingdra')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Normal') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Normal')} className={'selector'} style={(huntsShown == 'Normal') ? { color: '#623d4e' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/e/e8/Normal1.png" className={(huntsShown == 'Normal') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Normal') ?
                                    <span className={'textActive'}>Normal</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Normal') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/3/3a/241_-_Miltank.gif" onClick={() => handleFetch('Miltank')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Fairy') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Fairy')} className={'selector'} style={(huntsShown == 'Fairy') ? { color: '#f2aacb' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/4/43/Fairy.png" className={(huntsShown == 'Fairy') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Fairy') ?
                                    <span className={'textActive'}>Fairy</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Fairy') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/9/97/210_-_Granbull.gif" onClick={() => handleFetch('Granbull')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Psychic') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Psychic')} className={'selector'} style={(huntsShown == 'Psychic') ? { color: '#e864a8' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/2/21/Psychic.png" className={(huntsShown == 'Psychic') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Psychic') ?
                                    <span className={'textActive'}>Psychic</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Psychic') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/4/46/178_-_Xatu.gif" onClick={() => handleFetch('Xatu')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/b/b4/65_-_Alakazam.gif" onClick={() => handleFetch('Alakazan')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Ghost') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Ghost')} className={'selector'} style={(huntsShown == 'Ghost') ? { color: '#1c1549' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/5/59/Ghost1.png" className={(huntsShown == 'Ghost') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Ghost') ?
                                    <span className={'textActive'}>Ghost</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Ghost') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/0/09/94_-_Gengar.gif" onClick={() => handleFetch('Gengar')} alt="" />
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/7/77/200_-_Misdreavus.gif" onClick={() => handleFetch('Misdreavus')} alt="" />
                            </div>
                            : null}
                    </div>
                    <div >
                        <div className={(huntsShown == 'Fighting') ? 'iconContainerActive' : 'iconContainer'} >
                            <div onClick={() => handleHuntsShown('Fighting')} className={'selector'} style={(huntsShown == 'Fighting') ? { color: '#410a03' } : { color: 'white' }} >
                                <img src="https://wiki.pokexgames.com/images/3/30/Fighting.png" className={(huntsShown == 'Fighting') ? 'pokeImgActive' : 'pokeImg'} alt="" />
                                {(huntsShown == 'Fighting') ?
                                    <span className={'textActive'}>Fighting</span> : null}
                            </div>
                        </div>
                        {(huntsShown == 'Fighting') ?
                            <div className={'displayPokes'}>
                                <img className='PokeImg' src="https://wiki.pokexgames.com/images/8/82/ShinyMachamppxg.gif" onClick={() => handleFetch('Fighting')} alt="" />
                            </div>
                            : null}
                    </div>


                </div>
                <div className='analyzerView'>

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