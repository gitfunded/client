/* eslint-disable prettier/prettier */

import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Main } from '@aragon/ui'

import theme from './theme-court'

import MainView from './components/MainView'
import ErrorPage from './ErrorPage'

import Dashboard from './components/Dashboard/Dashboard'
/* eslint-disable prettier/prettier */

import Tasks from './components/Tasks/Tasks'
import Disputes from './components/Disputes/Disputes'
import { WalletProvider } from './providers/Wallet'

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Main layout={false} theme={theme}>
          <MainView>
            <Redirect from='/' to='/dashboard' />
            <Switch>
              <Route exact path='/profile' component={Dashboard} />
              <Route exact path='/leaderboard' component={Tasks} />
              <Route exact path='/dashboard' component={Disputes} />

              <Route component={ErrorPage} />
            </Switch>
          </MainView>
        </Main>
      </BrowserRouter>
    </WalletProvider>
  )
}

export default App
