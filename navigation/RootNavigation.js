import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  //The navigation details are in name and params very useful to debug
  navigationRef.current?.navigate(name, params);
}