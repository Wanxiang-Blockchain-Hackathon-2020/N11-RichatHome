import project from './entity/project'
const API_HOST = '39.105.68.35'

const url = (path: string) => {
    return `http://${API_HOST}/${path}`
}

class APIService {
    constructor() {

    }

    createProject(newProject: project) {
        fetch(url('api/project'), {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProject)
        }).then(x => x.json()).then(data => console.log(data))
    }

    searchMyTask() {

    }
}

export default new APIService()