import { css } from '@emotion/css'

const style = {
  fontSize: 'calc(12px + 0.25vw)',
  small: {fontSize: 'calc(10px + 0.25vw)'},
  '.large': {fontSize: 'calc(14px + 0.25vw)'},
}

const globalStyle = css(style)

export default globalStyle