Setup instructions:

1. Run Docker host by opening Docker desktop app
2. Create an image from the 'dockerfile' inside the repo --> docker build -t 'any name' .
3. Create a container based on the previous image --> 
docker run -p 5000:3000 --name 'any name' 'image name'
4. Make the http request to the ip address printed and the route "/"

NOTE: Before connectig to the database and make the docker image you need to create a database 
on your local system, after that you must provide the name of the new database into the env
variale 'DB_MONGO_URL'