import { injectable } from 'tsyringe'

import { appService } from '@src/module/app/app.service'

@injectable()
export class AppController {
  constructor(private readonly appService: appService) {}
  run() {
    return this.appService.hello()
  }
}
