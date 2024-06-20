FROM node:20.10.0-alpine3.19
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /js-time
COPY --chown=app:app package*.json .
RUN npm ci
COPY --chown=app . .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]
