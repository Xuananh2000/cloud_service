import ContactService from "./contactCloud/contactCloud.service";
import ServicesService from "./serviceCloud/serviceCloud.service";

const Services = {
    serv: new ServicesService(),
    cont: new ContactService(),
}

export const ServiceFactory = {
    get: name => Services[name]
}
