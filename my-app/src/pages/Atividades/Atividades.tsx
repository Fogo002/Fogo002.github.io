import React, { useState } from "react";
import SlideImage from '../../components/SlideImages/SlideImages'
import './Atividades.css'
import { CarouselProvider } from "pure-react-carousel";


const Atividades = () => {

    const images = [
        { url: require('../../assets/limpeza-1.jpg') },
        { url: require('../../assets/limpeza-2.jpg') },
        { url: require('../../assets/limpeza-3.jpg') },
        { url: require('../../assets/limpeza-4.jpg') },
        { url: require('../../assets/limpeza-5.jpg') }
    ];

    const images2 = [
        { url: require('../../assets/gatos-1.mp4') },
        { url: require('../../assets/gatos-3.mp4') },
        { url: require('../../assets/gatos-4.mp4') },
        { url: require('../../assets/gatos-5.mp4') },
        { url: require('../../assets/gatos-6.jpeg') },
        { url: require('../../assets/gatos-7.jpeg') },
        { url: require('../../assets/gatos-8.jpeg') },
        { url: require('../../assets/gatos-9.jpeg') },
        { url: require('../../assets/gatos-10.jpeg') },
        { url: require('../../assets/gatos-11.jpeg') },
        { url: require('../../assets/gatos-12.jpeg') },
        { url: require('../../assets/gatos-13.jpeg') },
        { url: require('../../assets/gatos-14.jpeg') },
        { url: require('../../assets/gatos-15.jpeg') },
        { url: require('../../assets/gatos-16.jpeg') } // Ajustado para 'gatos-16.jpg' para completar o total de 15 imagens
    ];


    const images3 = Array.from({ length: 23 }, (_, index) => ({
        url: require(`../../assets/revista-${index + 1}.jpg`)
    }));

    const descricaoLimpeza = `
 A equipa do "Todos Somos Especiais" participou na VII edição da Ação de Limpeza de Esposende.

Durante a atividade, lamentamos a grande quantidade de lixo encontrada na praia, mas ficamos felizes por existirem iniciativas como esta.

Relembramos a importância de preservar o meio ambiente, evitando deitar lixo no chão.

Convidamos todos a observar a quantidade de lixo nas bermas das estradas e outros locais que frequentemente passam despercebidos, e a participar em ações de limpeza como esta. Junte-se a nós para fazer a diferença! 💚`

    const descricaoGatil = `
O grupo Todos Somos Especiais tivemos o prazer de visitar um gatil e ajudar animais de rua. Foi um dia maravilhoso, repleto de alegria, amor e dedicação. Agradecemos imensamente pelo acolhimento caloroso e pelos momentos de carinho compartilhados com os gatinhos.

A proprietária do gatil expressou a sua gratidão:

"A primeira deslocação e o primeiro acto de amor pelos animais e de generosidade, deste grupo de jovens de Bsrcelos,Todos Somos Especiais. Maravilhosos jovens, de Barcelos, que criaram a associação Todos somos especiais, para ajudar animais e pessoas. Amor aos gatos, alegria e boa disposição, não faltaram. Adoramos a vossa visita.Muito gratos pelos miminhos aos gatos e cães e pelo vosso objectivo.

Bem hajam.
Voltem sempre.
Beijinho a todos e continuem assim pela vida fora.
Respeitar e Amar, os animais de rua."

"As pessoas que são loucas o suficiente para acharem que podem mudar o mundo são as que, de facto, o mudam." – Steve Jobs

Obrigada @caudas_e_bigodes ❤️

Participa conosco e ajuda a fazer a diferença na vida dos animais!
    `;

    const descricaoRevista = `
A equipa do Todos Somos Especiais agradece a todos que visitaram a exposição da nossa revista "Perspetivas sobre a Inclusão em Contexto Escolar", que fez parte da 8ª edição da Semana Incluir + na Biblioteca Lúcio Craveiro da Silva, em Braga. A exposição esteve aberta ao público de 29 de novembro a 10 de dezembro e foi um enorme sucesso.

Durante a semana, os visitantes tiveram a oportunidade de explorar diversas exposições, incluindo "Os NÓS e as Emoções" dinamizada pelo CACI de Gualtar da APPACDM de Braga, "Ciclo de Oficinas PINTURA EXPERIMENTAL" por Adriana Henriques, "AUTISTIC OR ARTISTIC?" por Pedro Oliveira (CAVI Braga Pais em Rede), "Bonecas de afeto" por Kinarte Atelier - Joaquina Santos, e a Mostra de Trabalhos Manuais por Jorge Dias.

Estamos imensamente gratos pela oportunidade proporcionada pela Biblioteca Lúcio Craveiro da Silva e pela participação de todos. Continuem a apoiar iniciativas de inclusão e a fazer a diferença. Juntos incluímos! 🧩

Teremos o maior gosto em contar com a vossa presença nas próximas edições! Muitas felicidades para todos! 🤗
`;


    return (
        <>
            <div className='Atividades'>
                <div className='header'>
                    <h1>Atividades</h1>
                </div>
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={images.length}
                    naturalSlideWidth={500}
                    naturalSlideHeight={500}
                    interval={3000}
                    infinite={true}

                >
                    <SlideImage images={images} titulo={"Juntos Pela Limpeza de Esposende"} descricao={descricaoLimpeza} />
                </CarouselProvider>
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={images2.length}
                    naturalSlideWidth={500}
                    naturalSlideHeight={500}
                    interval={3000}
                    infinite={true}>
                    <SlideImage images={images2} titulo={"Visita ao Gatil: Amor e Cuidado com os Animais"} descricao={descricaoGatil} />
                </CarouselProvider>

                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={images3.length}
                    naturalSlideWidth={500}
                    naturalSlideHeight={500}
                    interval={3000}
                    infinite={true}>
                    <SlideImage images={images3} titulo={"Encerramento da Semana Incluir + 2023 na Biblioteca Lúcio Craveiro da Silva"} descricao={descricaoRevista} />
                </CarouselProvider>
            </div>
        </>
    )
}

export default Atividades;