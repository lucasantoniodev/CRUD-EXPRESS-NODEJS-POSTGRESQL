    <h1>CRUD com Node.JS & Banco de dados</h1>
        <p>Aplicação Back-end utilizando a biblioteca Express e integrando com o banco de dados Postgres</p>

        <h2>Instalando dependências inicias</h2>
        <ul>
            <li>
                <!-- package.json -->
                yarn init -y
            </li>
            <li>
                <!-- Adicionando o typescript como dependência de desenvolvimento -->
                yarn add -D typescript
            </li>
            <li>
                <!-- Arquivo de configuração do typescript -->
                yarn tsc --init
            </li>
            <li>
                <!-- Express -->
                yarn add express
            </li>
            <li>
                <!-- Tipagens do Express -->
                yarn add -D @types/express
            </li>
            <li>
                <!-- Ferramenta para facilitar no desenvolvimento, une 3 em 1, tsc(converte o código ts -> js) + node(executa o código) + nodemon(Observa mudanças) -->
                yarn add -D ts-node-dev
            </li>
        </ul>

