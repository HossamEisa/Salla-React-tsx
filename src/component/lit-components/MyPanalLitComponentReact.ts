import { createComponent } from '@lit/react';
import { MyPanal } from 'my-panal/src/my-panal.js';
import React from 'react';
// Create a React component using the SimpleLitComponent
export const MyPanalComponentReact = createComponent({
  react: React,
  tagName: 'my-panal',
  elementClass: MyPanal
});
