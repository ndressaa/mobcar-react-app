import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --color-background: #fafafa;
        --color-grey: #595959;
        --color-blue: #00adee;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`