build:
	cd app \
	&& yarn build \
	&& cd .. \
	&& rm -rf docs/* \
	&& cp -R app/build/* docs/