# Social Media 


# Project Structure

db - db connection and model definitions
public - html/css/js for static part
routes - express middlewares
controller - function to connect routes to db operations


## Business Logic

### Users

1. **create users**
    this will create a new user with random username

### Posts

1. **create post**
    this will create a new post,required fields are username,title and body

2. **show all posts**
    list all existing posts,we should have filtering support
    -filter by username
    -filter by query contained in a title

3. **edit posts**
    TBD

4. **delete posts**
    TBD

### Comments

1. **show all comments(of a user)**

2. **show all comments(under a post)**

3. **add a comment**
