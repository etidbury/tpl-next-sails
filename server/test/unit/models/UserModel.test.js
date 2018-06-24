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

});