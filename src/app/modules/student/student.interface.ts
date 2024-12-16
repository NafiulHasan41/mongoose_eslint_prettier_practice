// import { Model } from "mongoose";

import { Model } from "mongoose";

export type Guardian = {
  guardianName: string;
  relation: string;
  contactNumber: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: UserName;
  password: string;
  gender: 'male' | 'female';
  dataOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  address: {
    permanent: string;
    current: string;
  };
  guardian: Guardian;
  profileImage?: string;
  isActive: 'active' | 'inactive';
};
// for creating instance method
// export interface StudentMethods {

//   isUserExist(id: string) : Promise<Student | null>;
// }

// export type  StudentModelStatic = Model<Student, Record< string , never> , StudentMethods > 
 

// this of static method 

export interface StudentModelStaticMethod extends Model<Student> {

           // eslint-disable-next-line no-unused-vars
           isUserExist(id: string) : Promise<Student | null>; 
 }




 


