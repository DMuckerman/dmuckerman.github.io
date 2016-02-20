help:
	@echo "USAGE: make [help|deploy]"

deploy:
	cp CNAME target/
	ghp-import -p target/
