include .env

.PHONY: build

build:
	docker-compose build

.PHONY: up

up: 
	docker-compose up -d

.PHONY: down

down: 
	docker-compose down	

.PHONY: logs

logs: 
	docker-compose logs	-f

.PHONY: prune

prune: 
	docker container prune

.PHONY: deploy

deploy:
	make down && make build && make up		

.PHONY: ls

ls:
	docker container ls

.PHONY: stats

stats:
	docker container stats

.PHONY: ssl

ssl: 
	openssl req -x509 -sha256 -newkey rsa:2048 -keyout ${APP_HOST}.key -out ${APP_HOST}.crt -days 1024 -nodes -subj '/CN=${APP_HOST}'

.PHONY: app_bash

app_bash: 
	docker exec -it ${APP_NAME}-app bash

.PHONY: nginx_bash

nginx_bash: 
	docker exec -it ${APP_NAME}-nginx bash	

.PHONY: db_bash

db_bash: 
	docker exec -it ${APP_NAME}-db bash	



