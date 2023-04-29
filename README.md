# Project REST-Rant

REST-Rant is an app where users can review restaurants.


## Methods for the controllers

| Method      | Path                     | Purpose                                                        |
| ----------- | ------------------------ | -------------------------------------------------------------- |
|    GET      |             /            |                       Home Page                                |
|    GET      |          /places         |                     Places index page                          |
|    POST     |          /places         |                     Create new place                           |
|    GET      |        /places/new       |            Form page for creating a new place                  |
|    GET      |        /places/:id       |              Details about a particular place                  |
|    PUT      |        /places/:id       |                Update a particular place                       |
|    GET      |     /places/:id/edit     |                     Create new place                           |
|    DELETE   |        /places/:id       |                 Delete a particular place                      |
|    POST     |     /place/:id/rant      |        Create a rant(comment) about a particular place         |
|    DELETE   |  /place/:id/rant/:rantId |        Delete a rant(comment) about a partiuclar place         |
|    GET      |             *            |        404 page (matches any route not defined above           |


