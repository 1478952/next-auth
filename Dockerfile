FROM node:18-alpine AS BUILD_IMAGE

RUN mkdir -p /usr/app
WORKDIR /usr/app

# Install dependencies based on the preferred package manager
COPY ./ ./

RUN npm install 
RUN npm run build


# Production Stage
FROM node:18-alpine AS PRODUCTION_STAGE
WORKDIR /usr/app
COPY --from=BUILD_IMAGE /usr/app/package*.json ./
COPY --from=BUILD_IMAGE /usr/app/.next ./.next
COPY --from=BUILD_IMAGE /usr/app/public ./public
COPY --from=BUILD_IMAGE /usr/app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]