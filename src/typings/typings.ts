export interface Person {
    firstName: string;
    lastName: string;
}

export interface UserData {
    organization: string;
    username: string;
    email: string;
    avatar: string;
    phoneNumber: string;
    password: string;
    dateJoined: Date;
    status: string;
    personalInformation: {
        firstName: string;
        lastName: string;
        gender: string;
        maritalStatus: string;
        dateOfBirth: Date;
        children: string;
        residentType: string;
    };
    educationAndEmployment: {
        levelOfEducation: string;
        employmentStatus: string;
        sectorOfEmployment: string;
        durationOfEmployment: string;
        officeEmail: string;
        monthlyIncome: string;
        loanRepayment: string;
    };
    socials: {
        twitterHandle: string;
        facebookHandle: string;
        instagramHandle: string;
    };
    guarantor: {
        firstName: string;
        lastName: string;
        relationship: string;
        email: string;
        phoneNumber: string;
    };
}
