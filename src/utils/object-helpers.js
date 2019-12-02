export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if(u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}

export const getCountPages = (totalItemsCount, pageSize=10, portionSize = 10) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return {pages, portionCount, pagesCount};
}

export const delElementFromArray = (array, element) => {
    const indexElement = array.indexOf(element);
    array.splice(indexElement,1);
}

export const getFullDate = (date) => {
    const month = new Date(date).getMonth();
    switch (month) {
        case 0:
            return "января";
        case 1:
            return "февраля";
        case 2:
            return "марта";
        case 3:
            return "апреля";
        case 4:
            return "мая";
        case 5:
            return "июня";
        case 6:
            return "июля";
        case 7:
            return "августа";
        case 8:
            return "сентября";
        case 9:
            return "октября";
        case 10:
            return "ноября";
        case 11:
            return "декабря";
        default:
            return month;
    }
}
