

ARG NODE_VERSION=24.4.0

FROM node:${NODE_VERSION}-alpine



WORKDIR /app

COPY package*.json ./
RUN npm install
# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
CMD npm run dev
