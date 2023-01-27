export class Blog {
    id: string
    content: string
    createdAt: string
    title: string
    updateAt: string

    constructor(data: any){
        this.id = data._id
        this.content = data.content
        this.createdAt = data.createdAt
        this.title = data.title
        this.updateAt = data.updateAt
    }
}

