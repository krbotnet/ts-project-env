import dotenv from 'dotenv'

dotenv.config()

const config = {
  value1: 'value1',
} as const

type ConfigKeys = keyof typeof config

export const Config = {
  get(keys: ConfigKeys) {
    const result = config[keys]
    return result
  },
}
