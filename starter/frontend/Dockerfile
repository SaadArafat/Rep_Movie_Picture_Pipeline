# Build Stage
FROM node:18.14.2-alpine3.17 AS build

ARG REACT_APP_MOVIE_API_URL
ENV REACT_APP_MOVIE_API_URL=${REACT_APP_MOVIE_API_URL}

WORKDIR /app

# Copy dependency files
COPY package*.json ./
RUN npm ci

# Copy full source and build it
COPY . .
RUN npm run build

# Production Stage - Serve with NGINX
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
