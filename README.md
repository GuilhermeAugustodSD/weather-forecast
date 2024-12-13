# Documentação do Projeto

Este é um projeto que utiliza **Laravel** como backend e **React** no frontend, integrado através do **Inertia.js**. A aplicação busca informações de clima utilizando a API **WeatherAPI**.

## Requisitos

Antes de rodar a aplicação, você precisa garantir que o ambiente esteja configurado corretamente:

- **PHP** (com a versão necessária do Laravel)
- **Node.js** e **NPM** (para o frontend)

### Variáveis de Ambiente

Adicione a chave da API da **WeatherAPI** ao seu arquivo `.env`:

```
WEATHER_API_KEY=your_weather_api_key
```

**Importante**: Substitua `your_weather_api_key` pela chave que você obteve ao se registrar no [WeatherAPI](https://www.weatherapi.com/).

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <diretorio_do_projeto>
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

5. **Compile o frontend**:

   ```bash
   npm run dev
   ```

6. **Inicie o servidor Laravel**:

   No diretório do backend, execute:

   ```bash
   php artisan serve
   ```

## Rodando os Testes Automatizados

Para rodar os testes automatizados da aplicação, execute o seguinte comando:

```bash
php artisan test --filter=WeatherApiTest
```

Isso irá rodar os testes relacionados à API de clima, verificando se a comunicação com o **WeatherAPI** e os controladores estão funcionando corretamente.

## Dependências

### Dependências principais:

- `react-icons`: Para ícones React.
- `react-loading-skeleton`: Para exibição de skeleton loaders.
- `sass`: Para pré-processamento de CSS com Sass.
- `sweetalert2`: Para exibição de alertas bonitos e customizáveis.

### Dependências de desenvolvimento:

- `@headlessui/react`: Componente de interface sem estilos, utilizado para interações acessíveis.
- `@inertiajs/react`: Integração entre Laravel e React usando Inertia.js.
- `@tailwindcss/forms`: Extensão do Tailwind para estilos de formulários.
- `@vitejs/plugin-react`: Plugin do Vite para React.
- `autoprefixer`: Adiciona prefixos automáticos no CSS.
- `axios`: Cliente HTTP para fazer requisições.
- `concurrently`: Executa múltiplos comandos simultaneamente.
- `laravel-vite-plugin`: Integração do Vite com o Laravel.
- `postcss`: Processador de CSS.
- `react`: Biblioteca para construção da interface do usuário.
- `react-dom`: Para renderizar componentes React no DOM.
- `tailwindcss`: Framework de utilitários para CSS.
- `vite`: Bundler de código de próxima geração.

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

- **`/weather/city/autocomplete/{search}`**: Retorna sugestões de cidades com base no que o usuário está digitando.
- **`/weather/{search}`**: Retorna as informações do clima para a cidade fornecida.

### Conexão Backend/Frontend:

O backend (Laravel) e o frontend (React) são conectados utilizando o **Inertia.js**, permitindo que a aplicação funcione como uma SPA (Single Page Application), mas com controle do backend.

## Considerações Finais

Este projeto é uma base para começar a integrar Laravel e React utilizando Inertia.js, e busca informações do clima de forma eficiente. Embora o projeto tenha limitações e algumas melhorias sejam desejadas (como previsão de 5 dias e filtro de datas), ele oferece uma boa estrutura para expandir conforme a necessidade.

