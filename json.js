
        // let userData = {
        //     name: "Mohd Maaz",
        //     age: 21,
        //     course: "B.tech",

        // };
        // console.log(userData);
        // console.log(typeof userData);


        // let updateValues = JSON.stringify(userData);
        // console.log(updateValues);
        // console.log(typeof updateValues);


        // let strNew = JSON.parse(updateValues)
        // console.log(strNew);
        // console.log(typeof strNew);


        // localStorage.setItem('Name', 'Mohd Maaz');
        // localStorage.setItem('Age', '21');


        let userData = {
            name: "Mohd Maaz",
            age: 21,
            course: "B.tech",

        };

        // console.log(localStorage.getItem('Name'));
        localStorage.setItem('userData',JSON.stringify(userData));
        console.log(localStorage.getItem('userData'));

        let updateValues = JSON.parse(localStorage.getItem('userData'));
        delete updateValues.course;
        localStorage.setItem('userData',JSON.stringify(updateValues));
        // localStorage.removeItem('course');
        // localStorage.clear();

        console.log(updateValues);
