import React from 'react';
import './Contactos.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Box, Typography } from '@mui/material';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contactos = () => {

    return (
        <>
            <div className='Contactos'>
                <div className='header'>
                    <h1>Contactos</h1>
                </div>
                <div className='content'>
                    <div className='infos'>
                        <div className='dados'>
                            <h2>Contactos</h2>
                            <div className='dado'>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 40, // Ajuste o tamanho conforme necessário
                                            height: 40,
                                            borderRadius: '50%',
                                            backgroundColor: 'yellow',
                                            marginRight: 1, // Espaço entre o círculo e o texto
                                        }}
                                    >
                                        <EmailOutlinedIcon />
                                    </Box>
                                    <Typography variant="body1">somotodosespeciais@gmail.com</Typography>
                                </Box>

                            </div>
                            <div className='dado'>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 40, // Ajuste o tamanho conforme necessário
                                            height: 40,
                                            borderRadius: '50%',
                                            backgroundColor: 'yellow',
                                            marginRight: 1, // Espaço entre o círculo e o texto
                                        }}
                                    >
                                        <LocalPhoneOutlinedIcon />
                                    </Box>
                                    <Typography variant="body1">Número de Telemovel</Typography>
                                </Box>
                            </div>

                        </div>
                        <div className='redesSociais'>
                            <h2>Redes Sociais</h2>
                            <a href="https://www.instagram.com/todossomosespeciais23/" target="_blank" rel="noopener noreferrer" >
                                <InstagramIcon style={{ color: '#E1306C', fontSize: 40 }} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100094503303826" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ color: '#1877F2', fontSize: 40 }} />
                            </a>
                            <a href="https://www.youtube.com/@TodosSomosEspeciais" target="_blank" rel="noopener noreferrer">
                                <YouTubeIcon style={{ color: '#FF0000', fontSize: 40 }} />
                            </a>
                        </div>


                    </div>
                    <div className='mail'>
                        Mandar mail: To do
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contactos