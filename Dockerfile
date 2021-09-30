FROM node:16-alpine
WORKDIR /app
COPY package*.json ./

ENV PORT=3000
EXPOSE 3000

# install chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
RUN apk add --no-cache udev ttf-freefont chromium

# install korean_font
RUN mkdir /usr/share/fonts/nanumfont
RUN wget http://cdn.naver.com/naver/NanumFont/fontfiles/NanumFont_TTF_ALL.zip
RUN unzip NanumFont_TTF_ALL.zip -d /usr/share/fonts/nanumfont
RUN fc-cache -f -v

RUN npm ci
COPY . .
CMD [ "npm", "start" ]
