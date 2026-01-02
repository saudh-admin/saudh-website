# --- Step 1: Build the React app ---
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy the rest of your source code
COPY . .

# Build the app for production
RUN npm run build

# --- Step 2: Serve with nginx ---
FROM nginx:stable-alpine

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from builder stage (Vite outputs to dist/)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

