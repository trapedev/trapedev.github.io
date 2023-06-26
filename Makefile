build:
	cd app \
	&& yarn build \
	&& cd .. \
	&& rm -rf docs/* \
	&& cp app/build/* docs/