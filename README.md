# 원강희 201840218


## [ 9월 13일 ]
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






<!-- ## [ 9월 13일 ]
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