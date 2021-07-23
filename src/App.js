import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./store/reducers/index";
import rootSagas from "./store/sagas/rootSagas";
import AddOrEditList from  "./todo/AddOrEditList";
import ListToDo from "./todo/Lists";
import Wrapper from "./todo/components/Wrapper";
const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];
const store = createStore(rootReducers, applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSagas);
function App() {
  return (
    <Provider store={store}>
        <AddOrEditList />
    </Provider>
  );
}

export default App;
