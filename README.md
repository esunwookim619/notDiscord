# README

# notDiscord

notDiscord is a messenging app that uses servers and channels to organize
chatrooms. Users can add friends, join other people's servers, and more!

## Link to live site

https://notdiscord-aa.herokuapp.com/#/

## Technologies used

notDiscord is a 1 page app that uses react-redux to implement its frontend. Its
backend uses Ruby on Rails with PostgreSQL as its database and it is deployed 
on Heroku server.

## Features

* Invitations
  * notDiscord allows users to invite other people to their servers with an 
  invitation url. To implement this, a custom route pointing to a specific 
  controller method had to be made. Within the ServersController, I defined
  a method which would add an entry to a joins table that connected servers with
  their members. Submitting the join server form with an invitation url would 
  push the user to a specific container. Upon mounting said container, an
  AJAX request implementing that method would be fired. Upon completion of the
  request, the user would be pushed back to the container he was on. This was 
  done by storing url information before the requests were fired.

* Online Presence
  * notDiscord allows users to see if their friends or other server users are
  online. This uses Action Cable from Ruby on Rails to create channels. Every 
  time a user logs into notDiscord, they subscribe to the OnlineChannel, which
  in turn changes their online property to true. After they log off, they are
  automatically unsubscribed which changes their online  property to false. The
  online property determines the color of their online indicator circle.



