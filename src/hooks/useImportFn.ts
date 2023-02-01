export async function importFn (src: string) {
    let fn
    await import(src).then((data) => {
        fn = data.default
    })
    return fn
}



