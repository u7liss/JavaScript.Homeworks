    // #gsKLAsNWM
    // Через Array.prototype. створити власний foreach, filter

    Array.prototype.myForEach = function (callback) {
        const yourArray = this;
        for (const item of yourArray) {
            callback(item);
        }
    };
    
    [11, 22, 33].myForEach((x) => console.log(x));

		// -----------------


    Array.prototype.myFilter = function (predicate) {
        const arr = [];
        for (const item of this) {
            if (predicate(item)) {
                arr.push(item);
            }
        }

        return arr;
    };



    let users = [
        {name: 'anatoliy', age: 21, status: false},
        {name: 'sergiy', age: 34, status: true},
        {name: 'anna', age: 29, status: true},
        {name: 'stas', age: 28, status: false},
        {name: 'evgen', age: 30, status: true},
        {name: 'andriy', age: 32, status: false},
        {name: 'galina', age: 28, status: false},
        {name: 'olexandr', age: 24, status: true},
        {name: 'marta', age: 33, status: true},
        {name: 'olya', age: 27, status: false},
        {name: 'glib', age: 35, status: true}
    ];



    const result = users.myFilter((user) => user.status);

    console.log(result);


