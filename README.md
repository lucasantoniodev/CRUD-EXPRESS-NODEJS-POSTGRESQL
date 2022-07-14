<div>
    <h1>CRUD com Node.JS & Banco de dados</h2>
        <p>Aplicação Back-end utilizando a biblioteca Express, TypeORM e integrando com o banco de dados Postgres</p>
        <p style="font-size: 10px;">Referência rocketseat: https://youtu.be/9AO2hZJsHrs</p>
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
                <li>Criar inicializador do banco de dados https://prnt.sc/uJwYXyWxuBSa e depois importar no inedx</li>
                <!-- Para rodar o TypeORM dentro da aplicação precisa utilizar a ferramenta CLI -->
                <li>Adicionando Script no package.json: "typeorm": "ts-node-dev node_modules/typeorm/cli.js"</li>
            </ol>
        </div>
        <!-- Criando migrations -->
        <div>
            <h2>Criando e preparando as migrations (Estrutura do banco de dados)</h2>
            <p>Criando arquivo obrigatório para executar o TypeORM Datasource</p>
            <ol>
                <li>Minhas configs: https://prnt.sc/NToJpMzkPXUs</li>
            </ol>
            <!-- yarn typeorm migration:create + directório da pasta onde ficará armazenada as migrations  -->
            <p>Criar migration CreateCategories: yarn typeorm migration:create src/database/migrations/CreateCategories
            </p>
            <p>Configuração migration CreateCategories: https://prnt.sc/3ArMyW5dNpd2</p>
            <p>Criar migration CreateVideos:
            <p>Criar migration CreateCategories: yarn typeorm migration:create src/database/migrations/CreateVideos</p>
            </p>
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
        <!-- Criando entidades para atribuir valores no banco de dados -->
        <div>
            <h2>Criando entidades para criar valores no banco de dados</h2>
            <p>Instalando dependência do uuint (Não obrigatório, apenas para criar um uuint aleatório caso necessário)
            </p>
            <ol>
                <li>yarn add uuint</li>
                <li>yarn add -D @types/uuint</li>
            </ol>
            <p>Criando entidade Category: https://prnt.sc/xhn7jWQn7QOE</p>
            <p>Criando entidade Video: https://prnt.sc/9Owvk7BWxtZv</p>
            <p>Criando novas variáveis de ambiente: https://prnt.sc/3L1Ac3CtzZLr</p>
            <p>Atribuindo o caminho das entidades no DATASOURCE: https://prnt.sc/l2LVIo6vYfv7</p>
        </div>
        <!-- Criando camada de Serviços -->
        <div>
            <h2>Camada de serviços da aplicação</h2>
            <!-- Camada de Categoria -->
            <p>CreateCategoryService: https://prnt.sc/lWTCEyDpz-Q4</p>
            <p>GetAllCategoriesService: https://prnt.sc/-1KyXwyxcTuL</p>
            <p>UpdateCategoryService: https://prnt.sc/yOUzkcodumHx</p>
            <p>DeleteCategoryService: https://prnt.sc/NIZfh3T5y9ks</p>
            <!-- Camada de Vídeos -->
            <p>CreateVideoService: https://prnt.sc/0JNx8h9XAS9D</p>
            <p>GetAllVideosService: https://prnt.sc/NBx6ka13dy0p</p>
            <p>UpdateVideoService: https://prnt.sc/TTndF0wSLvHx</p>
            <p>DeleteVideoService: https://prnt.sc/QsyeAKNqppCy</p>
        </div>
        <!-- Criando camada de Controllers -->
        <div>
            <h2>Camada de controllers</h2>
            <!-- Camada de Categoria -->
            <p>CategoryController: https://prnt.sc/D9_XB4pOF2QT</p>
            <p>GetAllCategoriesController: https://prnt.sc/Ux9GugZZ7x79</p>
            <p>DeleteCategoryController: https://prnt.sc/SG_RY8miMFA4</p>
            <p>UpdateCategoryController: https://prnt.sc/e3X9yKOO-RN_</p>
            <!-- Camada de Vídeos -->
            <p>CreateVideoController: https://prnt.sc/QpDVFgLexidZ</p>
            <p>GetAllVideosController: https://prnt.sc/TjHuvk0qgjGR</p>
            <p>UpdateVideoController: https://prnt.sc/KmvcDRUxp6DJ</p>
            <p>DeleteVideoController: https://prnt.sc/_CldiyAgQCaI</p>
        </div>
        <!-- Criando camada de Rotas -->
        <div>
            <h2>Rotas da aplicação</h2>
            <!-- Camada de Categoria -->
            <p>Rota (Post) "/categories": https://prnt.sc/eNp68Cuu3NRZ</p>
            <p>Rota (GET) "/categories": https://prnt.sc/NvWQrDvqEgsK</p>
            <p>Rota (DELETE) "/category/:id": https://prnt.sc/go8LMpd3V2Ia</p>
            <p>Rota (PUT) "/category/:id": https://prnt.sc/GcbTv5tMua4y</p>
            <!-- Camada de Vídeos -->
            <p>Rota (POST) "/videos": https://prnt.sc/sM7OU4DjOq4N</p>
            <p>Rota (GET) "/videos": https://prnt.sc/FxVLIdvCLJGN</p>
            <p>Rota (UPDATE) "/video/:id": https://prnt.sc/_4H0mqM2zrxR</p>
            <p>Rota (DELETE) "/video/:id": https://prnt.sc/GMhJa1Dg97oU</p>
            <p>Habilitando rota no arquivo principal "server.ts": https://prnt.sc/FT3WldAOoEfn</p>
        </div>
</div>