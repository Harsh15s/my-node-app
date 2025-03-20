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

    it('should return 200 for / route', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should correctly add numbers', () => {
        const result = app.add(2, 3);
        expect(result).to.equal(5);
    });
});

