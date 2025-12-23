import YAML from 'yaml'

const ALERT_TEXT = (title, subtitle, message) => `
# ERROR
> **${title}** 
> - ${subtitle}
---
${message}
`

const SETUPLOADER = {
  install(app, options) {
    // configure the app
    this.loadYaml(app)
  },
  async loadYaml(app) {
    try {
      const output = await fetch('/setup.yaml')
      app.provide('setup', YAML.parse(await output.text()))
    } catch (e) {
      alert(ALERT_TEXT(e.fileName, e.lineNumber, e.message))
    }
  },
}

export default SETUPLOADER
