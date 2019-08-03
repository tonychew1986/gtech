// Check if extension is correct
// Check if folder contain correct text

var expect = require('chai').expect;
var challenge = require('./challenge');
// var getFiles = challenge.getFiles;
// var checkSearchTerm = challenge.checkSearchTerm;

describe('challenge()', function () {
  it('should check if number of files are correct', function () {

    var result = challenge.getFiles("./data", '.js', "TODO");
    expect(result).to.be.equal(6);

  });

  it('should check if files extensions are correct', function () {
    challenge.clearFileStorage();

    var result = challenge.getFiles("./data", '.go', "TODO");
    expect(result).to.be.equal(0);

  });

  it('should check if files contain search term', function () {

    var result = challenge.checkSearchTerm("data/somedir/somemodule/somefile.js", "TODO", 1);
    expect(result).to.be.equal(true);

  });

  it('should check if files does not contain search term', function () {

    var result = challenge.checkSearchTerm("data/somedir/somemodule/somefile.js", "123", 1);
    expect(result).to.be.equal(false);

  });
});
