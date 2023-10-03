# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie os arquivos do projeto para o contêiner
COPY . /app

RUN rm -Rf node_modules/ 2>&1
RUN rm -Rf package-lock.json 2>&1

RUN apt-get update && \
    apt install default-jdk -y

# Instale as dependências
RUN npm install

# Construa a aplicação React
RUN npm run build

# Exponha a porta 80 para o servidor web
EXPOSE 80

# Inicie o servidor web
CMD ["npm", "start"]
