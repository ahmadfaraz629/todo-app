import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "store/reducers/index";
import rootSagas from "store/sagas/index";
import AddOrEditList from "pages/todo/containers/AddOrEditList";

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];
const store = createStore(rootReducers, applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSagas);
function App() {
  return (
    <Provider store={store}>
      <AddOrEditList />
      {/* <p>{process.env.REACT_APP_API_URL}</p> */}
    </Provider>
  );
}
export default App;
