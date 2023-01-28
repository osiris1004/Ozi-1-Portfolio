export class Blog {
    id: string
    title: string;
    content : string
    categoryId : string
    createdAt: Date;
    updateAt: Date;

    constructor(data: any){
        this.id = data._id
        this.title = data.title
        this.content = data.content
        this.categoryId = data.categoryId
        this.createdAt = data.createdAt
        this.updateAt = data.updateAt
    }
}

