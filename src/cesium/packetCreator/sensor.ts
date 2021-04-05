import * as Cesium from 'cesium'
import { Colors } from '../../cesium/constants'
import { basePacketOptions } from './common'

import { Cartesian3Value, Packet, Sensor } from '../../types/cesium/czml'

function baseSensorOptions(): Sensor {
  return {
    radius: 1000000,
    intersectionWidth: 2,
    intersectionColor: {
      rgba: Colors.DEFAULT_LINE_COLOR
    },
    lateralSurfaceMaterial: {
      grid: {
        color: {
          rgba: Colors.DEFAULT_LINE_COLOR
        }
      }
    },
    ellipsoidSurfaceMaterial: {
      solidColor: {
        color: {
          rgba: Colors.DEFAULT_LINE_COLOR
        }
      }
    },
    domeSurfaceMaterial: {
      grid: {
        color: {
          rgba: Colors.DEFAULT_LINE_COLOR
        }
      }
    }
  }
}

export function createConicSensorPacket({
  position,
  name
}: {
  position: Cartesian3Value
  name: string | undefined
}): Packet {
  return {
    ...basePacketOptions(name),
    /* eslint-disable @typescript-eslint/camelcase */
    agi_conicSensor: {
      innerHalfAngle: 0,
      outerHalfAngle: Cesium.Math.toRadians(30),
      minimumClockAngle: 0,
      maximumClockAngle: Cesium.Math.toRadians(360),
      ...baseSensorOptions()
    },
    position: { cartesian: position }
  }
}

export function createRectangularSensorPacket({
  position,
  name
}: {
  position: Cartesian3Value
  name: string | undefined
}): Packet {
  return {
    ...basePacketOptions(name),
    /* eslint-disable @typescript-eslint/camelcase */
    agi_rectangularSensor: {
      xHalfAngle: Cesium.Math.toRadians(30),
      yHalfAngle: Cesium.Math.toRadians(30),
      ...baseSensorOptions()
    },
    position: { cartesian: position }
  }
}
