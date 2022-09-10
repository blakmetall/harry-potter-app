import nextId from 'react-id-generator';

export default function setIdsToListData(data) {
    let newData = [];

    for (let i = 0; i < data.length; i++) {
        newData[i] = data[i];
        newData[i].id = nextId();
    }

    return newData;
}
