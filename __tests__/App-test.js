/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByText}=render(<App/>)
  const ele=getByText("App.js")
 
  
});
