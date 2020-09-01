## Notes

# Useful Commands
- npm install -g @angular/cli : Install Angular CLI (check with ng --version)
- ng new my-app : Create a new Angular Application from a template
- /my-app$ ng serve --open : Run the Angular application and automatically open a browser for it
- /my-app$ ng generate component <cname> : Generate a new component under src/app; import & declare the new component in app.module.ts
- /my-app$ ng generate service <sname> : Generate a new service class under src/app
- /my-app$ ng generate module <mname> : Generate a new module class under src/app
  - Adding '--flat' places the generated module into src/app instead of a separate folder
  - Adding '--module=app' registers the generated module in the imports of AppModule
- /my-app$ npm install angular-in-memory-web-api --save : In-Memory Web API Package; mainly used to simulate communication with a remote data server by intercepting HTTP Requests

# Misc. JS/TS Notes
- JS '+' operator converts a string to a number; useful for converting route parameters from strings to numbers

# Debugging
- In a browser, you can hit F12 or FN+F12 to view the dev tools

# Strict Mode
- Enabled by appending --strict to new ng projects
- Improves maintainability by setting limitations on code, such as no undeclared variables
- Improves optimization by limiting bundle size budgets

# Interpolation Binding
- Syntax: {{<boundproperty>}} (in HTML)
- Presents the component's boundproperty value (defined in the ts file)

# Two-Way Binding
- Syntax <input [(ngModel)]="object.name" placeholder="name"/>
- FormsModule must be imported in the AppModule for this to work
- Data flows in both directions

# Event Binding
- Syntax: (event)="onEvent(item)"
- Angular listens for event (such as click) and executes the named expression (in this case, onEvent(item)) when that event happens
- Expression defined in the component's .ts file

# Class Binding
- Syntax: [class.some-css-class]="some-condition"
- Applies a CSS class conditionally to the HTML element

# Property Binding
- Syntax: <app-some-component [property]="inputProperty"></app-some-component>
- One-way data binding from the inputProperty of this component to the property of some-component

# style.css
- Used for application-wide styles

# Components:
- Always import component from the @angular/core library
- Always exported for use in other modules
- Always have @Component decorator for component metadata
  * selector: component's css selector
  * templateUrl: location of component html
  * styleUrls: location of component css
- ngOnInit: Lifecycle Hook; used to perform complex initializations after constructor
- <app-cname></app-cname> can be added to the app component to display a particular component
- Generally, different features should be housed in different sub-components

# Interfaces:
- export interface IName { <property>: <datatype>; ...}
- Must be imported into component.ts to be used
- oname: IName = { <property>: <value>, ...}; - Init with default values
- oname: IName; - Init without defualt values

# Pipes:
- Activated with the pipe | operator in the component template
- Useful for formatting display data

# Modules:
- Possess an @NgModule decorator for critical metadata
- Must opt-in to any optional modules such as FormsModule via the AppModule class

# Displaying lists
- Iterate through a list in html using *ngFor
- Syntax: <li *ngFor="let item of items">{{item}}</li>
- Where items is an array of item, declared in component.ts

# Structural Directives
- *ngFor="let item of items": displays affected nodes for each item in a given list
- *ngIf="item": displays affected nodes if item is not null

# Input decorator
- Syntax: @Input() property: IName;
- Must import Input from @angular/core in the component.ts that uses this
- Recieves property data through Property Binding

# Services
- Useful to share info between classes that don't know each other
- Generally injected into the constructor of the component that uses it
- Generated services have the @Injectable decorator, marking them as a class that participates in dependency injection
- Services must have a registered provider before participating in DI. The generate command registers a provider with the root injector by default, allowing the service to be injected into any class that asks for it
- Injected service is normally private, but must be made public if it will be bound in a template

# Observables
- 'Observable' and 'of()' are imported from rxjs
- Emits the response from a remote server asynchronously
- .subscribe() waits for the Observable to be emitted and passes the emitted response to the callback (similar to await in C#)

# Navigation
- Generally handled with a top-level Routing module
- Must import RouterModule and Routes from @angular/router for routing functionality
- Routes array tells the Router which component to display based on the path
- When using a routing module, replace <app-component> with <router-outlet>
- routerLink is a directive that turns a user click into a router navigation; used with the <a> element in html
- To have a second path redirect to another existing path, add in routes:
  { path: '<secondpath>', redirectTo: '/<existingpath>', pathMatch: 'full' }
- Adding a colon (:) to a path represents a placeholder for a property
- Inject ActivatedRoute into a component that will be navigated to if you want to extract details from the route to said component (e.g. getting the ID of the hero to be displayed in the HeroDetailComponent)
- Inject Location into a component that will be navigated to if you want to go back to the previous component that was navigated from (e.g. going back to the dashboard or hero list after going to the HeroDetailComponent)

# HttpClient
- Angular's mechanism for communicating with a remote server over HTTP
- To enable, import HttpClientModule into the root module
- HttpClient.get() returns JSON by default. To return an observable, use HttpClient.get<Observable>()
- Http requests/responses should be handled in a service

# InMemoryWebAPI
- Used to simulate communication with a data server by intercepting HTTP requests
- Must install package (see commands), generate an InMemoryData.Service, and import InMemoryDataService and WebAPI into the root module