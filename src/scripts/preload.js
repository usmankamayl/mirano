export const callbackWithPreload = async (elem, cb, ...params) => {
    const preload = document.createElement('div');
    preload.classList.add('preload');
    elem.append(preload);
    preload.style.display = 'flex';
    elem.style.position = 'relative';
    try {
        const result = await cb(...params);
        return result;
    } finally {
        preload.style.display = 'none';
        preload.remove();
        elem.style.position = '';
    }
}