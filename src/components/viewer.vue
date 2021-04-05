<template>
  <div id="cesium-container" class="viewer" :ref="cesiumRefFn"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ComponentInternalInstance, Ref } from 'vue'
// import { Viewer, CzmlDataSource } from 'cesium'
import '../../node_modules/cesium/Source/Widgets/widgets.css'
import { viewerManager } from '../cesium/viewerManager'
import { CzmlManager } from '../cesium/czml'
import { uuid } from '../utils/helper'

export default defineComponent({
  name: 'Viewer',
  components: {},
  setup() {
    let cesiumRef: Element
    function cesiumRefFn(
      el: string | Ref<any> | ComponentInternalInstance | Element | null
    ): void {
      cesiumRef = el as Element
    }

    onMounted(() => {
      viewerManager.add({ container: cesiumRef })
      CzmlManager.process({
        id: uuid(),
        availability: '2012-08-04T16:00:00Z/2012-08-04T16:05:00Z',
        position: {
          epoch: '2012-08-04T16:00:00Z',
          cartographicDegrees: [
            0,
            -70,
            20,
            150000,
            100,
            -80,
            44,
            150000,
            200,
            -90,
            18,
            150000,
            300,
            -98,
            52,
            150000
          ]
        },
        point: {
          color: {
            rgba: [255, 255, 255, 128]
          },
          outlineColor: {
            rgba: [255, 0, 0, 128]
          },
          outlineWidth: 3,
          pixelSize: 15
        }
      })

      setTimeout(() => {
        CzmlManager.process({
          id: uuid(),
          availability: '2012-08-04T16:00:00Z/2012-08-04T16:05:00Z',
          position: {
            epoch: '2012-08-04T16:00:00Z',
            cartographicDegrees: [
              0,
              70,
              20,
              150000,
              100,
              80,
              44,
              150000,
              200,
              90,
              18,
              150000,
              300,
              98,
              52,
              150000
            ]
          },
          point: {
            color: {
              rgba: [255, 255, 255, 128]
            },
            outlineColor: {
              rgba: [255, 0, 0, 128]
            },
            outlineWidth: 3,
            pixelSize: 15
          }
        })
      }, 5000)
    })
    return {
      cesiumRefFn
    }
  }
})
</script>

<style scope>
.viewer {
  height: 100%;
  width: 100%;
}
</style>
