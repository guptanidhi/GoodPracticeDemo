let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q4Updated');

describe('Question 4 - Test code for correct output', function(){
    it ('Matches the desired output as per given input test case', function(done){
      expect(index(5)).to.deep.equal([0,1,1,2,3]);
      done();
    });
});
