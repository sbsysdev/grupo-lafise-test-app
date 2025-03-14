export type Scheme = 'light' | 'dark';

export type Priority = 'base' | 'primary' | 'secondary' | 'danger';

export type Aspect = 'plain' | 'mild' | 'fill';

export type Measurable = 'border' | 'space' | 'wide' | 'element' | 'screen';

export type FontFamily = 'title' | 'main' | 'number';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ExtendedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export type ScreenSize =
  | '6xs'
  | '5xs'
  | '4xs'
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export type UiToken =
  | 'bg'
  | 'bgSurface'
  | 'bgMild'
  | 'bgMildHover'
  | 'bgMildActive'
  | 'bgMildDisabled'
  | 'bgFill'
  | 'bgFillHover'
  | 'bgFillActive'
  | 'bgFillDisabled'
  | 'text'
  | 'textDisabled'
  | 'textCtrs'
  | 'textCtrsDisabled'
  | 'border'
  | 'borderHover'
  | 'borderActive'
  | 'borderDisabled';

export interface Theme {
  /* fonts */
  fontFamily: Record<FontFamily, string>;
  fontSize: Record<ExtendedSize, number>;
  fontWeight: Record<Size, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>;

  /* measurables */
  measurable: Record<Measurable, Record<ExtendedSize, number>>;
  screen: Record<ScreenSize, number>;

  /* schemes */
  scheme: Record<Scheme, Record<Priority, Record<UiToken, string>>>;
}

export interface CommonFont {
  family?: FontFamily;
  size?: ExtendedSize;
  weight?: Size;
  text?: Priority;
}

export interface CommonSize {
  gap?: ExtendedSize;
  padding?: ExtendedSize;
  rounded?: ExtendedSize;
  borderWidth?: ExtendedSize;
}

export interface CommonPriority {
  bg?: Priority;
  aspect?: Aspect;
  border?: Priority;
}
