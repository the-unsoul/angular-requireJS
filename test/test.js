define(['app'], function(app) {
    describe('Testing init state of app\n', function() {
        
        it('---- {{App bootstraped}} ----', function() {
            expect(app.name).toEqual('ngUnitTest');
        });
        it(' - should be true', function() {
            expect(true).toBeTruthy();
        });
    });
});
