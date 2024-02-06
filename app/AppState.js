import { Player } from './models/player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
// class ObservableAppState extends EventEmitter {
// @type {import('./models/Example.js').Example[]} */

// }

players = [
  new Player('Zac'),
  new Player('sam')
]

export const AppState = createObservableProxy(new ObservableAppState())

