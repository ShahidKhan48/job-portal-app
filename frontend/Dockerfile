# Build the React app
FROM node:18 AS build

WORKDIR /usr/src/app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application files and build
COPY . .
RUN npm run build

# Serve the built app with NGINX
FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

