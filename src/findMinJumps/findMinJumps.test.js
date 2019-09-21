import findMinJumpsPath from './findMinJumps';


describe('findMinJumpsPath function', () => {
    it('returns 0 if called with an empty array', () => {
        const testArray = [];
        expect(findMinJumpsPath(testArray)).toBe(0);
    });

    it('returns the same array if the array only contains a single integer', () => {
        const testArray = [1];
        expect(findMinJumpsPath(testArray)).toEqual([1]);        
    });

    it('returns 0 if the first element is < 0', () => {
        let testArray = [-2, 5, 6];
        expect(findMinJumpsPath(testArray)).toBe(0); 
    });

    it('returns 0 if the first element is = 0', () => {
        let testArray = [0, 1, 6];
        expect(findMinJumpsPath(testArray)).toBe(0); 
    });

    it('returns correct result given a valid array', () => {
        let testArray = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
        expect(findMinJumpsPath(testArray)).toEqual([1,3,8,9]);
        testArray = [1, 2, 0, 3, 0, 2, 0];
        expect(findMinJumpsPath(testArray)).toEqual([1,2,3,0]);
        testArray = [1, 1, 1, 1, 1];
        expect(findMinJumpsPath(testArray)).toEqual([1,1,1,1,1]);
        testArray = [5, 1, 1, 1, 1, 1];
        expect(findMinJumpsPath(testArray)).toEqual([5, 1]);
    });

    it('returns correct result given a valid array with negative numbers', () => {
        let testArray = [2, -3, 5, -1];
        expect(findMinJumpsPath(testArray)).toEqual([2,5,-1]);
        testArray = [4, -3, -2, -1, 2, 0, 2, -1, 0];
        expect(findMinJumpsPath(testArray)).toEqual([4,2,2,0]);
    });

    it('returns 0 if the last element cannot be reached', () => {
        let testArray = [1, 2, 0, 1, 0, 2, 0];
        expect(findMinJumpsPath(testArray)).toBe(0);
        testArray = [4, 2, 0, -4, -2, 6];
        expect(findMinJumpsPath(testArray)).toBe(0);
    });

    it('returns 0 if array contains non-integers', () => {
        let testArray = [1, 2, 0, 3, 1.5, 2, 0];
        expect(findMinJumpsPath(testArray)).toEqual(0);
        testArray = [5,2,3,'2',0];
        expect(findMinJumpsPath(testArray)).toEqual(0);
    });
});
