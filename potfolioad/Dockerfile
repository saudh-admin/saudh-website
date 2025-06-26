# --- Step 1: Build the React app ---
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of your source code
COPY . .

# Build the app for production
RUN npm run build

# --- Step 2: Serve with nginx ---
FROM nginx:stable-alpine

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Optional: Custom nginx config for SPA routing (see note below)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
