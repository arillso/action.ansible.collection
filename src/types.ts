import {GalaxyConfig} from './GalaxyConfig'

export type GalaxyConfigFile = {
  namespace?: string
  name?: string
  version?: string
  readme?: string
  authors?: string[]
  description?: string
  licenseFile?: string
  tags?: string[]
  repository?: string
  documentation?: string
  issues?: string
}

export type CollectionInput = {
  config: GalaxyConfig
  apiKey: string
  customDir: string
  customVersion: string
}
