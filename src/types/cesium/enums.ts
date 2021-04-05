export const enum ArcTypeValue {
  NONE = 'NONE',
  GEODESIC = 'GEODESIC',
  RHUMB = 'RHUMB'
}

export const enum ClassificationTypeValue {
  TERRAIN = 'TERRAIN',
  CESIUM_3D_TILE = 'CESIUM_3D_TILE',
  BOTH = 'BOTH'
}

export const enum ClockRange {
  UNBOUNDED = 'UNBOUNDED',
  CLAMPED = 'CLAMPED',
  LOOP_STOP = 'LOOP_STOP'
}

export const enum ClockStep {
  TICK_DEPENDENT = 'TICK_DEPENDENT',
  SYSTEM_CLOCK_MULTIPLIER = 'SYSTEM_CLOCK_MULTIPLIER',
  SYSTEM_CLOCK = 'SYSTEM_CLOCK'
}

export const enum ColorBlendModeValue {
  HIGHLIGHT = 'HIGHLIGHT',
  REPLACE = 'REPLACE',
  MIX = 'MIX'
}

export const enum CornerTypeValue {
  ROUNDED = 'ROUNDED',
  MITERED = 'MITERED',
  BEVELED = 'BEVELED'
}

export const enum LabelStyleValue {
  FILL = 'FILL',
  OUTLINE = 'OUTLINE',
  FILL_AND_OUTLINE = 'FILL_AND_OUTLINE'
}

export const enum InterpolationAlgorithmValue {
  LINEAR = 'LINEAR',
  LAGRANGE = 'LAGRANGE',
  HERMITE = 'HERMITE'
}

export const enum ExtrapolationValue {
  NONE = 'NONE',
  HOLD = 'HOLD',
  EXTRAPOLATE = 'EXTRAPOLATE'
}

export const enum HorizontalOriginValue {
  LEFT = 'LEFT',
  CENTER = 'CENTER',
  RIGHT = 'RIGHT'
}

export const enum VerticalOriginValue {
  BASELINE = 'BASELINE',
  BOTTOM = 'BOTTOM',
  CENTER = 'CENTER',
  TOP = 'TOP'
}

export const enum HeightReferenceValue {
  NONE = 'NONE',
  CLAMP_TO_GROUND = 'CLAMP_TO_GROUND',
  RELATIVE_TO_GROUND = 'RELATIVE_TO_GROUND'
}

export const enum ReferenceFrameValue {
  FIXED = 'FIXED',
  INERTIAL = 'INERTIAL'
}

export const enum StripeOrientationValue {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL'
}

export const enum SensorVolumePortionToDisplayValue {
  COMPLETE = 'COMPLETE',
  BELOW_ELLIPSOID_HORIZON = 'BELOW_ELLIPSOID_HORIZON',
  ABOVE_ELLIPSOID_HORIZON = 'ABOVE_ELLIPSOID_HORIZON'
}

export const enum ShadowModeValue {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED',
  CAST_ONLY = 'CAST_ONLY',
  RECEIVE_ONLY = 'RECEIVE_ONLY'
}
