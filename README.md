# express-seed-api

Simple REST API using Express NodeJS framework and MongoDB with Mongoose.

#LAYERS
__Controllers__ : Expose http endpoints which transform the data received into bussiness classes and/or delegate 
to repositories in order to make a CRUD action.

__Repositories__ : Execute a CRUD action: _save_, _update_, _detele_ or _find_.

__Configurations__ : Expose global objects that the app needs to work. eg: DataBase Connection.

#RUN IT 
Command: `npm start` it will run the http server on the port 5000 by default.

