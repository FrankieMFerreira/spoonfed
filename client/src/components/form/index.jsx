import React, { Component } from 'react'

// Below, I pull in the default exports from various files, and then promptly export them again, so in other files we can just call `import { Dropdown, Input } from './form` 

export { default as Input } from './Input'
export { default as Dropdown } from './Dropdown'
export { default as Submit } from './Submit'

