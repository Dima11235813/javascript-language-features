export const proxyTarget = () => {
    let target = {
        testPropOfProxyTarget: "toBeChangedByProxyHandler"
    }
    return target
}