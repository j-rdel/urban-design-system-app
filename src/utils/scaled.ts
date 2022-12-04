import {Dimensions, PixelRatio} from 'react-native';

/** This values  */
var WIDTH_SCREEN = 375,
  HEIGHT_SCREEN = 812,
  REM = 16;

interface SetPrps {
  width: string;
  height: string;
  rem: string;
}

function set({width, height, rem}: SetPrps) {
  WIDTH_SCREEN = parseFloat(width) || WIDTH_SCREEN;
  HEIGHT_SCREEN = parseFloat(height) || HEIGHT_SCREEN;
  REM = parseFloat(rem) || REM;
}

function fontScaled(size: string, number: boolean = false) {
  if (!size) {
    return;
  }

  let parsedSize = parseSize(size, REM);

  let {width, height} = Dimensions.get('window');

  let scaleWidth = width / WIDTH_SCREEN;
  let scaleHeight = height / HEIGHT_SCREEN;

  let scale = Math.min(scaleWidth, scaleHeight);

  let to_ret = Math.ceil(
    PixelRatio.roundToNearestPixel(parsedSize * scale - scale),
  );

  return number ? to_ret : to_ret + 'px';
}

function horizontalScaled(size: string, number: boolean = false) {
  if (!size) {
    return;
  }

  let parsedSize = parseSize(size, REM);

  let {width} = Dimensions.get('window');

  let scaleWidth = width / WIDTH_SCREEN;

  let to_ret = Math.ceil(
    PixelRatio.roundToNearestPixel(parsedSize * scaleWidth),
  );

  return number ? to_ret : to_ret + 'px';
}

function verticalScaled(size: string, number: boolean = false) {
  if (!size) {
    return;
  }

  let parsedSize = parseSize(size, REM);

  let {height} = Dimensions.get('window');

  let scaleHeight = height / HEIGHT_SCREEN;

  let to_ret = Math.ceil(
    PixelRatio.roundToNearestPixel(parsedSize * scaleHeight),
  );

  return number ? to_ret : to_ret + 'px';
}

function parseSize(size: string, rem: number) {
  let to_ret =
    typeof size === 'string'
      ? size.includes('rem')
        ? parseFloat(size) * rem
        : parseFloat(size)
      : size;

  if (isNaN(to_ret)) {
    throw new Error(`${size} is NaN`);
  }

  return to_ret;
}

export {fontScaled, horizontalScaled, verticalScaled, set};
