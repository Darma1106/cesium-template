import cloneDeep from 'lodash/cloneDeep'
import { viewerManager } from './viewerManager'

import { Packet } from '../types/cesium/czml'

export class CzmlManager {
  static load(czml: Packet | Array<Packet>) {
    console.log('CzmlManager, load', cloneDeep(czml))
    return viewerManager.run(({ czmlDataSource }) => {
      czmlDataSource.load(cloneDeep(czml))
    })
  }

  static process(czml: Packet | Array<Packet>) {
    console.log('CzmlManager, process', cloneDeep(czml))
    return viewerManager.run(({ czmlDataSource }) => {
      czmlDataSource.process(cloneDeep(czml))
    })
  }
}
