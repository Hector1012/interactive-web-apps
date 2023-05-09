
// scripts.js

import  {company} from './configurattion.js'
import  {year} from './configurattion.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message