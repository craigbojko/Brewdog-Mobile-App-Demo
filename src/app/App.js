import React from 'react'
import SwipeableViews from 'react-swipeable-views'

import { ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './Theme'
import './App.css'

import { Paper } from '@material-ui/core'
import {
  LocalCafe,
  Fastfood,
  PermIdentity,
  Search
} from '@material-ui/icons'

import TopBar from './components/presenters/TopBar'
import TabView from './components/containers/TabView'
import BeerPage from './components/containers/ BeerPage'
import AppModal from './components/presenters/Modal'
import BasketSlider from './components/containers/BasketSlider'

import MainNavigationTabs from './components/containers/MainNavigationTabs'
import MainNavigationTab from './components/presenters/MainNavigationTab'

import SubNavigationTabs from './components/containers/SubNavigationTabs'
import SubNavigationTab from './components/presenters/SubNavigationTab'

const App = () => {
  const [mainNavValue, setMainNavState] = React.useState(0)
  const [subNavValue, setSubNavState] = React.useState({ 0: 0 })

  const panelMap = {
    0: [0, 1, 2],
    1: [3],
    2: [4],
    3: [5]
  }

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper square className='App'>
          <TopBar position='static'>Demo App</TopBar>
          <main>
            <nav>
              <MainNavigationTabs
                value={mainNavValue}
                onChange={(e, newValue) => {
                  setMainNavState(newValue)
                  if (!subNavValue[newValue]) {
                    setSubNavState({ ...subNavValue, [newValue]: panelMap[newValue][0] })
                  }
                }}
                variant='fullWidth'
                aria-label='Page tabs'
              >
                <MainNavigationTab icon={<LocalCafe />} value={0} aria-label='drink' />
                <MainNavigationTab icon={<Fastfood />} value={1} aria-label='food' />
                <MainNavigationTab icon={<PermIdentity />} value={2} aria-label='other' />
                <MainNavigationTab icon={<Search />} value={3} aria-label='search' />
              </MainNavigationTabs>
            </nav>
            <nav style={{ backgroundColor: '#424242' }}> {/* Hack - should pull from theme */}
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={mainNavValue}
                onChangeIndex={index => {
                  setMainNavState(index)
                  if (!subNavValue[index]) {
                    setSubNavState({ ...subNavValue, [index]: panelMap[index][0] })
                  }
                }}
              >
                <TabView value={mainNavValue} index={0}>
                  <SubNavigationTabs
                    value={subNavValue[mainNavValue]}
                    onChange={(e, newValue) => setSubNavState({ ...subNavValue, [mainNavValue]: newValue })}
                    variant='fullWidth'
                    aria-label='View tabs'
                  >
                    <SubNavigationTab label='All' value={0} aria-label='all' />
                    <SubNavigationTab label='Pizza' value={1} aria-label='pizza' />
                    <SubNavigationTab label='Steak' value={2} aria-label='steak' />
                  </SubNavigationTabs>
                </TabView>
                <TabView value={mainNavValue} index={1}>
                  <SubNavigationTabs
                    value={subNavValue[mainNavValue]}
                    onChange={(e, newValue) => setSubNavState({ ...subNavValue, [mainNavValue]: newValue })}
                    variant='fullWidth'
                    aria-label='Page tabs'
                  >
                    <SubNavigationTab label='All' value={3} aria-label='all' />
                  </SubNavigationTabs>
                </TabView>
                <TabView value={mainNavValue} index={2}>
                  <SubNavigationTabs
                    value={subNavValue[mainNavValue]}
                    onChange={(e, newValue) => setSubNavState({ ...subNavValue, [mainNavValue]: newValue })}
                    variant='fullWidth'
                    aria-label='Page tabs'
                  >
                    <SubNavigationTab label='Other' value={4} aria-label='other' />
                  </SubNavigationTabs>
                </TabView>
                <TabView value={mainNavValue} index={3}>
                  <SubNavigationTabs
                    value={subNavValue[mainNavValue]}
                    onChange={(e, newValue) => setSubNavState({ ...subNavValue, [mainNavValue]: newValue })}
                    variant='fullWidth'
                    aria-label='Page tabs'
                  >
                    <SubNavigationTab label='Search' value={5} aria-label='search' />
                  </SubNavigationTabs>
                </TabView>
              </SwipeableViews>
            </nav>
            <article>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={subNavValue[mainNavValue]}
                onChangeIndex={newViewIndex => {
                  const mainNavTuple = Object.entries(panelMap).filter(([, panelArr]) => !!~panelArr.indexOf(newViewIndex))

                  if (mainNavTuple.length) {
                    setMainNavState(parseInt(mainNavTuple[0][0], 10))
                    setSubNavState({ ...subNavValue, [parseInt(mainNavTuple[0][0], 10)]: newViewIndex })
                  }
                }}
              >
                <TabView value={0} index={0}><BeerPage type='all' /></TabView>
                <TabView value={1} index={1}><BeerPage type='pizza' /></TabView>
                <TabView value={2} index={2}><BeerPage type='steak' /></TabView>

                <TabView value={3} index={3}>Food View</TabView>
                <TabView value={4} index={4}>Other View</TabView>
                <TabView value={5} index={5}>Search View</TabView>
              </SwipeableViews>
            </article>
            <AppModal />
            <BasketSlider />
          </main>
        </Paper>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default App
