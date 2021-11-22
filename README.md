# 원강희 201840218

## [ 11월 16일 ]
### 리엑트 복습과 개념
이번주는 리엑트 개념 암기와 간단한 코드 따라하기로 공부했습니다.<br>
학교PC위주로 코딩하다 github에 업로드한 markdown-editor 폴더의<br> 
React문의 실행을 시도 했으나, 집 PC에서 놓친게 있는지Failed to compile.<br> 
오류가 올라와 문제해결 위주로 찾아봤습니다.<br>
![123](https://user-images.githubusercontent.com/80237099/142908546-051d4dd8-3834-46f4-b151-102e15fb1fed.png)<br>
간단한 리엑트 오류<br>

<br>
>### React의 특징
1. 상호작용이 많은 UI개발에 적합하다.
2. 컴포넌트 로직은 JavaScript로 작성한다.
3. 캡슐화된 컴포넌트로 개발되어 재사용이 용이하다.
4. DOM과는 별개로 상태를 관리할 수 있다.
5. 기술 스택의 나머지 부분에는 관여하지 않는다.
6. 기존 코드와 별개로 개발이 가능하다.
7. React Native를 이용하면 모바일 앱도 만들 수 있다.<br>
<br>
# 따라한 코드
## App.js
// import logo from './logo.svg';<br>
// import './App.css';<br>
import React from '/App';<br>
<br>
class App extends React.Component {<br>
  constructor(props) {<br>
    super(props);<br>
<br>
    this.state = { isOpen: false };<br>
    this.toggleContainer = React.createRef();<br>
<br>
    this.onClickHandler = this.onClickHandler.bind(this);<br>
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);<br>
  }<br>
<br>
  componentDidMount() {<br>
    window.addEventListener('click', this.onClickOutsideHandler);<br>
  }<br>
<br>
  componentWillUnmount() {<br>
    window.removeEventListener('click', this.onClickOutsideHandler);<br>
  }<br>
<br>
  onClickHandler() {<br>
    this.setState(currentState => ({<br>
      isOpen: !currentState.isOpen<br>
    }));<br>
  }<br>
<br>
  onClickOutsideHandler(event) {<br>
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {<br>
      this.setState({ isOpen: false });<br>
    }<br>
  }<br>
<br>
  render() {<br>
    return (<br>
      <.div ref={this.toggleContainer}><br>
        <.button onClick={this.onClickHandler}>Select an option<./button><br>
        {this.state.isOpen && (<br>
          <.ul><br>
            <.li>Option 1<./li><br>
            <.li>Option 2<./li><br>
            <.li>Option 3<./li><br>
          <./ul><br>
        )}<br>
      <./div><br>
    );<br>
  }<br>
}<br>
<br>
export default App;<br>

## test.js
<br>
class MarkdownEditor extends React.Component {<br>
  constructor(props) {<br>
    super(props);<br>
    this.md = new Remarkable();<br>
    this.handleChange = this.handleChange.bind(this);<br>
    this.state = { value: 'Hello, **world**!' };<br>
  }<br>
<br>
  handleChange(e) {<br>
    this.setState({ value: e.target.value });<br>
  }<br>
<br>
  getRawMarkup() {<br>
    return { __html: this.md.render(this.state.value) };<br>
  }<br>
<br>
  render() {<br>
    return (<br>
      <.div className="MarkdownEditor"><br>
        <.h3>Input<./h3><br>
        <.label htmlFor="markdown-content"><br>
          Enter some markdown<br>
        <./label><br>
        <.textarea<br>
          id="markdown-content"<br>
          onChange={this.handleChange}<br>
          defaultValue={this.state.value}<br>
        />
        <.h3>Output<./h3><br>
        <.div<br>
          className="content"<br>
          dangerouslySetInnerHTML={this.getRawMarkup()}<br>
        /><br>
      <./div><br>
    );<.br>
  }<br>
<br>
ReactDOM.render(<br>
  <.MarkdownEditor />,<br>
  document.getElementById('markdown-example')<br>
);<br>
<br>

> test.js : https://ko.reactjs.org/ <br>

<br>

### 집PC에서 일어난 markdown-editor/App.js의 문제는<br>복습을 위해 천천히 찾아보겠습니다.







<!-- # 원강희 201840218

=======
>>>>>>> a03b0f55f2a53ed01b43a4f301478bc5f84eef87
## [ 11월 10일 ]
### 영화앱 업로드
github에 업로드 하기위해 package.json터미널에서<br>
npm i gh-pages 입력후 "gh-pages": "^3.2.3" 추가<br>
그 후 "scripts"탭에서<br>

>"predeploy": "npm run bulid",<br>
"deploy": "gh-pages -d build"<br>

입력후 터미널에서 npm run deploy입력해봤습니다.<br>
Missing err가 올라와서 에러를 문제를 찾는데 다시 집중했습니다.<br>
<br>
그 외 github에 영화앱 업로드 하기 위해서 저번주 있었던 오류를<br>
인터넷을 찾아봐서 고쳐봤습니다. <br>
>import react from 'react';<br>
▽<br>
import React from 'react';<br>
<br>
componentDidMount<br>
▽<br>
componentDidMount<br>

위와 같은 자잘한 오류를 고치거나 수업중에 말씀하신대로<br>
>package-lock.json<br>
node_moudueles<br>

삭제후 npm imstall 그리고<br>

>genres: PropTypes.array(PropTypes.string).isRequired<br>
▽<br>
genres: PropTypes.arrayOf(PropTypes.string).isRequired,<br>

숱한 오류를 고친후<br>
![20211110_154343](https://user-images.githubusercontent.com/80237099/141063496-5e631595-bc65-4ecf-b30f-d63ba3b03bc2.png)<br>
![20211110_154412](https://user-images.githubusercontent.com/80237099/141063556-ec14125a-c6ec-4d37-9686-9d518a85a178.png)<br>
몇주만에 영화앱 진입에 성공했습니다. 감사합니다.

# 따라한 코드 
## package.json<br>

>{<br>
  "name": "movie_app_2020",<br>
  "version": "0.1.0",<br>
  "private": true,<br>
  "dependencies": {<br>
    "@testing-library/jest-dom": "^4.2.4",<br>
    "@testing-library/react": "^9.5.0",<br>
    "@testing-library/user-event": "^7.2.1",<br>
    "axios": "^0.19.2",<br>
    "gh-pages": "^3.2.3",<br>
    "prop-types": "^15.7.2",<br>
    "react": "^16.13.1",<br>
    "react-dom": "^16.13.1",<br>
    "react-router-dom": "^5.3.0",<br>
    "react-scripts": "3.4.1"<br>
  },<br>
  "scripts": {<br>
    "start": "react-scripts start",<br>
    "build": "react-scripts build",<br>
    "predeploy": "npm run bulid",<br>
    "deploy": "gh-pages -d build"<br>
  },<br>
  "eslintConfig": {<br>
    "extends": "react-app"<br>
  },<br>
  "browserslist": {<br>
    "production": [<br>
      ">0.2%",<br>
      "not dead",<br>
      "not op_mini all"<br>
    ],<br>
    "development": [<br>
      "last 1 chrome version",<br>
      "last 1 firefox version",<br>
      "last 1 safari version"<br>
    ]<br>
  },<br>
  "homepage": "https://WKH201840218.github.io/movie_app_2021"<br>







<!-- ## [ 11월 03일 ]
### (영화앱)네비게이션 만들어 보기
이번주는 처음으로 네비게이션을 넣어 보았습니다.<br>
Navigation.js, Navigation.css추가후 실행 해보았으나,<br>
저번주와 마찬기지로 Failed to compile.되어서 해결 방한을 찾아봤으나<br>
실행을 실패했습니다.<br>

>./src/routes/About.js<br>
Module not found: Can't resolve './About.css'<br>
in 'C:\webcon\movie_app_2021\src\routes'<br>

위에 오류가 떠서 About.js나 CSS코드에 문제가 있나 싶어서<br>
코드를 따라 적어봤으나 같은 메세지가 올라와서<br>
package-lock.json,node-modules파일 제거후 <br>
>npm install -S react-router-dom

명령어를 입력해 보았으나, <br>
파일은 찾을 수 없다는 오류가 올라와서 <br>
수업 영상 다시보면서 오류문제를 찾아보려고 합니다.<br>

## 실습
Navigation.js'react-router-dom'코드를 넣어봤으며 { Link }<br>
Navigation.js 안에 HashRouter코드를 추가해 보았습니다.

routes폴더 안에 Detail.js작성후 console에서<br> 
history을 출력 시도를 해보았습니다.

# 따라한 코드 
## Navigation.js<br>

>import React from 'react'<br>
import { Link }  from 'react-router-dom'<br>
import './Navigation.css'<br>
<br>
function Navigation() {<br>
    return(<br>
        <.div><br>
        <.Link to='/'>Home<./Link><br>
        <.Link to='/about'>About<./Link><br>
        <./div><br>
    )<br>
}<br>
<br>
export default Navigation


## Detail.js<br>

>import react from "react";<br>
<br>
class Detail extends react.Component{<br>
    ComponentDidMount() {<br>
        const { location, history } =this.props<br>
        if ( location.state === undefined ) {<br>
            history.push('/')<br>
        }<br>
    }<br>
    render() {<br>
        const { location } = this.props<br>
        if (location.state) {<br>
          return(<br>
               <.span>{location.state.title}<./span><br>
               )<br>
        } else {<br>
          return null<br>
        }<br>
      }<br>
    }<br>
<br>
export default Detail;<br>






 -->




<!-- # 원강희 201840218
 ## [ 10월 27일 ]







 <!-- ## [ 10월 27일 ]
 
 교수님 모든 주 MD파일은 차 주 MD파일 작성시 주석처리 해놓아서<br>
 코드 하단에 날짜 별로 작성되어있습니다. 늦게 말씀드려서 죄송합니다.<br>
 9월 15일, 9월 29일 작성은 둘다 과거 둘다 13일로 되어있어서 <br>
 각각 날짜에 맞게 변경했습니다.<br>

 이번주는 영화앱에 Home.css와 Movie.css를 추가해보았습니다.<br>
 코드에 각각 CSS를 수업때 보여주셨던github.EasysIT에서 CSS를 복사해가지고<br>
 CSS자체에는 문제가 없었지만, App.js컴플리트를 실패해서 적용된 걸 확인하는데<br>
 어려움이 있었습니다.<br>
 ![fail](https://user-images.githubusercontent.com/80237099/139593085-718ece2a-e815-44d8-9cf6-8f882fda090e.png)<br>
 수업시간에 했던 코드가 실행안되나 싶었지만, 초기 코드도 실행이 안되기에<br>
 10월 30일 토요일까지는 css적용된 걸 확인못했습니다. 다음주 수업전까지 천천히<br>
 원인을 찾아볼까 합니다.<br>

 # 따라한 코드 
## App.js<br>
 import "./App.css"<br>
 import { HashRouter, Route } from 'react-router-dom'<br>
 import About from './routes/About'<br>
 import Home from './routes/Home'<br>
<br>
 function App() {<br>
    return (<br>
        <.HashRouter><br>
            <.Route path='/' exact={true} component={Home}><br>
            <.h1>Home<./h1><br>
            <./Route><br>
            <.Route path='/about' component={About}><br>
            <.h1>About<./h1><br>
            <./Route><br>
        <./HashRouter><br>
    )<br>
}<br>
<br>
export default App<br>

## Movie.js
import PropTypes from 'prop-types'<br>
import "./Movie.css"<br>
<br>
function Movie({title, year, summary, poster, genres}) {<br>
    return (<br>
        <.div className='movie'><br>
        <.img src={poster} alt={title} title={title} /><br>
        <.div className='movie-data'><br>
            <.h3 className='movie-title'>{title}<./h3><br>
            <.h5 className='movie-year'>{year}<./h5><br>
            <.ul className='movie-genres'><br>
                {<br>
                    genres.map((genre, index) =>{<br>
                        return(<br>
                            <.li key={index} className='movie-genre'>{genre}<./li><br>
                        )<br>
                    })<br>
                }<br>
            <./ul><br>
            <.p className='movie-summary'>{summary.slice(0, 180)}<./p><br>
        <./div><br>
        <./div><br>
    )<br>
}<br>
<br>
Movie.PropTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array(PropTypes.string).isRequired
}
<br>
export default Movie<br>

## About.js
import './About.css'<br>
function About() {<br>
    return (<br>
        <.span className='about__container'><br>
            <.h1>Hello About!<./h1><br>
        <./span><br>
    )<br>
}<br>
<<<<<<< HEAD

 -->


 
 
 
 
 <!-- ## [ 10월 13일 ]

 오늘은 영화앱에 Movie.js까지 추가해 보았습니다.<br>

컴플리트 실패했다는 오류가 있어서 영상보고 다시 따해보았으며,<br>
js에 class를 넣는게 html코딩 하는 느낌이 있어서 친숙한 느낌이 있었습니다.<br>

![js1](https://user-images.githubusercontent.com/80237099/138008248-a0106abf-8609-4ef9-ae2d-461b1d06a9cd.png)<br>
className부분 이해하기 위해 다시 영상보며 시간을 들였으며,<br>
![js2](https://user-images.githubusercontent.com/80237099/138008252-095ef76e-c83c-4de0-a69d-865c78f4fa89.png)<br>
App.js또한 영상자료와 같이 수정했습니다.

npm start후 저의 코딩실력 부족으로 오류 코드가 자주떠서 여러 시험을 해볼 수 있었습니다.<br>

# 따라한 코드 
## App.js
<br>

import React from "react"<br>
import axios from "axios"<br>
import Movie from "./Movie"<br>
import "./App.css"<br>

class App extends React.Component {<br>
    state = {<br>
        isLoading:true, <br>
        movies: []<br>
    }

    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        }
        // const movies
         = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
         console.log(movies);
         this.setState({movies, isLoading: false});
    }

    ComponentDidMount() {
        this.getMovies()
    }
    render() {
        const { isLoading, movies } = this.state
        return(
            <section className='container'>
                {isLoading ? (
                    <div className='loader'>
                        <span className='loader-text'>Loading...</span>
                    </div>
                ) : (
                    <div className='movies'>
                        {
                            movies.map((movie) => {
                                console.log(movie);
                                return (
                                <Movie
                                key = {movie.id}
                                id = {movie.id}
                                year = {movie.year}
                                title = {movie.title}
                                summary = {movie.summary}
                                poster = {movie.medium_cover_image}
                                genres = {movie.genres}
                                 />
                                ) }) }
                    </div>
                )
                }
            </section>
        )
    }
}

export default App<br>
<br>


## Movie.js
<br>

import PropTypes from 'prop-types'<br>
import "./Movie.css"<br>
<br>
function Movie({title, year, summary, poster, genres}) {<br>
    return (<br>
        <.div className='movie'><br>
        <.img src={poster} alt={title} title={title} /><br>
        <.div className='movie-data'><br>
            <.h3 className='movie-title'>{title}<./h3><br>
            <.h3 className='movie-year'>{year}<./h3><br>
            <.p className='movie-summary'>{summary}<./p><br>
        <./div><br>
        <./div><br>
    )<br>
}<br>
<br>
Movie.PropTypes = {<br>
    id: PropTypes.number.isRequired,<br>
    year: PropTypes.string.isRequired,<br>
    title: PropTypes.string.isRequired,<br>
    summary: PropTypes.string.isRequired,<br>
    poster: PropTypes.string.isRequired,<br>
    genres: PropTypes.array(PropTypes.string).isRequired<br>
}<br>
<br>
export default Movie -->




<!-- ## [ 10월 6일 ]
교수님 저번주 날짜를 착각해서 9월 13일로 잘못올렸습니다.<br>
날짜 수정했습니다. 죄송합니다.<br>

axios install확인 해보았고 큰 문제는 없었습니다.<br>
![10091](https://user-images.githubusercontent.com/80237099/136626188-f05456b7-b6c7-4169-b97f-9bb8ed6f76c2.png)<br>
![10092](https://user-images.githubusercontent.com/80237099/136626192-74915254-ed5e-4eb6-bb68-da3043d7e080.png)<br>

인스톨 과정과 결과를 확인해보았고<br>
json파일에 있는 것을 확인후 영화 코드를 따라 적었습니다.<br>
React 코드나 axios 코드에 문제가 없는 것을 확인했는데 Failed to compile.<br>
오류가 지속적으로 나타나 무엇이 문제인가 찾아봤더니 ComponentDidMount의 앞에<br>
대문자가 소문자로 잘못적어서 작은 고생을 했지만, 코드 완성후 결과까지 도출했습니다.<br>
![10093](https://user-images.githubusercontent.com/80237099/136626193-148e564d-e423-43df-ad0e-26d58d2341ca.png)<br>

# 따라한 코드 
## App.js
<br>
import React from "react"
import axios from "axios"

class App extends React.Component {
    state = {
        isLoading:true, 
        movies: []
    }

    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        }
        // const movies
         = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        console.log(movies);
    }

    ComponentDidMount() {
        this.getMovies()
    }
    render() {
        const { isLoading } = this.state
        return(
            <div>
                {isLoading ? 'Loading...' : '영화 데이터 출력'}
            </div>
        )
    }
}
export default App -->





<!-- ## [ 9월 29일 ]
4주차 수업에 대해서 복습해봤습니다.<br>
이번 복습은 npm add와 Minus에 대해 복습해봤습니다.<br>
npm 부분에 숙련도가 부족해서 약간의 오류가 있긴 했지만 조금씩 보완해가는 중입니다.<br>

![1001자료](https://user-images.githubusercontent.com/80237099/135497471-b6c8672c-c762-4486-b5ea-c1fc94f09620.png)<br>
npm 복습 코드이며 코드나 npm에 문제가 있나 싶어서 수업에 쓰던<br>
![10013](https://user-images.githubusercontent.com/80237099/135502236-b77e07ee-c699-496a-82f3-e70b37bcb98c.png)<br>
hello코딩으로 간단히 체크 해보았고 npm쪽에는 문제는 없었습니다.<br>

### 타이밍 도중 TypeError가 뜨는일이있어서 코딩 연습을 해야겠다는 생각이 들었습니다.<br>
### 지속적으로 오류를 고쳐나가며 복습하겠습니다. 

# 따라한 코드 
## App.js
import React, {Component} from "react"<br>
<br>
class App extends Component {<br>
  constructor(props){<br>
    super(props)<br>
    console.log('constructor')<br>
  }<br>
<br>
  ComponentDidMount() {<br>
    console.log('componentDidMount')<br>
  }<br>
<br>
  ComponentDidupdate() {<br>
    console.log('componentDidUpdat')<br>
  }<br>
  state = {<br>
    count: 0<br>
  }<br>
<br>
  add = () => {<br>
    this.state.count = 1<br>
  }<br>
<br>
  minus = () => {<br>
    this.state.count = -1<br>
  }<br>
<br>
  render() {<br>
    return (<br>
      <.div><br>
      <.h1>Rhe number is: {this/this.state.count}<./h1><br>
      <.button onClick={this.add}>Add<./button><br>
      <.button onClick={this.minus}>Minus</.button><br>
      <./div><br>
    )<br>
  } <br>
}<br>
<br>
export default App<br>

### MD파일을 작성할때 코딩을 넣으면 인식해버려서 앞에 . 표시를 넣었습니다. --> 






<!-- ## [ 9월 15일 ]
3주차 수업은 리엑트 기초개념에 대해 공부해봤습니다.<br>
기본적으로 교수님 수업 코드를 따라적어서 비슷한 키워드로 정했습니다..<br>
![3주차 2](https://user-images.githubusercontent.com/80237099/133769788-400be050-1dcd-4dd6-9ca9-8cb5781576f7.png)<br>
![3주자 3](https://user-images.githubusercontent.com/80237099/133769980-e8d3f42b-0754-4291-aa50-387f407676a4.png)<br>
간단한 코드를 따라 결과를 도출해봤습니다.<br>
약간의 오류는 있었지만 npm쪽 경험이 부족해서 일어난 문제였고 현재는 해결했습니다.<br>
# 따라한 코드 
## App.js

>const foodLik = [<br>
  {<br>
    name: "food",<br>
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.everydayhealth.com%2Fdiet-nutrition%2Ftop-10-worst-foods-you-should-give-up%2F&psig=AOvVaw2yWirAkesPu-l2xA2eb2tC&ust=1631770839044000&source=images&cd=vfe&ved=0CAkQjhxqFwoTCMizopyigPMCFQAAAAAdAAAAABAD"<br>
  }<br>
]<br>
function App() {<br>
  return (<br>
    <.div><br>
      <.h1>Hello<./h1><br>
      <.Food fav="kimchi"/><br>
      <.potato bar="you" /><br>
    <./div><br>
  );<br>
} <br>
function Food(foo) {<br>
  const {fav} = foo<br>
  return <.h1>I libke {fav}<./h1><br>
    }<br>
export default App;<br>

## index.js

>import ReactDOM from 'react-dom';<br>
import App from './App';<br>
<br>
ReactDOM.render(<.App />, document.getElementById('root'))<br>

### MD파일을 작성할때 코딩을 넣으면 인식해버려서 앞에 . 표시를 넣었습니다. -->





<!-- ## [ 9월 08일 ] 
2주차 수업은 약간 생소한 내용도 있어서 간단히 프로그램 따라해보고 복습하는 식으로 진행했습니다.<br>
![123456](https://user-images.githubusercontent.com/80237099/132681792-058cbca0-3d45-44bb-bf4e-3b12d0b16402.png)<br>
실행결과도 따라해보고<br>
![1234(2)](https://user-images.githubusercontent.com/80237099/132681498-1914137d-5001-4b20-93df-fbc4cfe73d4c.png)<br>
생소한 결과도 받아봤습니다.

파일을 다운받는데 약간의 트러블은 있었지만 이번 학기에는 시간내에 파일 받는데에 성공하고 수업을 따라 갈 수 있어서 많이 볼 수 있었습니다.<br>
<br>

# 따라한 코드
## App.js
>function App() {<br>
  return (
    <div >
      Hello React
    </div >
  );
} <br>
export default App;

## index.js
>import ReactDOM from 'react-dom';<br>
import App from './App';<br>
ReactDOM.render(<
App />, document.getElementById('root'))
<br>
<br>

[ 9월 01일 ]
1주차에는 개발환경과 복습 간단한 복습위주로 진행했습니다.<br>
크게 공부라 할건 없지만 <br>
![123](https://user-images.githubusercontent.com/80237099/132678447-5c18d3ce-b9ac-4fbf-a3ad-0db2988ff031.png)<br>
과거에 했던 
js2021-5파일 이미지 자료들을 잠시보고 VS코드 연습만 짧게 했습니다.

github 모든 파일을 푸쉬하는게 좋은건지 몰라서 일단 코드만 복사해서 md파일에 푸쉬하겠습니다. -->

<!-- ## [ #월 ##일 ] -->
<!-- 학습내용 -->