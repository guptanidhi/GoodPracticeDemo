let chai = require('chai');
let expect = chai.expect;
let index = require('../solutions/q1');

function getDate(){
  const date = new Date();
  const d = date.getDate(); // Getting Day
  const m = date.getMonth()+1; // Getting Month 
  const y = date.getFullYear(); // Getting Year yyyy
  return m+"/"+d+"/"+y;
}
describe('Question 1 - Test code for correct output', function(){
  it('Matches the desired output', function(done){
    expect(index).to.deep.equal(getDate());
    done();
  });
});