import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';

import photo from '../../assets/photo.jpeg';

import { FiArrowRight } from "react-icons/fi";
interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout id="sobre">
            <Image src={photo} alt="Tary Junior" />

            <SubContainerAbout>
                <SubTitle>
                    Sobre mim
                </SubTitle>

                <Description>
                    Sou um engenheiro de software com experiência em diversas áreas da tecnologia, com um foco particular em Machine Learning e desenvolvimento de software. Aqui estão algumas das minhas áreas de especialização e projetos notáveis:
                </Description>
                <Description>
                    Principais Especialidades:
                </Description>
                <Description>
                Machine Learning: Tenho trabalhado em projetos de aprendizado de máquina que envolvem desde a construção de modelos preditivos até a implementação de pipelines de MLOps. Meu foco está em criar soluções escaláveis e eficientes.
                Desenvolvimento de Software: Possuo ampla experiência em desenvolvimento de software, com projetos que abrangem desde aplicativos web até sistemas de backend robustos. Utilizo principalmente linguagens como Python, JavaScript, Java e frameworks como React, Vlue e SpringBoot</Description>
                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;
