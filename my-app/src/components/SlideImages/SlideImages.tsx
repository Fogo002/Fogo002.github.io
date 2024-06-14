import React, { useState, useEffect, useContext } from "react";
import './SlideImages.css';
import { Slider, Slide, ButtonBack, ButtonNext, Image, CarouselContext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';

interface Slide {
    url: string;
}

interface SlideImagesProps {
    images: Slide[];
    titulo: string;
    descricao: string;
}

const SlideImages: React.FC<SlideImagesProps> = ({ images, titulo, descricao }) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const carouselContext = useContext(CarouselContext);

    useEffect(() => {
        const onChange = () => {
            const { currentSlide } = carouselContext.state;
            setSlideIndex(currentSlide);
        };
        carouselContext.subscribe(onChange);
        return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);

    const renderMedia = (url: string) => {
        const extension = url.split(".").pop()?.toLowerCase();
        if (extension === "jpg" || extension === "jpeg" || extension === "png" || extension === "gif") {
            return <Image src={url} hasMasterSpinner={true} />;
        } else if (extension === "mp4") {
            return (
                <video width="100%" height="100%" controls>
                    <source src={url} type="video/mp4" />
                    O seu navegador não suporta vídeos HTML5.
                </video>
            );
        } else {
            return null; 
        }
    };

    return (
        <div className="SlideImage" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div className="title">
                <Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
                    {titulo}
                </Typography>
            </div>
            <div style={{ position: 'relative', width: '500px', marginTop: "10px" }}>
                <Slider className={"slider"}>
                    {images.map((slide, index) => (
                        <Slide tag="a" index={index} key={index}>
                            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                {renderMedia(slide.url)}
                            </div>
                        </Slide>
                    ))}
                </Slider>
                <ButtonBack style={{ ...arrowButtonStyle, left: 0 }}>
                    <ArrowBackIosIcon />
                </ButtonBack>
                <ButtonNext style={{ ...arrowButtonStyle, right: 0 }}>
                    <ArrowForwardIosIcon />
                </ButtonNext>
            </div>
            <div className="descricao">
                <Typography variant="h6" gutterBottom sx={{ whiteSpace: 'pre-line' }}>
                    {descricao}
                </Typography>
            </div>
        </div>
    );
};

const arrowButtonStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    zIndex: 2,
};

export default SlideImages;
