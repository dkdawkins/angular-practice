## Notes

# Useful Commands
- npm install -g @angular/cli : Install Angular CLI (check with ng --version)
- ng new my-app : Create a new Angular Application from a template
- /my-app$ ng serve --open : Run the Angular application and automatically open a browser for it
- /my-app$ ng generate component <cname> : Generate a new component under src/app; import & declare the new component in app.module.ts

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