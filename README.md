<div>
    <h1>CRUD com Node.JS & Banco de dados</h2>
        <p>Aplicação Back-end utilizando a biblioteca Express, TypeORM e integrando com o banco de dados Postgres</p>
        <p style="font-size: 10px;">Referência: https://youtu.be/9AO2hZJsHrs</p>
        <div>
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
                <!-- Ferramenta para importar variáveis do arquivo .env -->
                <li>
                    yarn add dotenv
                </li>
            </ul>
        </div>
        <div>
            <!-- TypeORM é um biblioteca para facilitar o mapeamento de objetos e vincular com o banco de dados -->
            <h2>Instalação das dependências do TypeORM</h2>
            <ul>
                <!-- TypeORM -->
                <li>yarn add typeorm</li>
                <!-- Lib que permite o uso de Notations dentro de uma aplicação -->
                <li>yarn add reflect-metadata</li>
                <!-- Driver do postgres -->
                <li>yarn add pg</li>
            </ul>
            <p>É necessário habilitar os decorators nas configurações do typescript</p>
            <p>"emitDecoratorMetadata": true</p>
            <p>"experimentalDecorators": true</p>
        </div>
        <div>
            <h2>Configurando o Docker (postgres)</h2>
            <p>No meu caso estou utilizando o docker para subir o Postgres.</p>
            <p>* Precisa do Docker e Docker-compose instalado</p>
            <ol>
                <!-- Este arquivo tem as configurações necessárias para subir um postgres -->
                <li>Criando o arquivo docker-compose.yml (https://prnt.sc/WipQ5vjeZkY2)</li>
                <li>docker-compose up -d</li>
                <li>Acessando psql pelo docker: docker exec -it NOMEDOCONTAINER psql -U USERNAME</li>
                <li>Criando um DB: CREATE DATABASE NOMEDOSEUBANCODEDADOS</li>
            </ol>
        </div>
        <div>
            <h2>Configurando o TypeORM</h2>
            <ol>
                <li>Criando arquivo de variável de ambiente .env na raíz (https://prnt.sc/DiLtUqgh7Tlo)</li>
                <li>Criar um arquivo para configurar o banco de dados src/database/config/AppDataSource</li>
                <!-- Para rodar o TypeORM dentro da aplicação precisa utilizar a ferramenta CLI -->
                <li>Adicionando Script no package.json: "typeorm": "ts-node-dev node_modules/typeorm/cli.js"</li>
            </ol>
        </div>
        <!-- Criando migrations -->
        <div>
            <h2>Criando e preparando as migrations (Estrutura do banco de dados)</h2>
            <p>Criado arquivo obrigatório para executar o TypeORM Datasource</p>
            <ol>
                <li>Minhas configs: https://prnt.sc/NToJpMzkPXUs</li>
            </ol>
            <!-- yarn typeorm migration:create + directório da pasta onde ficará armazenada as migrations  -->
            <p>Criar migration CreateCategories: yarn typeorm migration:create src/database/migrations/CreateCategories</p>
            <p>Configuração migration CreateCategories: https://prnt.sc/3ArMyW5dNpd2</p>
            <p>Criar migration CreateVideos: <p>Criar migration CreateCategories: yarn typeorm migration:create src/database/migrations/CreateVideos</p></p>
            <p>Configuração da migration CreateVideos: https://prnt.sc/vvBvTNTW_9Vx</p>
            <!-- Execução das migrations -->
            <p>Executando a migration: yarn typeorm migration:run -d src/database/data-source.ts</p>
            <!-- OPCIONAL -->
            <p>Caso queira pode utilizar atalhos no package.json para executar as migrations</p>
            <ol>
                <li>"migration:run": "ts-node-dev node_modules/typeorm/cli.js migration:run -d
                    src/database/data-source.ts,</li>
                <li>"migration:revert": "ts-node-dev node_modules/typeorm/cli.js migration:revert -d
                    src/database/data-source.ts"</li>
            </ol>
            <p>Estrutura: https://prnt.sc/KtQHejju9ig3</p>
        </div>
</div>