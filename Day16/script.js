// CALLBACK FUNCTION
function handlefunction(){
    func(10, () => {
        func(9, () => {
            func(8, () => {
                func(7, () => {
                    func(6, () => {
                        func(5, () => {
                            func(4,() => {
                                func(3,() => {
                                    func(2,() => {
                                        func(1,() => {
                                            func("Happy Independance Day");   
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

const func = (value = '', cd = (data) => {}) => {
    console.log(value);
    cd(value);
}