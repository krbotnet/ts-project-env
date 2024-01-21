import dotenv from 'dotenv'

switch (process.env.NODE_ENV) {
  case 'development.local':
    dotenv.config({ path: `${process.env.PWD}/.env.development.local` })
    break
  case 'development':
    dotenv.config({ path: `${process.env.PWD}/.env.development` })
    break
}

const config = {
  VALUE: process.env.VALUE,
} as const

type ConfigKeys = keyof typeof config

export const Config = {
  get(keys: ConfigKeys) {
    const result = config[keys]
    return result
  },
}
