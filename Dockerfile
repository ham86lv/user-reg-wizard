# Stage 1: Build
FROM node:20-alpine AS builder

ARG NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps && npm cache clean --force

COPY . .

RUN npm run build

# Stage 2: Build
FROM nginx:alpine AS production

ARG NODE_ENV=production

COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
