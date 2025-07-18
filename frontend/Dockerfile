# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and lock file first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy rest of the frontend code
COPY . .

# Build the app for production
RUN npm run build

# Serve with nginx
FROM nginx:alpine

# Copy built files from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]