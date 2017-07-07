nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let multTable = (arr) => {
    for (var i = 1; i <= nums.length; i++) {
        let newarr = [];
        nums.map((item) => {
            newarr.push(item * i);
        });
        console.log(newarr);

    }
};

multTable(nums);