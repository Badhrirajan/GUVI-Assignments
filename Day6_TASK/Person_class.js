class person {
    constructor(Name,Age,Sex,Education,Address,Contact,Email){
        this.Name = Name;
        this.Age = Age;
        this.Sex = Sex;
        this.Education = Education;
        this.Address = Address;
        this.Contact = Contact;
        this.Email = Email;
    }

    Getdetails(){
        console.log(`Myself ${this.Name} am from ${this.Address}.My Education qualification is ${this.Education}. If you have any queries you can contact  through either Mobile ${this.Contact} or Email ${this.Email}`)
    }
}

let per1 = new person('Badhri',24,'M','Engineering','Madurai',9856321478,'badhrirajan007@gmail.com')
let per2 = new person('Ajith',22,'M','Doctor','Chennai',9985314596,'ajithkumar7@gmail.com')

per1.Getdetails()
per2.Getdetails()