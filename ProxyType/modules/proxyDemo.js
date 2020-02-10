import { proxyTarget } from './proxyTarget.js'
import { proxyHandler } from './proxyHandler.js'

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

export const proxyDemo = () => {
    console.log(`Proxy demo module loaded`)
    let target = proxyTarget()
    let handler = proxyHandler()
    const p = new Proxy(target, handler)
    console.log("Proxy setup complete")
    console.table(p)
    p.a = "A will now exist"
    console.log(p.b) //Doesn't exist - proxy enables overriding what is returned if the object doesn't exist
}