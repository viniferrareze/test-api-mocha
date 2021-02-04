var should = require("should");
var chai = require("chai");
var expect = chai.expect;
var api = require("../config/api");

const request = require("request");
request.defaults({baseUrl:"https://onesoftwareca.herokuapp.com"});


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNmY3ZTc5ZDVmN2U2MDdmNDQwYjQzYiIsInJvbGVzIjpbIkFHRU5UOkFETUlOIl0sImFnZW50SWQiOiI1ZmEzNjVlOTgwY2NmMTA3M2M0ZTdmOGQiLCJhZ2VuY3lJZCI6IjVmYzU5MDBkMzRjNDI0MDAyZmQwZDhlNiIsImlhdCI6MTYxMjQ0MDU2NiwiZXhwIjoxNjEyNTI2OTY2LCJzdWIiOiI1ZjZmN2U3OWQ1ZjdlNjA3ZjQ0MGI0M2IifQ.WYNgj3e8CyA042R2-tFLy3_kSZ_7lupGd19CYVbq5Ws";

describe('teste API', () => {
   it("deve seguir 1", (done) => {
      expect(200).to.equal(200);   

      done();
   });

   it("teste OBJ", done =>{
      expect({a: 1, b: 2}).to.have.all.keys('a', 'b');

      done();
   });

   it("teste include in OBJ", done =>{
      var obj = {account: {a: 1, b: 2}};

      expect(obj).to.have.a.property('account');

      expect(obj.account).to.have.all.keys('a', 'b');

      done();
   });

   it("teste req api", done => {
      request.get(
         {
            url : "/sessions/me",
            headers: {
               Authorization: `Bearer ${token}`
            }
           
         }, function(error, response, body){
   
            // precisamos converter o retorno para um objeto json
            var obj = {};

            try{
               obj = JSON.parse(body);
            } catch(e){
               obj = {};
            }
   
           // verifica retorno 
           expect(response.statusCode).to.equal(200);
           
           // verifica apenas 1 propriedade
           expect(obj).to.have.a.property('account');

           // verifica se existe todos fornecediso
           expect(obj.account).to.include.keys('id', 'firstName');

           done();
         }
       );  
      
   }).timeout(5000);

});