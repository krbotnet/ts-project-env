import 'reflect-metadata'
import { container } from 'tsyringe'

import { AppController } from '@src/module/app/app.controller'

export const projectName = () => {
  return container.resolve(AppController)
}
