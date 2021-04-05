import { v4 as uuidv4 } from 'uuid'

export function uuid(): string {
  return uuidv4()
}

export function arrayMergeCustomizer(objValue: any, srcValue: any) {
  if (Array.isArray(objValue)) {
    return srcValue
  }
}
