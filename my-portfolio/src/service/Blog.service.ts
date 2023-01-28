import { Blog } from "../model/Blog"

const getUrl = 'http://localhost:8000/Blog/'

const get = async () => {

    return await fetch(getUrl)
        .then((res) => res.json())
        .then((data) => {
            if (data['message']) throw data
            console.log(data['message'])
            return data.map((item: any) => new Blog(item))
        })
}

const getByID = async (id: string) => {
    return await fetch(getUrl + id)
        .then((res) => res.json())
        .then((data) => {
            if (data['message']) throw data
            console.log(data['message'])
            return new Blog(data)
        })

}

const add = async (body: any) => {
    return await fetch(getUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
        .then((res) => res.json())
        .then((data) => {
            if (data['message']) throw data
            console.log(data['message'])
            return new Blog(data)
        })
}

const update = async (id: string, body: any) => {
    return await fetch(getUrl + id, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
        .then((res) => res.json())
        .then((data) => {
            if (data['message']) throw data
            console.log(data['message'])
            return new Blog(data)
        })
}

const remove = async (id: string) => {

    return await fetch(getUrl + id, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then((data) => {
            if (data['message']) throw data
            console.log(data['message'])
            return new Blog(data)
        })

}

export default {
    get,
    add,
    getByID,
    update,
    remove
}