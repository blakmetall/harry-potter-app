import setIdsToListData from '../setIdsToListData';

describe('setIdsToListData', () => {
    it('should expect not to have id set to object array list element', () => {
        const data = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mary' }, { name: 'Anne' }, { name: 'Paul' }, { name: 'Jack' }];
        expect(data[0].id).toBeUndefined();
    });
    it('should add ids to object array list', () => {
        const data = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mary' }, { name: 'Anne' }, { name: 'Paul' }, { name: 'Jack' }];
        const dataWithIds = setIdsToListData(data);
        expect(dataWithIds[0].id).not.toBeUndefined();
    });
});
