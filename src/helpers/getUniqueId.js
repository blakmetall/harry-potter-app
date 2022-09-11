export default function getUniqueId() {
    let random = Math.floor(Math.random() * 999999999999) + 1;

    return random;
}
