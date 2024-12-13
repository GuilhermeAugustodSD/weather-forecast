# Documentação do Projeto

Este é um projeto que utiliza **Laravel** como backend e **React** no frontend, integrado através do **Inertia.js**. A aplicação busca informações de clima utilizando a API **WeatherAPI**.

<img src="https://raw.githubusercontent.com/GuilhermeAugustodSD/weather-forecast/refs/heads/main/home.png" alt="Imagem do Projeto" style="width:100%;height:auto;aspect-ratio:16/9;" >


## 💻 Pré-requisitos

Antes de rodar a aplicação, você precisa garantir que o ambiente esteja configurado corretamente:

- **PHP** (^8)
- **Node.js** e **NPM** (para o frontend)

### Variáveis de Ambiente

> [!IMPORTANT]
> Adicione a chave da API da **WeatherAPI** ao seu arquivo `.env`:


```
WEATHER_API_KEY=your_weather_api_key
```

**Importante**: Substitua `your_weather_api_key` pela chave que você obteve ao se registrar no [WeatherAPI](https://www.weatherapi.com/).

## 🚀 Instalando

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/GuilhermeAugustodSD/weather-forecast
   cd weather-forecast
   ```

2. **Instale as dependências do backend (Laravel)**:

   ```bash
   composer install
   ```

3. **Instale as dependências do frontend (React)**:

   No diretório raiz do projeto, onde o `package.json` está localizado, execute:

   ```bash
   npm install
   ```

4. **Configure o ambiente**:

   Renomeie o arquivo `.env.example` para `.env` e configure a variável `WEATHER_API_KEY`.

5. **Rode o frontend**:

   ```bash
   npm run dev
   ```

6. **Inicie o servidor Laravel**:

   No diretório do backend, execute:

   ```bash
   php artisan serve
   ```
  
> [!IMPORTANT]
> Este comando retornará a URL onde está sendo rodado o servidor, o qual é necessário para visualizar o projeto.

## Rodando os Testes Automatizados

Para rodar os testes automatizados da aplicação, execute o seguinte comando:

```bash
php artisan test --filter=WeatherApiTest
```

Isso irá rodar os testes relacionados à API de clima, verificando se a comunicação com o **WeatherAPI** e os controladores estão funcionando corretamente.

## Dependências

### Dependências principais:

- `React`: Front-End do projeto.
- `Laravel`: Back-End do projeto.
- `sass`: Para pré-processamento de CSS com Sass.
- `Inertia`: Integração entre Backend e Frontend.


## Funcionalidades

### Principais funcionalidades da aplicação:

- **Integração entre Backend e Frontend com Inertia.js**: A aplicação utiliza o Inertia.js para conectar o Laravel (backend) com o React (frontend).
- **Busca de Clima**: A aplicação permite a pesquisa de informações de clima de cidades usando a **WeatherAPI**.
- **Autocomplete de Localização**: Ao pesquisar por uma cidade, a aplicação oferece sugestões para completar automaticamente o nome da cidade.
  
### Melhorias que poderiam ser feitas:

- **Previsão de 5 dias**: Adicionar uma funcionalidade que permite ao usuário visualizar a previsão para os próximos 5 dias.
- **Filtro de Data**: Incluir um filtro que permita ao usuário pesquisar por clima de uma data anterior ou futura.

## Como Funciona a Arquitetura

- **Frontend (React)**: Utiliza o Inertia.js para fazer a comunicação com o backend Laravel e renderizar as informações do clima.
- **Backend (Laravel)**: O Laravel é responsável por fazer as requisições para a WeatherAPI e retornar os dados para o frontend.

### Rotas do Backend:

- **`/api/weather/city/autocomplete/{search}`**: Retorna sugestões de cidades com base no que o usuário está digitando.
- **`/api/weather/{search}`**: Retorna as informações do clima para a cidade fornecida.

### Conexão Backend/Frontend:

O backend (Laravel) e o frontend (React) são conectados utilizando o **Inertia.js**, permitindo que a aplicação funcione como uma SPA (Single Page Application), mas com controle do backend.

## Considerações Finais

Este projeto é uma base para começar a integrar Laravel e React utilizando Inertia.js, e busca informações do clima de forma eficiente. Embora o projeto tenha limitações e algumas melhorias sejam desejadas (como previsão de 5 dias e filtro de datas), ele oferece uma boa estrutura para expandir conforme a necessidade.

