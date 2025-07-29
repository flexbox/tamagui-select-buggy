import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder'
import * as Colors from '@tamagui/colors'

const darkPalette = ['hsla(220, 10%, 2%, 1)','hsla(220, 11%, 9%, 1)','hsla(220, 13%, 16%, 1)','hsla(220, 14%, 23%, 1)','hsla(220, 15%, 30%, 1)','hsla(220, 16%, 34%, 1)','hsla(220, 17%, 38%, 1)','hsla(220, 18%, 42%, 1)','hsla(220, 19%, 46%, 1)','hsla(220, 20%, 50%, 1)','hsla(220, 20%, 80%, 1)','hsla(220, 20%, 95%, 1)']
const lightPalette = ['hsla(220, 10%, 98%, 1)','hsla(220, 11%, 91%, 1)','hsla(220, 13%, 84%, 1)','hsla(220, 14%, 77%, 1)','hsla(220, 15%, 70%, 1)','hsla(220, 16%, 66%, 1)','hsla(220, 17%, 62%, 1)','hsla(220, 18%, 58%, 1)','hsla(220, 19%, 54%, 1)','hsla(220, 20%, 50%, 1)','hsla(220, 20%, 20%, 1)','hsla(220, 20%, 10%, 1)']

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
}

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
}

// we're adding some example sub-themes for you to show how they are done, "success" "warning", "error":

const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: ['hsla(356, 30%, 15%, 1)','hsla(356, 44%, 26%, 1)','hsla(356, 57%, 36%, 1)','hsla(356, 71%, 47%, 1)','hsla(356, 85%, 57%, 1)','hsla(356, 84%, 56%, 1)','hsla(356, 83%, 54%, 1)','hsla(356, 82%, 53%, 1)','hsla(356, 81%, 51%, 1)','hsla(356, 80%, 50%, 1)','hsla(356, 85%, 70%, 1)','hsla(356, 90%, 85%, 1)'],
      light: ['hsla(356, 30%, 95%, 1)','hsla(356, 44%, 86%, 1)','hsla(356, 57%, 76%, 1)','hsla(356, 71%, 66%, 1)','hsla(356, 85%, 57%, 1)','hsla(356, 84%, 56%, 1)','hsla(356, 83%, 54%, 1)','hsla(356, 82%, 53%, 1)','hsla(356, 81%, 51%, 1)','hsla(356, 80%, 50%, 1)','hsla(356, 85%, 30%, 1)','hsla(356, 90%, 15%, 1)'],
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },

  // optionally add more, can pass palette or template

  grandChildrenThemes: {
    alt1: {
      template: 'alt1',
    },
    alt2: {
      template: 'alt2',
    },
    surface1: {
      template: 'surface1',
    },
    surface2: {
      template: 'surface2',
    },
    surface3: {
      template: 'surface3',
    },
  },
})

export type Themes = typeof builtThemes

// the process.env conditional here is optional but saves web client-side bundle
// size by leaving out themes JS. tamagui automatically hydrates themes from CSS
// back into JS for you, and the bundler plugins set TAMAGUI_ENVIRONMENT. so
// long as you are using the Vite, Next, Webpack plugins this should just work,
// but if not you can just export builtThemes directly as themes:
export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' &&
  process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any)
