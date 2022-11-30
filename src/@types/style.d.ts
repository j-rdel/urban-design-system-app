import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    brandName: string;
    brand: {
      BrandColorPrimaryPure: string;
      BrandColorPrimaryLight: string;
      BrandColorPrimaryMedium: string;
      BrandColorPrimaryDark: string;
      BrandColorSecondaryPure: string;
      BrandColorSecondaryLight: string;
      BrandColorSecondaryMedium: string;
      BrandColorSecondaryDark: string;
      BrandColorTertiaryPure: string;
      BrandColorTertiaryLight: string;
      BrandColorTertiaryMedium: string;
      BrandColorTertiaryDark: string;
      BrandColorGradient: Array<string>;
      BrandColorDisabledGradient: Array<string>
      BrandColorPressedGradient: Array<string>
    };
    global: {
      FontFamily: string;
      FontWeightRegular: string;
      FontWeightMedium: string;
      FontWeightBold: string;
      FontSizeXxxs: string;
      FontSizeXxs: string;
      FontSizeXs: string;
      FontSizeSm: string;
      FontSizeMd: string;
      FontSizeLg: string;
      FontSizeXl: string;
      LineHeightDefault: string;
      LineHeightXs: string;
      LineHeightSm: string;
      BorderRadiusNone: string;
      BorderRadiusXxs: string;
      BorderRadiusXs: string;
      BorderRadiusSm: string;
      BorderRadiusMd: string;
      BorderRadiusLg: string;
      BorderRadiusPill: string;
      BorderRadiusCircular: string;
      BorderWidthNone: string;
      BorderWidthHairline: string;
      BorderWidthThin: string;
      BorderWidthThick: string;
      BorderWidthHeavy: string;
      OpacityLevelIntense: numb;
      OpacityLevelMedium: numb;
      OpacityLevelLight: numb;
      OpacityLevelSemitransparent:number = 0.20;
      ShadowLevel1:ShadowLevelType;
      ShadowLevel2:ShadowLevelType;
      ShadowLevel3:ShadowLevelTypen;
      SpacingQuarck:string
      SpacingNano:string;
      SpacingXxxs:string;
      SpacingXxs:string;
      SpacingXs:string;
      SpacingSm:string;
      SpacingMd:string;
      SpacingLg:string;
      SpacingXl:string;
      SpacingXxl:string;
      SpacingXxxl:string;
      SpacingHuge:string;
      SpacingGiant:string;
      ColorFeedbackSuccessPure:string
      ColorFeedbackSuccessLight:string;
      ColorFeedbackSuccessMedium:string;
      ColorFeedbackSuccessDark:string;
      ColorFeedbackNegativePure:string;
      ColorFeedbackNegativeLight:string;
      ColorFeedbackNegativeMedium:string;
      ColorFeedbackNegativeDark:string;
      ColorNeutralLowPure:string;
      ColorNeutralLowLight:string;
      ColorNeutralLowMedium:string;
      ColorNeutralLowDark:string;
      ColorNeutralHighPure: string;
      ColorNeutralHighLight: string;
      ColorNeutralHighMedium: string;
      ColorNeutralHighDark: string;
      SpacingStackQuarck: string;
      SpacingStackNano: string;
      SpacingStackXxxs: string;
      SpacingStackXxs: string;
      SpacingStackXs: string;
      SpacingStackSm: string;
      SpacingStackMd: string;
      SpacingStackLg: string;
      SpacingStackXl: string;
      SpacingStackXxl: string;
      SpacingStackXxxl: string;
      SpacingStackHuge: string;
      SpacingStackGiant: string;
    };
  }
}
