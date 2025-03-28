# Utiliza uma imagem oficial do Node.js (versão 16, ajuste conforme necessário)
FROM node:22

# Define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia os arquivos de definição de dependências e instala-as
COPY package*.json ./
RUN npm install

# Copia o restante do código do projeto
COPY . .

# Expõe a porta utilizada pela aplicação (exemplo: 3000)
EXPOSE 3000

# Comando para iniciar a a