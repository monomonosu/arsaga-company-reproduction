FROM node

COPY /front /front

RUN apt update
RUN apt install -y vim
