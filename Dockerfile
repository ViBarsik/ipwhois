# Используем образ Node.js
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы
COPY . .

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

RUN npm run build

# Команда для запуска приложения
CMD ["npm", "run", "start:prod"]
