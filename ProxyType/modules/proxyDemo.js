import { proxyTarget } from './proxyTarget.js'
import { proxyHandler } from './proxyHandler.js'

export const proxyDemo = () => {
    console.log(`Proxy demo module loaded`)
    let target = proxyTarget()
    let handler = proxyHandler()
    const p = new Proxy(target, handler)
    console.log("Proxy setup complete")
    console.table(p)
}