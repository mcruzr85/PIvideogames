import { createGlobalStyle } from 'styled-components';

import noteFontWoff from './Noteworthy Light.woff';
import noteFontWoff2 from './Noteworthy Light.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'NoteworthyLight';
        src: local('NoteworthyLight'), local('NoteworthyLight'),
        url(${noteFontWoff2}) format('woff2'),
        url(${noteFontWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;