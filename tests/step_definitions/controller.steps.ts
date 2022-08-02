import {deepStrictEqual} from 'assert';
import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import server, {stop} from '../../src/index'

let application: any;
let _request: request.Test;
let _response: request.Response;

// Metodos get
Given('Envío una petición GET a {string}', (route: string) => {
  _request = request(application).get(route);
});

// Metodos PUT
Given('Envío una petición PUT a {string} con cuerpo:', (route: string, body: string) => {
  _request = request(application).put(route).send(JSON.parse(body));
});



// Esperas de estado
Then('El código de estado de la respuesta debe ser {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  application = await server;
});
AfterAll(async () => {
  await stop();
});
