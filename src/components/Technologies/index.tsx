import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import TechnologiesData from '../../techlogies';
import { ContainerTech, BoxTech, TextTech } from './styles';

const Technologies: React.FC = () => {
    const { title } = useContext(ThemeContext);

    // Função para renderizar tecnologias por categoria
    const renderCategory = (category: string) => {
        const filteredTech = TechnologiesData.filter((item) => item.category === category);

        return (
            <div key={category} style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#37D892', marginBottom: '1rem', fontSize: '1.5rem' }}>
                    {category}
                </h3>
                <ContainerTech>
                    {filteredTech.map(({ id, name, icon, iconLight, iconDark }) => {
                        // Alterna o ícone do Flask baseado no tema
                        const iconSrc = name === "Flask" 
                            ? (title === "dark" ? iconDark : iconLight)
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
            </div>
        );
    };

    return (
        <>
            {renderCategory("Frontend")}
            {renderCategory("Backend")}
            {renderCategory("Database")}
            {renderCategory("Infraestrutura")}
            {renderCategory("Machine Learning")}
        </>
    );
};

export default Technologies;