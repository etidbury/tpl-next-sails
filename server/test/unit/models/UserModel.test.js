const {expect}=require('chai')


describe('UserModel', ()=> {

    describe('#find()', () =>{
        it('should check find function', (done) =>{

            User.find()
                .then((results)=> {
                    // some tests
                    return done();
                })
                .catch(done);
        });
    });

    describe('#create()', () =>{
        it('should check create function', async () =>{

            await User.create({emailAddress:"test@example.com",password:"testpassword1"});


            expect(await User.findOne({emailAddress:"test@example.com"})).to.have.property('password');

        });
    });

});