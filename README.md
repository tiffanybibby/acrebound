# [AcreBound](https://acrebound.netlify.app/)

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**AcreBound** is a property catolouging app for real estate owners. It keeps track of property details for those on a quest to owning multiple acres of land to build generational wealth._


<br>

## MVP

- Utilize Ruby and Ruby on Rails
- Implement an organized and understandable React file structure.
- Working nav on homepage 
- Successfully render data according to component 
- Use Axios to consume data and GET/render that data in components.
- Use Axios to POST/create new data
- Use Axios to either PUT/update & DELETE data
- Use of CSS styling/Styled components/Component library 
- Use flexbox or CSS Grid
- Implement responsive design on 3 screen sizes, using 2 media queries
- Deploy via Netlify

<br>

### Goals

- _Simple inituitive design_
- _User authentication/authorization_
- _Full CRUD on properties_
- _Work on pMVP_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end user interface |
| React Router DOM | Component rendering |
|      Axios       | API calls in React |
|   Ruby on Rails  | Server-side web app framework |
|       jwt        | Implementation of JSON Web Tokens |
|      bcrypt      | Password hashing|

<br>

### Client (Front End)

#### Wireframes

![Wireframe](https://github.com/tiffanybibby/acrebound/blob/main/assets/wireframe.png?raw=true)

#### Component Tree

![Component Tree](https://github.com/tiffanybibby/acrebound/blob/main/assets/component_hierarchy.png?raw=true)

#### Component Architecture

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ Nav.jsx
      |__ Footer.jsx
      |__ PropertyCards.jsx
      |__ UnitCards.jsx
|__ containers/
      |__ PropertiesContainer.jsx
|__ layout/
      |__ Layout.jsx
      |__ Layout.css
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ PropertyCreate.jsx
      |__ Properties.jsx
      |__ PropertyDetails.jsx
      |__ PropertyEdit.jsx
      |__ UnitEdit.jsx
      |__ UnitCreate.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ Properties.js
      |__ Units.js
|__ App.js
|__ App.css
|__ index.js
|__ index.css

```

#### Time Estimates

> 


| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------------: | :---------: |
| Proposal                  |    H     |      10hrs      |     10hrs     |        |
|Backend set up   |    H     |      3hrs       |         |       |
| Test routes and debug                |    H     |      2hrs      |           |         |
| Authorization           |    H     |      4hrs      |         |        |
|Frontend setup          |    H     |      5hrs      |           |        |
| Form creation             |    H     |      4hrs      |          |         |
| Data editing              |    H     |      3hrs      |           |         |
| Data creation             |    H     |      5hrs      |           |         |
| Data deletion             |    H     |      2hrs      |           |         |
| Component Library Styling |    H     |      8hrs      |         |        |
| Organizing code           |    H     |      4hrs      |          |        |
| Polishing Design          |    H     |      3hrs      |           |         |
| Debugging                 |    H     |      5hrs      |          |         |
| Testing                   |    H     |      3hrs      |           |         |
| Total                     |    H     |      57hrs     |    10 hrs   |     |


<br>

### Server (Back End)

#### ERD Model

![ERD Model](https://github.com/tiffanybibby/acrebound/blob/main/assets/erd.png?raw=true)
<br>


***

## Post-MVP

- users can search/filter properties
- property management integrations
- Airbnb-like booking integrations
- chat feature for owners

***

## Code Showcase

> 

## Code Issues & Resolutions

> 