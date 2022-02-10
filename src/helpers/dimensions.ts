import {Dimensions, PixelRatio} from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const DESIGN_DIMENSIONS = {HEIGHT: 731, WIDTH: 412};

export const convertHeight = (height: number) => {
  const elemHeight = typeof height === 'number' ? height : parseFloat(height);

  const calculatedHeight = PixelRatio.roundToNearestPixel(
    (WINDOW_HEIGHT * elemHeight) / DESIGN_DIMENSIONS.HEIGHT,
  );

  if (DESIGN_DIMENSIONS.HEIGHT < height) {
    return calculatedHeight / 0.7;
  }

  return calculatedHeight;
};

export const convertWidth = (width: number) => {
  const elemWidth = typeof width === 'number' ? width : parseFloat(width);

  const calculatedWidth = PixelRatio.roundToNearestPixel(
    (WINDOW_WIDTH * elemWidth) / DESIGN_DIMENSIONS.WIDTH,
  );

  return calculatedWidth;
};
