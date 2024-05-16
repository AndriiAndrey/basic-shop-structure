## Description

For this project I chose [Nest.js](https://docs.nestjs.com) framework,
because it provides great level of abstractions to follow common architecture patterns,
which helps a lot to create highly testable, scalable, loosely coupled, and easily maintainable applications.
Nest provide very powerful CLI as well which helps to generate boilerplate code to make development faster.


## Structure
All our entities divided in its own folder under /src directory using modular structure.
Each entity folder it's a module which contain all related code in separate files/folders following single responsibility principle:
- controllers to handle routes
- module to register and configure module dependencies. We could have nested modules like in case of payments and shippings
- service to handle business logic which can be used only in a single module or reusable across multiple modules
- entities and dto files to handle models and io data structure
- specs to cover our code with tests

We are using abstract services for payment processors and shipping providers to be able to operate with single interface
instead of every possible instance. Later we can use factory pattern to get the right instance of payment processors or shipping providers,
but in that places where we're going to use it we can expect and operate with single interface.