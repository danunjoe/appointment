# appointment
For Test

# Build Docker Image
Database => docker build -f Dockerfile.db -t appointment-db .  
App => docker build -f Dockerfile.app -t appointment-app .  

# Run Docker Image
Database => \
docker run -d --name appointment-db -p 5432:5432 appointment-db  

App => \
docker run -d \
-e DB_DATABASE='appointment' \
-e DB_HOST='docker.for.mac.host.internal' \
-e DB_PORT='5432' \
-e DB_USER='root' \
-e DB_PASS='root' \
-p 3201:3200 \
--name appointment-app appointment-app

# Coding
auto generate models from database
=> ./node_modules/.bin/sequelize-auto -h localhost -d appointment -u root -x root -p 5432 -e postgres -o models