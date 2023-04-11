import service from '../base.service'

class ServicesService {
    RESOURCE = 'serv'

    getSolutions() {
        return service.get(`${this.RESOURCE}/getSolution`)
    }

    postServiceRegister(query = {}) {
        return service.post(`${this.RESOURCE}/postSolution`, { params: query })
    }
}

export default ServicesService
