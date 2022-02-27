
import './App.css';
// import Inputbox from './Inputbox';
// import Toggle from './Toggle'
// import Forms from './Forms'
// import ConditionalRender from './ConditionalRender'
// import Props from './Props'
// import MapFunction from './MapFunction';
// import NestedList from './NestedList';
// import User from './User';
// import Parent from './Parent'
// import PureComponent from './Purity';
// import PropsPurity from './PropsPurity'
// import UseMemo from './FunctionalPurity';
// import Ref from './Ref';
// import FunctionalRef from './RefFunctionalComponent';
// import RefParent from './RefParent';
// import ControlledComponent from './ControlledComponent';
// import UncontrolledComponent from './UncontrolledComponent';
import { useSelector, useDispatch } from "react-redux"
import { actionCreators } from './state/index'
import { bindActionCreators } from "redux";

function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const {depositMoney,withdrawMoney}= bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
   
      {/*
        <Inputbox/>
        <Toggle />
         <Forms/>
         <ConditionalRender/>
         <Props/>
         <MapFunction/>
         <NestedList/>
         <User/>
         <Parent/>
         <PureComponent/>
         <PropsPurity/>
         <UseMemo/>
         <Ref/>
         <FunctionalRef/>
         <RefParent/>
         <ControlledComponent/>
         <UncontrolledComponent/>
         <h1>{account}</h1>
         <button onClick={()=>depositMoney(1000)}>deposit</button>
       <button onClick={() => withdrawMoney(1000)}>withdraw</button>
        */}


    </div>
  );
}

export default App;
