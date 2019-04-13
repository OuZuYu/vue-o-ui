export function debounce (fn, wait) {
    let timer = null;

    return function () {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    }
}

export function throttle (fn, wait) {
    let timer = null;

    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null;
            }, wait)
        }
    }
}