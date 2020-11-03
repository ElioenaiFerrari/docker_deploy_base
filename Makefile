include .env

# build image after changes
.PHONY: build

build:
	docker-compose build

# up docker container
.PHONY: up

up: 
	docker-compose up -d

#down docker container
.PHONY: down

down: 
	docker-compose down	

# show logs
.PHONY: logs

logs: 
	docker-compose logs	-f

# delete inactive containers
.PHONY: prune

prune: 
	docker container prune

# down, make ssl (or not), build and up container
.PHONY: dev

dev:
	make down && ./ssl.sh && make build && make up	

#deploy in kubernetes
.PHONY: deploy
	
deploy:		
	kubectl create -f deployment.yml --save-config

# show active containers
.PHONY: ls

ls:
	docker container ls

# show containers stats
.PHONY: stats

stats:
	docker container stats

# build ssl certificate
.PHONY: ssl

ssl: 
	openssl req -x509 -sha256 -newkey rsa:2048 -keyout ${APP_HOST}.key -out ${APP_HOST}.crt -days 1024 -nodes -subj '/CN=${APP_HOST}'

# access bash of app
.PHONY: app_bash

app_bash: 
	docker exec -it ${APP_NAME}-app bash

# access bash of nginx
.PHONY: nginx_bash

nginx_bash: 
	docker exec -it ${APP_NAME}-nginx bash	

# access bash of db
.PHONY: db_bash

db_bash: 
	docker exec -it ${APP_NAME}-db bash	

.PHONY: push_image

push_image:
	docker push ${APP_IMAGE_NAME}




