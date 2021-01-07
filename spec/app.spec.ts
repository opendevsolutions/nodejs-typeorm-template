
const request = require("request");
const assert = require('chai').assert;
const base_url = "http://localhost:8080";

describe("Auditoria de Terreno Server", () => {
  var server;

  before(function () {
    let server = require('../src/server')
  });

  after(function () {
    server.close();
  });
  exampleTest({ejemplo: 'ejemplo'});

  });

  function exampleTest(params) {
    describe('Titulo aca', () => {
      it('Subtitulo aca', async () => {
        assert.equal(200, 200);
      });
    });
  }
