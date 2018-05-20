import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import MyCalc from "./container";
import { Provider, connect } from "react-redux";
import { myCalculator } from "./reducer";
import { createStore, bindActionCreators } from "redux";
import { digit, operator, calculate } from './actions';


const store = createStore(myCalculator,{
  num1    : 0,
  num2    : 0,
  oper    : ""
});


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  height: "700px",
  width: "500px",
  left: "20px",
  top: "20px",
  background: "lightgray",
  padding: "10px",
};

const styles1 = {
  fontFamily: "sans-serif",
  textAlign: "left",
  height: 35,
  width: 120,
  background: "lightgreen",
  border: "1px solid darkred",
  float: "left",
};

const opers = {
  fontFamily: "sans-serif",
  textAlign: "left",
  height: 35,
  width: 60,
  background: "lightgreen",
  border: "1px solid darkred",
  float: "left"
};

const txt = {
  fontFamily: "sans-serif",
  textAlign: "left",
  height: 35,
  //width: 60,
  background: "lightgreen",
  border: "1px solid darkred",
  float: "left"
};

const styles2 = {
  overflow: "hidden"
};

const btns = {
  display: "inline",
  float: "left",
  height: 35,
  width: 27
}

const empt = {
  height: 35,
  width: 35,
  display: "inline",
  float: "left"
}

const oper = {
  height: 35,
  width: 40,
  display: "inline",
  float: "left"
}

const row_of_btns = {
  display: "block",
  height: 40,
  minwidth: "100%"
}

const styles3 = {
  fontFamily: "sans-serif",
  textAlign: "left",
  height: 35,
  width: 100,
  background: "lightyellow",
  border: "1px solid darkred",
  float: "left"
};

const style_of_point = {
  height: 35,
  width: 54,
  display: "inline",
  float: "left"
  
}

store.subscribe(() => {
  console.log(store.getState());
})

const AppComponent = (props) => (
  
  <div id="calc" style={styles}>
    <div style={styles2}>
      <div id='num1' style={styles1}>0</div><div id='op' style={opers} id='op'></div><div id='num2' style={styles1}>0</div><div style={txt}>=</div><div style={styles3} />
    </div>
    <div style={row_of_btns}>
      <button style={btns} onClick={ () => props.digit(1) } id="1">1</button><button style={btns} id="2">2</button><button style={btns} id="3">3</button><div style={empt}></div><button style={oper} id="plus">+</button>
    </div>
    <div style={row_of_btns}>
      <button style={btns} id="4">4</button><button style={btns} id="5">5</button><button style={btns} id="6">6</button><div style={empt}></div><button style={oper} id="minus">-</button>
    </div>
    <div style={row_of_btns}>
      <button style={btns} id="7">7</button><button style={btns} id="8">8</button><button style={btns} id="9">9</button><div style={empt}></div><button style={oper} id="divide">/</button>
    </div>
    <div style={row_of_btns}>
      <button style={style_of_point} id="point">.</button><button style={btns} id="0">0</button><div style={empt}></div><button style={oper} id="multiply">*</button>
    </div>
  </div>
);

function mapStateToProps(state) {
  console.log(state);
  return {
    num1      : state.num1,
    num2      : state.num2,
    oper      : state.oper,
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      digit     : digit,
      operator  : operator,
      calculate : calculate,
    },dispatch)
}

const App = connect(
  mapStateToProps, //ф-ция, добавляет новую информация в props
  mapDispatchToProps,
)(AppComponent);
//render(<App />, document.getElementById("root"));

ReactDOM.render(
  <Provider store={ store }>
    <div>
      <MyCalc/>
      <App/>
    </div>
  </Provider>,
  document.getElementById('root'),
);