import ms from './assets/mock/food.png';
import jarvis from './assets/mock/jarvis.png';
import auth from './assets/mock/authenticacao.png';
import selic from './assets/mock/apiselic.png';
import kafkapjct from './assets/mock/kfk.png.png';
import filmes from './assets/mock/recomendafilmes.png';





const ProjectsData = [
    {
        "id": 1,
        "img": ms,
        "title": "Microserviço FOOD",
        "description": "Projeto de microserviços em Java com Spring Boot, incluindo API Gateway, Eureka Server, controle de pedidos e pagamentos, estruturado para escalabilidade e boas práticas.",
        "tool": "Java · Spring Boot (Web, JPA, Cloud) · API Gateway · Eureka Server · Flyway · Maven",
        "github": "https://github.com/tnrjr/microsservices-food.git",
        
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
        "img": kafkapjct,
        "title": "Projeto Kafka",
        "description": "Este sistema é composto por dois projetos desenvolvidos com Spring Boot e integrados ao Apache Kafka",
        "tool": "Java · Kafka · Docker" ,
        "github": "https://github.com/tnrjr/Project-Kafka.git",
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
        "description": "Este projeto implementa um Sistema de Recomendação de Filmes utilizando técnicas de Machine Learning, explorando dados históricos de avaliações de usuários.",
        "tool": "Python · Scikit Learn · Pandas · Numpy" ,
        "github": "https://github.com/tnrjr/ML-RECOMENDACAO-FILMES.git",

    }
]

export default ProjectsData;
