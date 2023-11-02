// src/components/Footer.js
// Footer.js
import React from 'react';

class Footer extends React.Component {
render() {
return (
<footer>
<a href="https://github.com/4Sicor42" target="_blank" rel="noreferrer">
GitHub
</a>
<span id="year">{new Date().getFullYear()}</span>
</footer>
);
}
}
export default Footer;