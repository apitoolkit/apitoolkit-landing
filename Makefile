help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

css:
	npx tailwindcss -i static/assets/css/tailwind.css \
		-c tailwind.config.js \
		-o static/assets/css/tailwind.min.css  --watch

css-prod:
	NODE_ENV=production npx tailwindcss -i static/assets/css/tailwind.css \
	-c tailwind.config.js -o static/assets/css/tailwind.prod.min.css --minify
