const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import the app

chai.use(chaiHttp);
const { expect } = chai;

describe('Test the app', () => {
    let server;

    before((done) => {
        // Start the app on a different port for testing to avoid conflicts
        server = app.listen(3001, done); // Use port 3001 for testing
    });

    after((done) => {
        // Close the server after tests
        server.close(done);
    });

    // Example test case
    it('should return status 200 for GET /', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello, world!');
                done();
            });
    });
});

