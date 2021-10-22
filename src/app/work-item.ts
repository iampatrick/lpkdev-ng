export interface WorkItem {
    id: number,
    title: string,
    description: string,
    type: string[],
    url?: string,
    image: string
}
