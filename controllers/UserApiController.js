class UserApiController {
    constructor() {
        this.getUsers = this.getUsers.bind(this);
        this.findUser = this.findUser.bind(this);
        this.putUsers = this.putUsers.bind(this);
        this.printForm = this.printForm.bind(this);
        this.getAirport = this.getAirport.bind(this);
        this.getCompany = this.getCompany.bind(this);
        this.getDeparture = this.getDeparture.bind(this);
        this.getCode = this.getCode.bind(this);
    }
    _usersList() {
        return [
            {
                id: 1,
                name: "Birute",
                lastname: "Birutiene",
                date: "2000-01-01",
                gender: "Female",
                education: "Aukstasis",
                darboviete: "none",
                biografija: "trumpa"
            },
            {
                id: 2,
                name: "Ernesta",
                lastname: "Arlauskaite",
                date: "2000-02-01",
                gender: "Female",
                education: "Profesinis",
                darboviete: "none",
                biografija: "trumpa"
            },
            {
                id: 3,
                name: "James",
                lastname: "Jordan",
                date: "2000-03-01",
                gender: "Male",
                education: "Vidurinis",
                darboviete: "none",
                biografija: "trumpa biografija"
            },
            {
                id: 4,
                name: "Ted",
                lastname: "Tadauskas",
                date: "2000-01-04",
                gender: "Male",
                education: "Vidurinis",
                darboviete: "none",
                biografija: "trumpa biografija"
            }
        ];
    }

    _airport() {
        return [
            {
                id: 1,
                airport: "Kaunas International Airport",
                airplane: "Boeing 787",
                code: "123456",
                tripnumber: "011545",
                departuretime: "07:20:00",
                arrivaltime: "08:20:00",
                arrivingairport: "Vilnius International Airport"
            },
            {
                id: 2,
                airport: "Vilnius International Airport",
                airplane: "Boeing 787",
                code: "123456",
                tripnumber: "033655",
                departuretime: "11:20:00",
                arrivaltime: "12:20:00",
                arrivingairport: "Kaunas International Airport"
            },
            {
                id: 3,
                airport: "Palanga International Airport",
                airplane: "Boeing 787",
                code: "123456",
                tripnumber: "123698",
                departuretime: "05:00:00",
                arrivaltime: "06:00:00",
                arrivingairport: "Šiauliai International Airport"
            },
            {
                id: 4,
                airport: "Šiauliai International Airport",
                airplane: "Boeing 787",
                code: "123456",
                tripnumber: "984642",
                departuretime: "10:00:00",
                arrivaltime: "11:20:00",
                arrivingairport: "Klaipėda International Airport"
            },
            {
                id: 5,
                airport: "Klaipėda Airport",
                airplane: "Boeing 787",
                code: "123456",
                tripnumber: "354649",
                departuretime: "13:20:00",
                arrivaltime: "14:00:00",
                arrivingairport: "Vilnius International Airport"
            }
        ];
    }

    _company() {
        return [
            {
                id: 1,
                name: "014654",
                airplane: "Boeing 787"
            },
            {
                id: 2,
                name: "016164",
                airplane: "Boeing 787"
            },
            {
                id: 3,
                name: "010464",
                airplane: "Boeing 787"
            },
            {
                id: 4,
                name: "050414",
                airplane: "Boeing 787"
            },
            { id: 5, name: "05144", airplane: "Boeing 787" }
        ];
    }

    _departure() {
        return [
            {
                id: 1,
                airport: "Kaunas International Airport",
                airplane: "Boeing 787",
                departuretime: "22:12:00"
            },
            {
                id: 2,
                airport: "Vilnius International Airport",
                airplane: "Boeing 787",
                departuretime: "19:11:00"
            },
            {
                id: 3,
                airport: "Palanga International Airport",
                airplane: "Boeing 787",
                departuretime: "07:11:00"
            },
            {
                id: 4,
                airport: "Šiauliai International Airport",
                airplane: "Boeing 787",
                departuretime: "11:05:00"
            },
            {
                id: 5,
                airport: "Klaipėda Airport",
                airplane: "Boeing 787",
                departuretime: "07:00:00"
            }
        ];
    }

    _code() {
        return [
            { id: 1, code: "011545" },
            { id: 2, code: "033655" },
            { id: 3, code: "123698" },
            { id: 4, code: "984642" },
            { id: 5, code: "354649" }
        ];
    }

    getAirport(req, res, next) {
        const airport = this._airport();
        return res.json(airport);
    }

    getCode(req, res, next) {
        const code = this._code();
        return res.json(code);
    }

    getDeparture(req, res, next) {
        const departure = this._departure();
        return res.json(departure);
    }
    getCompany(req, res, next) {
        const company = this._company();
        return res.json(company);
    }

    getUsers(req, res, next) {
        const users = this._usersList();
        return res.json(users);
    }
    putUsers(req, res, next) {
        const users = this._usersList();
        return res.json(users);
    }
    findUser(req, res, next) {
        const userId = parseInt(req.body.userId) || 0;
        const users = this._usersList();
        const amount = users.length;
        let result = {};
        for (let i = 0; i < amount; i++) {
            let user = users[i];
            if (user.id == userId) {
                result = user;
                break;
            }
        }
        return res.json(result);
    }

    printForm(req, res, next) {
        console.log(req.body);
        res.send();
    }
}

module.exports = UserApiController;
