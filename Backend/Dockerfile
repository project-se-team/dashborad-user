FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# เปิดพอร์ต 3000
EXPOSE 3000

# กำหนดคำสั่งเริ่มต้น
CMD ["node", "server.js"]