
const foodLik = [
  {
    name: "food",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.everydayhealth.com%2Fdiet-nutrition%2Ftop-10-worst-foods-you-should-give-up%2F&psig=AOvVaw2yWirAkesPu-l2xA2eb2tC&ust=1631770839044000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCMizopyigPMCFQAAAAAdAAAAABAD"
  }
]
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi"/>
      <potato bar="you" />
    </div>
  );
} 

function Food(foo) {
  const {fav} = foo
  return <h1>I like {fav}</h1>
    }

export default App;



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


