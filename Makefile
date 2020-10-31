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

.PHONY: push

push:
	 python3 git.py
