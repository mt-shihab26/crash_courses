FROM php:8-fpm

RUN apt-get update -y && apt-get install -y libcurl4-openssl-dev libonig-dev
RUN docker-php-ext-install pdo pdo_mysql curl mbstring

WORKDIR /var/www/html

EXPOSE 9000
