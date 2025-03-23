import httpInstance from "@/utils/http";


export function getTest () {
    return httpInstance({
        url: 'test'
    })
}
