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
