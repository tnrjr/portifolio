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
                    Sou apaixonado por tecnologia e entusiasta do desenvolvimento web e backend. Atualmente, aplico minhas habilidades como <strong>Data Scientist</strong> na <strong>Prefeitura da Cidade do Recife</strong>, unindo desenvolvimento de software e análise de dados para entregar soluções escaláveis e impactantes.
                </Description>

                <Description>
                    Minha experiência inclui:
                </Description>

                <ul style={{ marginLeft: '1.5rem', lineHeight: '1.8', color: colors.text }}>
                    <li>
                        <strong>Backend:</strong> Python (Flask), Java (Spring, Hibernate), Node.js, Maven e JUnit.
                    </li>
                    <li>
                        <strong>Frontend:</strong> HTML5, CSS3, Bootstrap, Tailwind, JavaScript, TypeScript, React.js e Vite.js.
                    </li>
                    <li>
                        <strong>Banco de Dados:</strong> MySQL, PostgreSQL e Oracle.
                    </li>
                    <li>
                        <strong>Infraestrutura:</strong> Docker e Azure DevOps.
                    </li>
                    <li>
                        <strong>Machine Learning:</strong> Construção de modelos preditivos, pipelines de MLOps e criação de soluções robustas.
                    </li>
                </ul>

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
