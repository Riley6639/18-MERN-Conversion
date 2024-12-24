# MERN-CONVERSION

## table of contents
[description](#description)
[technology](#technology)
[development](#development)
[hardships](#hardships)
[contribution](#contribution)

## description
My challenge was to convert an application that uses a RESTful API into a GraphQl application. This involved changing the way the database works. Instead of using routes and controllers to send and receive data it would now need to use queries an mutations. I had to make changes on both the front and back end in order to do this. It also involved installing new npm packages and libraries. 

the link to the deployed application is here :
https://mern-conversion.onrender.com/

## technology
I had to install Apollo server and client. as well as graphql and mongoose. 
Using these technologies allowed me to use the Apollo playground to test the database and get the queries and mutations for teh client to use. 

## development
I started on the server side by creating a schemas folder with typeDefs and resolvers. Typedefs was like a game plan for resolvers. I laid out all the types, queries, and mutations that were necessary. Then in resolvers i added logic to resolve the typeDefs. 

## hardships
I got really stuck when testing the app locally. I eventually figured out my problem was in the vite.config.js file. I needed to change the proxy to /graphql instead of the /api it was using. Doing this seemed to fix it at first however upon testing it later it still appears to be having an issue. The issue is related to the proxy somehow because when the client sends a request it is sending it on the wrong port instead of using the proxy. I'm not sure what happened because I didn't change the vite.config file. 

## contributions
If anyone knows what I did wrong with the /graphql requests please let me know. I've been banging my head against it for a while now but can't seem to solve it. 