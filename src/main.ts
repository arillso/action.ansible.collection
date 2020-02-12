import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as fs from 'fs'
import yaml from 'js-yaml'

async function run(): Promise<void> {
  try {
    const apiKey = core.getInput('api_key', {required: true})
    const galaxyConfigFile = core.getInput('galaxy_config_file') || 'galaxy.yml'
    const galaxyConfig = yaml.safeLoad(
      fs.readFileSync(galaxyConfigFile, 'utf8')
    )

    const namespace = galaxyConfig.namespace
    const name = galaxyConfig.name
    const version = galaxyConfig.version

    if (
      namespace === undefined ||
      name === undefined ||
      version === undefined
    ) {
      const error = new Error(
        'Missing require namespace, name, or version fields in galaxy.yml'
      )
      core.error(error.message)
      core.setFailed(error.message)
    }

    core.debug(`Building collection ${namespace}-${name}-${version}`)
    buildCollection(namespace, name, version, apiKey)
      .then(() =>
        core.info(
          `Successfully published ${namespace}-${name} v${version} to Ansible Galaxy.`
        )
      )
      .catch(err => core.setFailed(err.message))
  } catch (error) {
    core.setFailed(error.message)
  }
}

const buildCollection = async (
  namespace: string,
  name: string,
  version: string,
  apiKey: string
): Promise<void> => {
  await exec.exec('ansible-galaxy collection build')
  await exec.exec(
    `ansible-galaxy collection publish ${namespace}-${name}-${version}.tar.gz --api-key=${apiKey}`
  )
}

run()
