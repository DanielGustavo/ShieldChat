import { MutableRefObject } from 'react';

export default function isARef(
  toBeDetermined: unknown
): toBeDetermined is MutableRefObject<unknown> {
  if ((toBeDetermined as MutableRefObject<unknown>).current) {
    return true;
  }

  return false;
}
