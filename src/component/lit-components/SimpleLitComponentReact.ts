import { createComponent } from '@lit/react';
import { SimpleLitComponent } from 'my-panal/src/simple-lit-component.js';
import React from 'react';
// Create a React component using the SimpleLitComponent
export const SimpleLitComponentReact = createComponent({
  react: React,
  tagName: 'simple-lit-component',
  elementClass: SimpleLitComponent
});


