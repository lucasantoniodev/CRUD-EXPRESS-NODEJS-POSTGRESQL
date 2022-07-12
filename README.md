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
            </ol>
        </div>
        <div>
            <h2>Configurando o TypeORM</h2>
            <ol>
                <li>Criando arquivo de variável de ambiente .env na raíz (https://prnt.sc/DiLtUqgh7Tlo)</li>
                <li>Criar um arquivo para configurar o banco de dados src/database/config/AppDataSource</li>
                <!-- Para rodar o TypeORM dentro da aplicação precisa utilizar a ferramenta CLI -->
                <li>Adicionando Script no package.json: "typeorm": "ts-node-dev  node_modules/typeorm/cli.js"</li>
            </ol>
        </div>
</div>