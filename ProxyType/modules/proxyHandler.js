export const proxyHandler = () => {
    return {
        handler: () => {
            console.log("Handling proxy")
        }
    }
}