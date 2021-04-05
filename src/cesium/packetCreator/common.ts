import { uuid } from '../../utils/helper'
import { Colors } from '../constants'

import { Packet, Label } from '../../types/cesium/czml'
import {
  HorizontalOriginValue,
  VerticalOriginValue,
  LabelStyleValue
} from '../../types/cesium/enums'

export function defaultLabelOptions(name: string): Label {
  return {
    fillColor: {
      rgba: Colors.DEFAULT_LABEL_COLOR
    },
    font: '12px Segoe UI Semibold',
    horizontalOrigin: HorizontalOriginValue.CENTER,
    pixelOffset: {
      cartesian2: [0.0, 20.0]
    },
    scale: 1.0,
    style: LabelStyleValue.FILL,
    text: name,
    verticalOrigin: VerticalOriginValue.CENTER
  }
}

export function basePacketOptions(name = ''): Packet {
  return {
    id: uuid(),
    name,
    label: defaultLabelOptions(name)
  }
}
