FROM node:18.13.0-bullseye-slim
WORKDIR /app
COPY package.json .
COPY nest-cli.json .
COPY tsconfig.build.json .
COPY tsconfig.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build
RUN mkdir -p temp
RUN rm -rf src/
RUN rm -rf test/
CMD ["yarn", "start:prod"]
