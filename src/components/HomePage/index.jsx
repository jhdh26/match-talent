import './HomePage.css'
import img1 from '../../assets/img1.png'
import Button from '../Button'
import SkillCard from '../SkillCard'
import { IoMdPeople } from "react-icons/io";

const HomePage = () => {
    return (
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
                    <p>Na Mach Talent, acreditamos que cada talento é único e tem o poder de transformar o mercado de trabalho. Reforçamos o compromisso de valorizar as habilidades de cada indivíduo, promovendo inclusão e oportunidades iguais para todos.</p>
                    <Button
                        name='Registrar'
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
                        icon={<IoMdPeople className='skill-card-icon' />}
                        title='Gerenciamento por IA'
                        text='Contamos com gerenciamento por inteligência artificial, para análise de perfis qualificados conforme especificações!'

                    />
                    <SkillCard
                        style={{ backgroundColor: '#ED4D1B', marginTop: '-100px' }}
                        icon={<IoMdPeople className='skill-card-icon' />}
                        title='Melhor rendimento'
                        text='Maximize seu potencial! Nosso sistema identifica as melhores vagas para suas habilidades, garantindo oportunidades que impulsionam seu rendimento e crescimento profissional.'
                    />
                    <SkillCard
                        style={{ backgroundColor: '#FF9A3C', marginTop: '-80px' }}
                        icon={<IoMdPeople className='skill-card-icon' />}
                        title='Oportunidades sob medida'
                        text='Encontre vagas que se alinham perfeitamente com seu perfil. '
                    />
                </div>
                <div className="bottom-second-div">
                    <h1 className='section-second-div'>
                        <section >E</section>
                        <section style={{color:'#FF9A3C'}}>várias</section>
                        <section>outras!</section>
                    </h1>
                    <Button
                    name='CONHECER MAIS'
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage



