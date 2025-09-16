import * as React from 'react';
import { MD3Colors, ProgressBar } from 'react-native-paper';

const MyProgressBar = () => (
  <ProgressBar progress={0.5} color={MD3Colors.error50} />
);

export default MyProgressBar;