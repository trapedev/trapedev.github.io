build:
	@cd app \
	&& yarn build \
	&& cd .. \
	&& rm -rf docs/* \
	&& cp -R app/build/* docs/

history:
	@git pull \
	&& git add . \
	&& git commit -m "commit all changes" \
	&& git push origin HEAD
