# Commands Used

docker run -d --name docker-website2 -p 8881:80 -v "/home/ubuntu/Trybe/trybe-exercicios/03-back-end/block-19-docker/day-3-orchestrating-containers-with-docker-compose/docker-website:/usr/local/apache2/htdocs/" httpd:2.4

docker inspect docker-website2

docker stop docker-website2

docker rm docker-website2
