export interface Response<T> {
    count: number
    next: string
    previous: string
    results: Array<T>
}