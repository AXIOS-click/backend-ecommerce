Feature: Api status
  Para saber que el servidor está en funcionamiento
  Como chequeo de salud
  Quiero comprobar el estado de la api

  Scenario: Verifica El statuss
    Given Envío una petición GET a "/api/status"
    Then El código de estado de la respuesta debe ser 200

  Scenario: Verifica respuesta fallida controlada
    Given Envío una petición GET a "/asdfasdf"
    Then El código de estado de la respuesta debe ser 405
