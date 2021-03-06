import React from 'react';
import "./App.css"
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Navigation from './components/Navigation'
import Detail from './routes/Detail'

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path='/' exact={true} component={Home} />
            <Route path='/about' component={About} />
            <Route path='/movie-detail' component={Detail} />
        </HashRouter>
    )
}

export default App

// import React from "react"

// class App extends React.Component {
//     state = {
//         isLoading:true, 
//         movies: []
//     }

//     ComponentDidMount() {
//         setTimeout( () =>{
//             this.setState({ isLoading: false})
//         } , 6000)
//     }
//     render() {
//         const { isLoading } = this.state
//         return(
//             <div>
//                 {isLoading ? 'Loading...' : '영화 데이터 출력'}
//             </div>
//         )
//     }
// }

// export default App





// import { render } from "@testing-library/react"
// import {Component} from "react"

// class App extends Component {
//   render() {
//     return (
//       <h1>hello</h1>
//     )
//   }
// }

// export default App


// import React, {Component} from "react"

// class App extends Component {
//   constructor(props){
//     super(props)
//     console.log('constructor')
//   }

//   ComponentDidMount() {
//     console.log('componentDidMount')
//   }

//   ComponentDidupdate() {
//     console.log('componentDidUpdat')
//   }
//   state = {
//     count: 0
//   }

//   add = () => {
//     this.state.count = 1
//   }

//   minus = () => {
//     this.state.count = -1
//   }

//   render() {
//     return (
//       <div>
//       <h1>Rhe number is: {this/this.state.count}</h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   } 
// }

// export default App

// const foodLike = [
//   {
//     id : 2,
//     name: "food",
//     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.everydayhealth.com%2Fdiet-nutrition%2Ftop-10-worst-foods-you-should-give-up%2F&psig=AOvVaw2yWirAkesPu-l2xA2eb2tC&ust=1631770839044000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCMizopyigPMCFQAAAAAdAAAAABAD"
//   }
// ]

// function renderFood(dish) {
//   return (
//     <Food name={dish.name} picture={dish.image}/>
//   )
// }

// const renderFood = dish => <Food name={dish.name} picture={dish.image}/>

// function App() {
//   console.log(foodLike.map(renderFood));
//   return (
//     <div>
//       {
//       foodLike.map(dish =>  (<Food key={dish.id} name={dish.name} picture={dish.image}/>))
//       }
//     </div>
//   )
// } 

// function Food(name, picture) {
//   return(
//     <div>
//    <h1>I like {name}</h1>
//    <img src={picture} alt={name} />
//    </div>
//   )
//     }

// export default App;


// const foodLik = [
//   {
//     name: "food",
//     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.everydayhealth.com%2Fdiet-nutrition%2Ftop-10-worst-foods-you-should-give-up%2F&psig=AOvVaw2yWirAkesPu-l2xA2eb2tC&ust=1631770839044000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCMizopyigPMCFQAAAAAdAAAAABAD"
//   }
// ]
// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Food fav="kimchi"/>
//       <potato bar="you" />
//     </div>
//   );
// } 

// function Food(foo) {
//   const {fav} = foo
//   return <h1>I libke {fav}</h1>
// }

// export default App;


// function App() {
//   return (
//     <div>
//       Hello React
//       <Movie/>
//     </div>
//   );
// } 

// function Movie() {
//   return <h1>I like potato</h1>
//     }

// export default App;


