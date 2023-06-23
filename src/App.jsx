import { CssBaseline,Grid } from '@mui/material'

import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'
import PlaceDetails from './components/PlaceDetails'

import './App.css'

function App() {
  
  return (
    <div className=''>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
