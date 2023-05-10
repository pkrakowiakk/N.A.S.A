
# Architecture
While designing application architecture i was mainly focused on:
 - Using abstractions and keeping components as loosely coupled as possible
 - Creating easily switchable components that could be replaced based on device or model


Implemented architecture is experimental as I am still trying to expand my knowledge in this area.
Some solutions might be overengineered or cause performance issues.
Please take everything as my personal opinion, which not always might be correct : )). 

## Folder structure
```
 📂 src                     
 ┣ 📁 assets          | svg icons, custom map styles, splash screen, application icon etc.
 ┣ 📁 components      | general components such as providers, navigation and reusable design components
 ┣ 📁 configuration   | configurations such as props for providers or api key type
 ┣ 📁 constants       | constant values 
 ┣ 📁 hooks           | generally reusable hooks used in the entire scope of application
 ┣ 📁 interfaces      | interfaces used in the scope of entire application
 ┣ 📁 screens         | actual screen designs with screen related states, hooks and styled components
 ┣ 📁 services        | abstracted functionalities
 ┗ 📁 types           | types used in the scope of entire application
```

## Screen folder structure
```
 📂 exampleScreen                     
 ┣ 📂 designs         | designs directory is a place where actual structure and styles of screen are defined
    ┗ 📂 default
       ┣ 📂 components
          ┗ 📂 component
             ┣ 🗒️ index.tsx
             ┗ 🗒️ styled.ts 
       ┣ 🗒️ index.tsx 
       ┗ 🗒️ styled.ts 
 ┣ 📂 features        | in N.A.S.A application as features we understand state used within exampleScreen, name feature does not reveal any implementation details 
    ┣ 🗒️ feature1.ts
    ┗ 🗒️ feature2.ts 
 ┣ 📂 hooks           | custom hooks reusable within example screen used as abstraction layer and separation of concerns 
    ┣ 🗒️ hook1.ts
    ┗ 🗒️ hook2.ts 
 ┣ 📂 tests           | tests directory contains mock folder with mocks for hooks, values and components in the scope of exampleScreen
    ┣ 📂 mocks
       ┗ 🗒️ mock1.ts 
    ┣ 🗒️ test1.tsx
    ┗ 🗒️ test2.tsx 
 ┣ 🗒️ index.tsx        | entry point for a screen
 ┗ 🗒️ interfaces.ts    | interfaces reusable within exampleScreen
```


## Inversion of control
By default React support dependency injection via:
 - props
 - context

Of course it is limited and not really what you expect from DI if you come from OO languages.
Still using props to inject objects, states etc. into components is the best build in functionality for loose coupling.
Unfortunately it can lead to prop drilling and could decrease readability.
The other approach can be using custom hook that would access defined objects or services from context which acts as DI container.
However this approach makes components tightly coupled with actual hooks implementations.
Considering that using multiple hooks could help me to clearly separate concerns and that libraries that strongly focus on DI such as inversify use hooks approach i decided to apply it in N.A.S.A application.


![ioc](https://user-images.githubusercontent.com/100428753/234132169-d63d8db3-5eb2-418a-b565-6bd96e43863a.svg)


Lets start with the section marked within red square. Services are basically abstraction over used libraries such as datefns.
The place where all the services are created is inversion of control container. This is actually the only place that is responsible for creating objects to follow single responsibility rule. Ioc container implements interface that describes all functionalities abstractions needed in the app. Then the specific implementation is assigned to them and can be easily replaced. That is actually the only place where we leak information about implementations. Custom hook useInjection retrieves this services from ioc container into custom hooks or components but it does not have any knowledge about actual implementation.
Blue square in the diagram presents similar thought process as red one but this time for hooks. To better understand this we can analyze an example.
N.A.S.A uses Redux toolkit as a state management. Reusing redux hooks such as useSelector in multiple places would have severe consequences if the decision was made to change state management library. Creating custom hooks that create abstraction over libraries makes it much easier to replace used libraries.
By creating this abstractions we receive sort of layer architecture that would look something like this:
 - dependency -> service -> useInjection -> hooks -> component
 - dependency -> hooks -> component

Thanks to this neither custom hooks or components do have knowledge about the dependencies that are used and operate strictly on abstraction. 
Still that is not the perfect solution but i believe that is as close as we can get with DI in React without using any third party libraries.
There are also other approaches that could work such as:
 - using smart/dumb component design pattern
 - creating hook that returns other hooks based on abstraction and injecting it via props
 - using HOC
 - and probably much more that i did not think of
