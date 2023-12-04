DOCKER_IMG := menubuilderimg
DOCKER_CONTAINER := menubilder

DOCKER_RUN := docker run --rm -it -v $(shell pwd):/app -p 3000:3000 --name $(DOCKER_CONTAINER) $(DOCKER_IMG) 

build-img:
	docker build -t $(DOCKER_IMG) . 

watch:
	$(DOCKER_RUN) npm run watch
	
up:
	$(DOCKER_RUN) npm start