const path = require('path')
const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendsConfigs, overrides } = createConfig({
    type: 'frontend',
    project: path.resolve(__dirname, './tsconfig.json')
})

module.exports = {
    extends: [...extendsConfigs, 'next/core-web-vitals'],
    overrides,
}