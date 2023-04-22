# Use official Node.js LTS image as base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Build Next.js app
RUN npm run build --ignore-engines

# Set environment variable for production
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]