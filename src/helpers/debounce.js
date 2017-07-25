let timer = null

const debounce = interval => action => {
    clearTimeout(timer);
    timer = setTimeout(action, interval);
};

export default debounce(2000);
