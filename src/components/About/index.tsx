import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { 
    ContainerAbout, 
    Image, 
    SubContainerAbout, 
    SubTitle, 
    Description, 
    ContainerButtons, 
    ContactButton, 
    TextButton 
} from './styles';

import photo from '../../assets/photo.jpeg';
import { FiArrowRight } from 'react-icons/fi';

interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout id="sobre">
            <Image src={photo} alt="Tary Junior" />

            <SubContainerAbout>
                <SubTitle>Sobre Mim</SubTitle>

                <Description>
                    <h4>Desenvolvedor de Software Full Stack apaixonado por tecnologia e inovação.</h4>
                </Description>
                <p>&bull; 
                Desenvolvedor de Software com + de 3 anos de experiência, visando seguir carreira em desenvolvimento Full Stack, soluções de Machine Learning e Data Science e Engenharia de Dados, com foco em entregar soluções inovadoras alinhadas aos objetivos de negócio.</p>
                <p>&bull; Formado em Sistemas para Internet na Universidade Católica de Pernambuco.</p>
                <p>&bull; 2 Anos de Experiência</p>
               {/* <p>&bull; <a className="link" href="https://www.efset.org/cert/KjKPY3" target="_blank" rel="noopener noreferrer">C1 Advanced English Level</a></p> */}
                <p>&bull; 
                Estudando soluções em nuvem em AWS e arquitetura orientada a eventos</p>

                <Description>
                    Estou sempre em busca de novos desafios, aprendendo tecnologias inovadoras e buscando formas de melhorar a eficiência e a escalabilidade dos projetos em que atuo.
                </Description>

                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>Contato</TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
};

export default About;
