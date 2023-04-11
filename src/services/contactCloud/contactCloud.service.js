import service from '../base.service'

class ContactService {
    RESOURCE = 'cont'

    postContact(query = {}) {
        return service.post(`${this.RESOURCE}/postContact`, { params: query })
    }

    postSubscriber(query = {}) {
        return service.post(`${this.RESOURCE}/postSubscriber`, { params: query })
    }
}

export default ContactService
