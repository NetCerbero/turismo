interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

// Green - Blue
export const primary: PaletteColor = {
  main: '#ff5722',
  dark: '#B23C17',
  light: '#FF784E',
  contrastText: '#FFF',
  /* main: '#e91e63',
  dark: '#A31545',
  light: '#ED4B82',
  contrastText: '#FFF', */
};

export const secondary: PaletteColor = {
  main: '#00E676',
  dark: '#00A152',
  light: '#33EB91',
  contrastText: 'rgba(0,0,0,0.87)',

  /* main: '#FA6B6B',
  dark: '#af4a4a',
  light: '#fb8888',
  contrastText: '#FFF', */
};

export const success: PaletteColor = {
  main: '#2e7d32',
};

export const error: PaletteColor = {
  main: '#c62828',
};

export const warning: PaletteColor = {
  main: '#f9a825',
};
