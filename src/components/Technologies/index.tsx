import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import TechnologiesData from '../../techlogies';
import { ContainerTech, BoxTech, TextTech } from './styles';

interface Props {
    toggleTheme(): void; // Defina a propriedade
}

const Technologies: React.FC<Props> = ({ toggleTheme }) => {
    const { title } = useContext(ThemeContext);

    return (
        <ContainerTech>
            {TechnologiesData.map((item) => {
                const { id, name, icon, iconLight, iconDark } = item;

                const iconSrc = name === "Flask" 
                    ? (title === 'dark' ? iconDark : iconLight) 
                    : icon;

                return (
                    <BoxTech key={id}>
                        <img 
                            src={iconSrc} 
                            alt={name} 
                            style={{ width: '30px', height: '30px', marginRight: '10px' }}
                        />
                        <TextTech>{name}</TextTech>
                    </BoxTech>
                );
            })}
        </ContainerTech>
    );
};

export default Technologies;
