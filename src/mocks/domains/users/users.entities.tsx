import { User } from "./users.type"

export const userMockData = (initialValue = {}): User => ({
    id: 101,
    firstName: "Fatima Zahra El Idrissi",
    lastName: "Dev",
    maidenName: "",
    age: 28,
    gender: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    birthDate: "",
    image: "",
    bloodGroup: "",
    height: null,
    weight: null,
    eyeColor: "",
    hair: {
        color: "",
        type: ""
    },
    domain: "",
    ip: "",
    address: {
        address: "",
        city: "",
        coordinates: {
            lat: null,
            lng: null
        },
        postalCode: "",
        state: ""
    },
    macAddress: "",
    university: "",
    bank: {
        cardExpire: "",
        cardNumber: "",
        cardType: "",
        currency: "",
        iban: ""
    },
    company: {
        address: {
            address: "",
            city: "",
            coordinates: {
                lat: null,
                lng: null
            },
            postalCode: "",
            state: ""
        },
        department: "",
        name: "",
        title: ""
    },
    ein: "",
    ssn: "",
    userAgent: "",
    ...initialValue
})