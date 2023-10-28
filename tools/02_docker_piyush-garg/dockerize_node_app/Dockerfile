FROM ubuntu

WORKDIR /app

RUN apt update
RUN apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt update
RUN apt install nodejs -y

RUN npm i -g pnpm

COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install

COPY . . 

ENTRYPOINT ["pnpm", "start"]
