export const utils = {
  /**
   * @description 실행을 지연시켜주는 함수
   */
  delay: {
    // 1000ms === 1s
    milliSeconds: async (milliseconds: number) => {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve('')
        }, milliseconds),
      )
    },
    seconds: async (seconds: number) => {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve('')
        }, seconds * 1000),
      )
    },
    minutes: async (minutes: number) => {
      return new Promise((resolve) =>
        setTimeout(
          () => {
            resolve('')
          },
          minutes * 1000 * 60,
        ),
      )
    },
  },
}
