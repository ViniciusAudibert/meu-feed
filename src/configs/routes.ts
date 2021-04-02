export enum RoutesPath {
  HOME = '/',
}

export interface RouteStateType {
  title: string
  pathname: RoutesPath
}

export const RouteState: { [pathname in RoutesPath]: RouteStateType } = {
  [RoutesPath.HOME]: {
    pathname: RoutesPath.HOME,
    title: 'Meu Feed - Seu mural de feedbacks',
  },
}
