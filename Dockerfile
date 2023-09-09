FROM postgres:14

ENV POSTGRES_USER root
ENV POSTGRES_PASSWORD root
ENV POSTGRES_DB appointment

LABEL author="Danun Junjaroen"
LABEL description="Postgres Image for demo"
LABEL version="1.0"

COPY database.sql /docker-entrypoint-initdb.d/