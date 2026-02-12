FROM node:22-alpine AS build
WORKDIR /Frontend

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /Frontend

RUN npm install -g serve
COPY --from=build /Frontend/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]