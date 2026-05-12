export interface Photo {
    id: number
    url: string
    title: string
    tags: string[]
    year: number

    // додаткові поля
    type: string
    price: number
    description: string
}