import React from 'react'
import { RoutesPath, RouteState, RouteStateType } from './routes'

interface RootContextState {
  routeState: RouteStateType
}

export const initialState: RootContextState = {
  routeState: RouteState[RoutesPath.HOME],
}

export const RootContext = React.createContext<RootContextState>(initialState)
