import * as Global from '../tokens/globals';
import * as AtlantisBrand from '../tokens/atlantis/brand';
import * as OrionBrand from '../tokens/orion/brand';

export const urbTheme = {
  atlantis: {
    Default: {
      brand: AtlantisBrand,
      global: Global,
      brandName: 'atlantis'
    }
  },
  orion: {
    Default: {
      brand: OrionBrand,
      global: Global,
      brandName: 'orion'
    }
  }
};

export type TUrbOptions = {
  atlantis: {
    Default: {
      brand: typeof AtlantisBrand;
      global: typeof Global;
      brandName: string;
    };
  };
  orion: {
    Default: {
      brand: typeof OrionBrand;
      global: typeof Global;
      brandName: string;
    };
  };
};
