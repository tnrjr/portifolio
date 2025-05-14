import ms from './assets/mock/food.png';
import jarvis from './assets/mock/jarvis.png';
import auth from './assets/mock/authenticacao.png';
import selic from './assets/mock/apiselic.png';
import cgd from './assets/mock/acervoPontos.png';
import filmes from './assets/mock/recomendafilmes.png';





const ProjectsData = [
    {
        "id": 1,
        "img": ms,
        "title": "Microserviço FOOD",
        "description": "Projeto de Arrecadação e Gestão de Pontos de Qualificação para Cursos de Secretários Executivos da Prefeitura do Recife. Tecnologias: Python, Flask, MySQL",
        "tool": "Python · Flask · MySQL ",
        "github": "https://github.com/TN-Junior/CGD-Pontos-Individuais.git",
        "link": "https://cgd-pontos-individuais.onrender.com"
    },
    {
        "id": 2,
        "img": jarvis,
        "title": "Jarvis  - Virtual Assistant",
        "description": "Assistente Virtual inspirado no Filme do Homem de Ferro, desenvolvido em JavaScript",
        "tool": "JavaScript · HTML · CSS · WebAPI ",
        "github": "https://github.com/tn-junior/jarvis-VA.git",
        "link": "https://jarvis-2yushqxzb-tarynascimentos-projects.vercel.app/"
    },
    {
        "id": 3,
        "img": auth,
        "title": "Authentication Spring Boot",
        "description": "Sistema de autenticação feito com Spring Boot, atribui práticas de segurança com jwt entre outras.",
        "tool": "Java · Spring Boot · JWT · MySQL ",
        "github": "https://github.com/TN-Junior/auth-api.git",
        //"link": ""
    },
    {
        "id": 4,
        "img": selic,
        "title": "Api-Taxa-Selic",
        "description": "Desafio Técnico do grupo parvi, api para extrair a taxa da selic desenvolvida com python, django, mysql, docker.",
        "tool": "Python, Django, MySQL, Docker",
        "github": "https://github.com/tn-junior/stock_analysis.git",
        "link": " deploy"
    },
    {
        "id": 5,
        "img": cgd,
        "title": "CGD-Pontos-Individuais",
        "description": "Projeto análise de dados de acões solucões",
        "tool": "Python · Flask" ,
        "github": "https://github.com/tn-junior/stock_analysis.git",
        "link": " https://cgd-pontos-individuais.onrender.com/"
    },
    {
        "id": 6,
        "img": auth,
        "title": "login-app-backend",
        "description": "projeto desenvolvido para praticar métodos de autenticação java para uma interface de login desenvolvida em Angular",
        "tool": "Java · Spring Boot · JWT" ,
        "github": "https://github.com/tnrjr/login-app-backend.git",

    },
    {
        "id": 7,
        "img": filmes,
        "title": "MACHINE LEARNING - SISTEMA DE RECOMENDAÇÃO DE FILMES",
        "description": "Sistemas de recomendação surgem como uma solução para esse problema, ajudando a filtrar informações e fornecer sugestões adaptadas às preferências individuais. Este projeto implementa um Sistema de Recomendação de Filmes utilizando técnicas de Machine Learning, explorando dados históricos de avaliações de usuários.",
        "tool": "Python · Scikit Learn · Pandas · Numpy" ,
        "github": "https://github.com/tnrjr/ML-RECOMENDACAO-FILMES.git",

    }
]

export default ProjectsData;
