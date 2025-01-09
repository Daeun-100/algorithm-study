/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    const m = new Map();

    strs.forEach(str => {
        const sorted = [...str].sort().join("");
        m.set(sorted, [...(m.get(sorted) ?? []), str]);
    })

    return [...m.values()];

    
};