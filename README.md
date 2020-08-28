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

# Interfaces:
- export interface IName { <property>: <datatype>; ...}
- Must be imported into component.ts to be used
- oname: IName = { <property>: <value>, ...};

# Pipes:
- Activated with the pipe | operator in the component template
- Useful for formatting display data

# Modules:
- Possess an @NgModule decorator for critical metadata
- Must opt-in to any optional modules such as FormsModule via the AppModule class