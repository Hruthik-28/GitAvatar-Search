
function useDebouncer(cb, delay = 1000) {
    let timer

    return (...args) => {
        clearInterval(timer)
        console.log(args);
        timer = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

export default useDebouncer
