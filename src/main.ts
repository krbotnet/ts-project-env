import { projectName } from '@src/container'

/**
 * @description Bootstraping
 */
async function bootstrap() {
  const app = projectName()
  app.run()
}

bootstrap()
