var expect = require('chai').expect
var Alchemist = require('alchemist-js')
var lchab = require('../')

describe('lchab', function () {
  var alchemist, lab, ref_white;

  before(function () {
    alchemist = Alchemist.create({ precision: 4, limits: 'nullify' })
    lab = { name: 'lab', to: {} }
    alchemist.use(lchab())
    alchemist.use(lab)
    var white = alchemist.BaseSpace.white
    ref_white = [white.X, white.Y, white.Z]
  })


  describe('to lab', function () {
    it('should convert', function () {
      expect(alchemist.lchab(50, 20, 150).lab()).to.deep.eq([50, -17.32, 10])
    })
    it('handles greys well', function () {
      expect(alchemist.lchab(50, 0, 0).lab()).to.deep.eq([50, 0, 0])
    })
    it('handles black well', function () {
      expect(alchemist.lchab(0, 0, 0).lab()).to.deep.eq([0, 0, 0])
    })
    it('handles white well', function () {
      expect(alchemist.lchab(100, 0, 0).lab()).to.deep.eq([100, 0, 0])
    })
  })

  describe('from lab', function () {
    it('should convert', function () {
      expect(alchemist.lab(50, -17.3205, 10).lchab()).to.deep.eq([50, 20, 150])
    })
    it('handles greys well', function () {
      expect(alchemist.lab(50, 0, 0).lchab()).to.deep.eq([50, 0, 0])
    })
    it('handles black well', function () {
      expect(alchemist.lab(0, 0, 0).lchab()).to.deep.eq([0, 0, 0])
    })
    it('handles white well', function () {
      expect(alchemist.lab(100, 0, 0).lchab()).to.deep.eq([100, 0, 0])
    })
  })
})
