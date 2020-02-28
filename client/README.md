SpoonFed is a place to not only get inspiration for your next party but also plan your party from soup to nuts. SpoonFed brings the party planner to you and me. 

The current version of SpoonFed enables you to browse existing party ideas as well as create new parties. Future features will include product/vendor recommendations and invitation support.


This project was created as a final project for the full-stack web developer course at the [Flatiron School](https://flatironschool.com/). The project utilizes [React](https://github.com/facebookincubator/create-react-app) and [Redux](http://redux.js.org/) on the front end and [Rails and Active Record](http://guides.rubyonrails.org/active_record_basics.html) on the backend (accessed through separte repository). 




## Install

To launch the app:
```
npm install
npm start

```
SpoonFed saves and serves its stored data from an API found in [this repository](https://github.com/ValerieMcCarthy/spoonfed-api). Navigate to this directory in a new CLI window and run the following.
```
bundle install
rake db:create
rake db:migrate
rake db:seed
rails s

```
Both servers need to be running on your local environment for this app to function. Soon we will move to a 3rd party hosting site (Heroku). 



## Team

* [Valerie McCarthy](https://github.com/ValerieMcCarthy)

* [Ashley Robinson](https://github.com/howers)

* [Frankie Ferreira](https://github.com/FrankieMFerreira)


