export function formatDate(timestamp) {
    let date = new Date(timestamp);
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}