let idCounter = 0;

export default function getUniqueId(prefix) {
    idCounter += 1;
    return prefix ? `${prefix}-${idCounter}` : String(idCounter);
}
