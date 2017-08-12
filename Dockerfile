FROM overmind024/node-http-server

RUN ["mkdir", "-p", "app"]
WORKDIR app
ADD ["app", "."]

EXPOSE "3000"
HEALTHCHECK --interval=10s \
    CMD curl -f http://localhost:3000/ || exit 1

ENTRYPOINT ["http-server", "-p", "3000", "-d", "false"]