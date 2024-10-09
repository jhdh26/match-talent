import './Home.css'
import './ModalRegister.css'

import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'

import Button from '../../components/Button'
import SkillCard from '../../components/SkillCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from 'react-modal'

import { IoMdPeople } from "react-icons/io";
import { AiFillCodepenSquare } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AiOutlineSolution } from "react-icons/ai";

const Home = () => {

    const navigate = useNavigate()

    const clickLogin = () => {
        navigate('/login')
    }

    const clickPerson = () =>{
        navigate('/registerperson')
    }

    const clickCompany = () =>{
        navigate('/registercompany')
    }

    const [popup, setPopup] = useState(false)

    function openModal() {
        setPopup(true)
    }

    function closeModal() {
        setPopup(false)
    }

    return (
        <div className="home">
            <Header
                onClick1={clickLogin}
                textbtn1='Login'
                onClick2={openModal}
                textbtn2='Se inscreva'
            />
            <Modal
                isOpen={popup}
                onRequestClose={closeModal}
                contentLabel='register'
                className='modal-register'
                overlayClassName='overlay-register'
            >
                <div className="modal-register-content">
                    <h1>Registar</h1>
                    <h2>Selecione o tipo de conta que quer se registrar</h2>
                    <button className='modal-btn-register' onClick={clickPerson}>Conta Pessoal</button>
                    <button className='modal-btn-cancel' onClick={clickCompany}>Conta Juridica</button>
                </div>
            </Modal>
            <div className="main-homepage">
                <div className="first-div">
                    <div className="left-first-div">
                        <h1>
                            <div className='div-section'>
                                <section style={{ color: '#000000' }}>Você</section>
                                <section style={{ color: '#ED4D1B' }}>faz</section>
                            </div>
                            <div className='div-section'>
                                <section style={{ color: '#' }}>a</section>
                                <section style={{ color: '#ED4D1B' }}>diferença</section>
                            </div>
                        </h1>
                        <p>Na Match Talent, acreditamos que cada talento é único e tem o poder de transformar o mercado de trabalho. Reforçamos o compromisso de valorizar as habilidades de cada indivíduo, promovendo inclusão e oportunidades iguais para todos.</p>
                        <Button
                            name='Registrar'
                            onClick={openModal}
                        />
                    </div>
                    <div className="right-first-div">
                        <img src={img1} alt="img1" className='img1' />
                    </div>
                </div>
                <div className="second-div">
                    <div className="skill-cards">
                        <SkillCard
                            style={{ backgroundColor: '#ED4D1B', marginTop: '-100px' }}
                            icon={<IoMdPeople className='skill-card-icon' />}
                            title='Mostre suas skils'
                            text='Mostre suas habilidades para que todas as empresas possam ver!'
                        />
                        <SkillCard
                            style={{ backgroundColor: '#FF9A3C', marginTop: '-80px' }}
                            icon={<AiFillCodepenSquare className='skill-card-icon' />}
                            title='Gerenciamento por IA'
                            text='Contamos com gerenciamento por inteligência artificial, para análise de perfis qualificados conforme especificações!'

                        />
                        <SkillCard
                            style={{ backgroundColor: '#ED4D1B', marginTop: '-100px' }}
                            icon={<AiOutlineAreaChart className='skill-card-icon' />}
                            title='Melhor rendimento'
                            text='Maximize seu potencial! Nosso sistema identifica as melhores vagas para suas habilidades, garantindo oportunidades que impulsionam seu rendimento e crescimento profissional.'
                        />
                        <SkillCard
                            style={{ backgroundColor: '#FF9A3C', marginTop: '-80px' }}
                            icon={<AiOutlineSolution className='skill-card-icon' />}
                            title='Oportunidades sob medida'
                            text='Encontre vagas que se alinham perfeitamente com seu perfil. '
                        />
                    </div>
                    <div className="bottom-second-div">
                        <h1 className='section-second-div'>
                            <section >E</section>
                            <section style={{ color: '#FF9A3C' }}>várias</section>
                            <section>outras!</section>
                        </h1>
                        <Button
                            name='CONHECER MAIS'
                        />
                    </div>
                </div>
                <div className="thirty-div">
                    <div className="left-thirty-div">
                        <img src={img2} alt="img2" className='img2' />
                    </div>
                    <div className="right-thirty-div">
                        <h1 style={{ fontSize: '64px' }}>Sobre</h1>
                        <p style={{ fontSize: '24px', color: '#000000' }}>A Match Talent é uma startup de tecnologia social que utiliza inteligência artificial para promover inclusão no mercado de trabalho. Focada em conectar candidatos vulneráveis a oportunidades de emprego, a Match Talent desenvolve uma plataforma que alinha habilidades e experiências de candidatos com as exigências das vagas, garantindo acessibilidade e eficiência no processo de contratação.</p>
                        <Button
                            name='veja mais'
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home



