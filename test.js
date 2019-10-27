describe('Words that are anagrams should return true', ()=>{
	expect(checkAnagram('listen','silent')).toBeTruthy();
});

describe('Words that are the same length but not anagrams should return false', ()=>{
	expect(checkAnagram('radium','madrid')).not.toBeTruthy();
});

describe('Sentences that are anagrams should return true', ()=>{
	expect(checkAnagram('eleven plus two','twelve plus one')).toBeTruthy();
});

describe('Same words are not anagrams and should return false', ()=>{
	expect(checkAnagram('spain','spain')).not.toBeTruthy();
});

describe('Anagrams can contain spaces and should return true', ()=>{
	expect(checkAnagram('funeral','real fun')).toBeTruthy();
});
