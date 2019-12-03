import React, { useReducer, useEffect, useState } from 'react'
import { BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom';
import Layout from './layout';
import Navigator from './containers/Navigator'
import EditNotePage from './containers/EditNotePage'
import NotesPage from './containers/NotesPage'
import NotePage from './containers/NotePage'
import ErrorPage from './containers/ErrorPage'
import Loading from './components/Loading';


const initialState = {
  notes: [],
  lastId: 0
}
// TODO: Переделать этот ужас, мб перевести на useState
function reducer(state, { type, payload }) {
  switch (type) {
    case 'addNote':
      localStorage.setItem('lastId', state.lastId);
      localStorage.setItem('notes', JSON.stringify([...state.notes, { 
        name: payload.name, 
        text: payload.text, 
        id: state.lastId
      }]));
      return {
        notes: [...state.notes, {
          name: payload.name,
          text: payload.text,
          id: state.lastId
        }], lastId: state.lastId + 1 }
    case 'updateNote':
      const newNotes = [...state.notes.filter((v) => v.id !== payload.id), payload]
      localStorage.setItem('notes', JSON.stringify(newNotes));
      return { notes: newNotes, lastId: state.lastId }
    // case 'setLastId':
    //   return { notes: [...state.notes], lastId: payload.lastId }
    case 'recieve':
      return payload
    default:
      return initialState;
  }
}

const App = () => {
  const [isLoading, setLoadingState] = useState(true)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let notes = JSON.parse(localStorage.getItem('notes'))
    let payload = { notes: notes ? notes : initialState.notes, lastId: Number(localStorage.getItem('lastId')) }
    dispatch({ type: 'recieve', payload })
    setLoadingState(false)
  }, [])

  // TODO: Красивая загрузка по центру!
  if (isLoading) {
    return <Loading/>
  }

  return (
    <Router >
      <Layout>
        <Navigator/>

        <Switch>
          <Route path="/edit/:Noteid">
            <EditNotePage needEdit notes={state.notes} lastId={state.lastId} dispatch={dispatch}/>
          </Route>
          <Route path="/add">
            <EditNotePage dispatch={dispatch}/>
          </Route>
          <Route exact path="/note/:Noteid">
            <NotePage />
          </Route>
          <Route exact path="/notes/:Page">
            <NotesPage root={false} notes={state.notes}/>
          </Route>          
          <Route exact path="/">
            <NotesPage root notes={state.notes}/>
          </Route>
          <Route path="*">
            {/* TODO: Вывод информации */}
            <ErrorPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}




export default App