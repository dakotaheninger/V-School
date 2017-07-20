export function submit(pic){
    return {
        type: "SUBMIT",
        pic
    }
}
export function remove(index) {
    return {
        type: "REMOVE",
        index
    }

}
export function editSubmit(index, item) {
    return {
        type: "EDSUB",
        index,
        item
    }

}