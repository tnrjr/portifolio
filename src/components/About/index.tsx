import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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
                    <h4>Desenvolvedor Full Stack com experiência em projetos que integram software, dados e inovação.</h4>
                </Description>

                <p>
                    Profissional com mais de 3 anos de atuação em desenvolvimento de sistemas, com foco em soluções Full Stack, engenharia de dados e aplicações com aprendizado de máquina.
                </p>
                <p>
                    Graduado em Sistemas para Internet pela Universidade Católica de Pernambuco.
                </p>
                <p>
                    Estuda continuamente arquitetura de software, computação em nuvem (AWS) e sistemas distribuídos baseados em eventos.
                </p>
                <p>
                    Comprometido com a entrega de soluções eficientes, escaláveis e alinhadas às necessidades do negócio.
                </p>

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
