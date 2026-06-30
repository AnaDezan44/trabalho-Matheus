import React, { useState } from 'react'
import foodRecipe from '../assets/salada.png'
import Navbar from '../components/Navbar'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>Caderno de <span>Receitas</span></h1>
                    <h5>Guarde aqui sua coleção de receitas favoritas, organize por categoria e nunca mais perca aquela receita especial.</h5>
                    <button onClick={addRecipe}>Compartilhar receita</button>
                </div>
                <div className='right'>
                    <div className='photo-frame'>
                        <span className='tape'></span>
                        <img src={foodRecipe} alt="Receita em destaque"></img>
                    </div>
                </div>
            </section>

            {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
            <div className='recipe'>
                <RecipeItems />
            </div>
            
        </>
    )
}