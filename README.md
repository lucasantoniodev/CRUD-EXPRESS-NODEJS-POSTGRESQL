<div>
    <h1>CRUD com Node.JS & Banco de dados</h2>
        <p>Aplicação Back-end utilizando a biblioteca Express, TypeORM e integrando com o banco de dados Postgres</p>
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
            <ol>
                <ul>"emitDecoratorMetadata": true</ul>
                <ul>"experimentalDecorators": true</ul>
            </ol>
        </div>
</div>