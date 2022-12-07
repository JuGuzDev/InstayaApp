FROM node:14-alpine
ENV NODE_ENV build
WORKDIR /app
COPY . .
CMD ["node","INSTAYAAPP/src/index.js"] 