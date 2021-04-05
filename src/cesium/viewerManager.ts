import * as Cesium from 'cesium'
import merge from 'lodash/merge'
import cloneDeep from 'lodash/cloneDeep'
// import uuid from 'uuid'
import { uuid } from '../utils/helper'

const baseOptions = {
  animation: true,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  sceneModePicker: false,
  selectionIndicator: false,
  // timeline: false,
  navigationHelpButton: false,
  // shouldAnimate: true,
  // navigationInstructionsInitiallyVisible: false,

  imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
    url:
      'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  }),
  // imageryProvider: new Cesium.UrlTemplateImageryProvider({
  //   url: 'http://192.168.2.68:8080/wgs3857imgD/{z}/{x}/{y}.jpg',
  //   minimumLevel: 0,
  //   maximumLevel: 12
  // }),

  terrainProvider: Cesium.createWorldTerrain()

  // terrainProvider: new Cesium.CesiumTerrainProvider({
  //   url: 'http://192.168.2.68:8080/hunanterrain',
  //   requestVertexNormals: true
  // })
}

interface ViewerDescriptor {
  id: string
  viewer: Cesium.Viewer
  czmlDataSource: Cesium.CzmlDataSource
}

interface ConstructorParams {
  id?: string
  container: string | Element
  options?: Cesium.Viewer.ConstructorOptions
  success?: (descriptor: ViewerDescriptor) => void
}

class ViewerManager {
  descriptors: Array<ViewerDescriptor>

  constructor() {
    this.descriptors = []
  }

  add({ id = uuid(), container, options = {}, success }: ConstructorParams) {
    const czmlDataSource = new Cesium.CzmlDataSource()
    const viewer = new Cesium.Viewer(
      container,
      merge({}, baseOptions, cloneDeep(options))
    )

    // viewer.shadows = true
    viewer.scene.debugShowFramesPerSecond = true
    // viewer.scene.globe.enableLighting = true
    // viewer.scene.globe.depthTestAgainstTerrain = true
    ;(viewer.cesiumWidget.creditContainer as HTMLElement).style.display = 'none'

    viewer.dataSources.removeAll()
    viewer.dataSources.add(
      czmlDataSource.load([{ id: 'document', version: '1.0' }])
    )

    const descriptor = {
      id,
      viewer,
      czmlDataSource
    }
    this.descriptors.push(descriptor)

    if (success) {
      success(descriptor)
    }

    console.log('add viewer', descriptor, this.descriptors)
  }

  remove(viewerId: string) {
    const i = this.descriptors.findIndex(
      (descriptor) => descriptor.id === viewerId
    )

    if (i > -1) {
      this.descriptors[i].viewer.destroy()
      this.descriptors.splice(i, 1)
      console.log('remove viewer', i, this.descriptors)
    }
  }

  find(viewerId: string) {
    return this.descriptors.find((descriptor) => descriptor.id === viewerId)
  }

  run(handler: (descriptor: ViewerDescriptor) => void) {
    this.descriptors.forEach((descriptor) => {
      handler(descriptor)
    })
  }
}

export const viewerManager = new ViewerManager()
