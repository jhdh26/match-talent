import './MatchCompany.css'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

import { useNavigate } from 'react-router-dom'

const MatchCompany = () => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }

    const goProfile = () =>{
        navigate('/profilecompany')
    }
    const nomes = ['João','Pedro','Victor','Vinicius']
    const skills = ['HTML', 'CSS', 'JavaScript', 'PHP']

    return (
        <div className="match">
            <Header
                onClick2={logout}
                textbtn2='Logout'
                text1='Inicio'
                className2='onPage'
                text2='Match'
                text3='Eventos'
                text4='Perfil'
                onClickText4={goProfile}
            />
            <div className="main-match">
                <div className="left-match">
                    <h1>Match de possiveis candidatos</h1>
                    <div className="box-match-left">
                        <h1>Nomes:</h1>
                        {nomes.map(nomes=>(
                            <h1 key={nomes}>{nomes}</h1>
                        ))}
                    </div>
                </div>
                <div className="right-match">
                    <h1>Match Perfeito</h1>
                    <div className="box-match-right">
                        <input className='search-skills-input' type="text" placeholder='Procurar skills' />
                        <h1>Skills selecionadas:</h1>
                        <div className="match-skills">
                            {skills .map(skill => (
                                <h3 key={skill}>{skill}</h3>
                            ))}
                        </div>
                        <h1>Detalhe o tipo de perfil buscado</h1>
                        <textarea
                            className='detail-skill-input'
                            placeholder='Detalhe o tipo de perfil buscado'
                        ></textarea>
                        <Button
                            name='MATCH'
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MatchCompany