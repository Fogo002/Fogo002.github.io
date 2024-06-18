import './Constituicao.css'
import Profile from '../../assets/Generic-Profile.jpg'


import { Link } from 'react-router-dom'



const Constituicao = () => {

    const serviceCategories = [{ name: 'Nome 1', description: "Texto da Pessoa 1", img: Profile },
    { name: 'Nome 2', description: "Texto da Pessoa 2", img: Profile },
    { name: 'Nome 3', description: "Texto da Pessoa 3", img: Profile },
    { name: 'Nome 4', description: "Texto da Pessoa 4", img: Profile },
    { name: 'Nome 5', description: "Texto da Pessoa 5", img: Profile },
    { name: 'Nome 6', description: "Texto da Pessoa 6", img: Profile },
    { name: 'Nome 7', description: "Texto da Pessoa 7", img: Profile }]



    return (
        <>
            <div className='Constituicao'>
                <div className='first-row'>

                    <div className='left-column'>

                        <h2>Equipa Todos Somos Especiais</h2>
                        <p>Algum Texto. Foto de grupo - </p>


                    </div>

                    <div className='right-column'>
                        <img src={Profile} alt="" />
                    </div>

                </div>

                <div className='persones'>
                    {
                        serviceCategories.map(({ name, description, img }, index) => {

                            if (index % 2 == 0) {
                                return (

                                    <div className='person'>

                                        <div className='person-image'>
                                            <img src={img} alt="" />
                                        </div>

                                        <div className='person-description'>
                                            <h3>{name}</h3>

                                            <p>{description}</p>



                                        </div>
                                    </div>
                                )
                            } else {
                                return (

                                    <div className='person'>

                                        <div className='person-description'>
                                            <h3>{name}</h3>

                                            <p>{description}</p>




                                        </div>

                                        <div className='person-image'>
                                            <img src={img} alt="" />
                                        </div>

                                    </div>
                                )
                            }
                        })
                    }
                </div>

            </div>
        </>

    )
}
export default Constituicao
