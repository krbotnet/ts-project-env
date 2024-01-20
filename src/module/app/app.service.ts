import { injectable } from 'tsyringe'

@injectable()
export class appService {
  constructor() {}
  hello() {
    console.log('Hello TypeScript')
  }
}
