import { faker } from "@faker-js/faker";
import { UserData } from "../typings/typings";
import { generateRandomNumber, getRandomString } from "./helper";
import { employmentStatuses, genders, levelOfEducations, maritalStatuses, organizations, relationships, residentTypes, sectorOfEmployments, statuses } from "../constants";

export function generateUserData(numEntries: number): UserData[] {
    const users: UserData[] = [];
    for (let i = 0; i < numEntries; i++) {
      const organisation = getRandomString(organizations);
      const status = getRandomString(statuses);
      const user: UserData = {
        organization: organisation,
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        phoneNumber: faker.phone.number(),
        password: faker.person.lastName(),
        dateJoined: faker.date.anytime(),
        status: status,
        personalInformation: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          gender: getRandomString(genders),
          maritalStatus: getRandomString(maritalStatuses),
          dateOfBirth: faker.date.anytime(),
          children: generateRandomNumber(2),
          residentType: getRandomString(residentTypes),
        },
        educationAndEmployment: {
          levelOfEducation: getRandomString(levelOfEducations),
          employmentStatus: getRandomString(employmentStatuses),
          sectorOfEmployment: getRandomString(sectorOfEmployments),
          durationOfEmployment: generateRandomNumber(1),
          officeEmail: faker.internet.email(),
          monthlyIncome: generateRandomNumber(5),
          loanRepayment: generateRandomNumber(4),
        },
        socials: {
          twitterHandle: "@" + faker.internet.userName(),
          facebookHandle: "facebook.com/" + faker.internet.userName(),
          instagramHandle: "instagram.com/" + faker.internet.userName(),
        },
        guarantor: {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          relationship: getRandomString(relationships),
          email: faker.internet.email(),
          phoneNumber: faker.phone.number(),
        },
      };
      users.push(user);
    }
    return users;
  }