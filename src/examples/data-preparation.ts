class CountryService {
  citiesHashed (data: any[] = []) {
    return data.reduce((acc: any, cur: any) => {
      acc[cur.id] = cur

      return acc
    }, {} as any)
  }

  async getCountries () {
    await this.timer()
    return Promise.reject(new Error('Crashed!'))
    return [
      { name: 'Ukraine', id: '1', cities: ['101', '102', '103'] },
      { name: 'USA', id: '2', cities: ['104', '105'] }
    ]
  }

  async getCities () {
    await this.timer(2000)
    return Promise.reject(new Error('Crashed!'))
    return [{ name: 'Kyiv', id: '101' },
      { name: 'Lviv', id: '102' },
      { name: 'Kherson', id: '103' },
      { name: 'New York', id: '104' },
      { name: 'San Fransisco', id: '105' }]
  }

  async timer (timeout = 1000) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, timeout)
    })
  }
}

export const countryService = new CountryService()
