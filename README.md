# JEEVAN DAAN
This secure transplant information database contains all data on the candidate waiting list, organ donation and matching, and transplantation. This system will be critical in helping organ transplant institutions match waiting candidates with donated organs. It will contain different interfaces for doctors, patients and an admin. 
### TECHNOLOGIES USED
* NodeJS 
* React 
* Postman 
### FUNCTIONALITY
* A user can register 
* Authorised login and sign-up for donors, patients seeking organs/blood donors, doctors and Admin. 
* Signing up will automatically add them to the relevant dashboards
* ICUs/Doctors/Patients can be added to the database by admin
* Generate table of ICUs,Patients,Doctors
* Users can find all the pateints with the required organ in the entered Pincode region.
* Delete patients from an ICU
* Generate the report of a patient 
### About
  
This secure transplant information database contains all data on the candidate waiting list, organ donation and matching, and transplantation. This system will be critical in helping organ transplant institutions match waiting candidates with donated organs. It will contain different interfaces for doctors, patients and an admin. 

The database will store information regarding each patient who will have a unique ID, name, phone no. , birth date, admission time, ICU, time of death, agreement for donation, their medical charts(blood pressure, heart rate, body temperature, blood group), organ donated/required. 
The ICU table will contain the location of the ICU, name, ICU type contact no, hospital registration and capacity.
Each doctor has a unique ID ,name ,age ,gender ,Department, post , phone no,  etc.  
There will also be a department table to keep track of the doctors registered in that department.

### CONSTRAINTS

1.  ICU table, with ICUID as PRIMARY KEY, which cannot be NULL and has to be UNIQUE. Address contains the address of the hospital, which cannot be NULL.

2.  Type is the FOREIGN KEY to ICU Type, which denoted the category of ICU, which increments itself.

3.  The patient table specifies details of the patients enrolled, with ICU as the foreign key. PatientID is >0 and it auto increments, which implies it's unique. PatientName, Relative's phone number, Admission Time cannot take NULL values. Brain Death and Agreement for donation of organs after death take binary values, 0 or 1. Patient's birthday should be in YYYYMMDD format and he should be <= 80 years old. PatientBloodType is FOREIGN KEY to Blood donors.

4.  Blood donors contains Donor_ID as primary key, and blood group type shouldn't be NULL

5.  Doctor Table contains details of the doctor, where the Doctor's ID and Department ID cannot be NULL. 

6.  Department Table's ID auto increments itself, and Department Name cannot be NULL.

7.  Blood Group's ID auto increments and the name of the blood group cannot be NULL.

8.  GUI Level constraint: The password should automatically mask with asterisks(*) while it's being typed.

9.  Only the admin can add details of ICU in the database.

10. If the patient is declared dead, and he has signed up for donating his organ, the doctor should make required changes in the database.


### FUNCTIONALITY
-   Authorised login and sign-up for donors, patients seeking organs/blood donors, doctors and Admin. Signing up will automatically add them to the relevant database

-   ICUs/Doctors can be added to the database by admin

-   Generate table of ICUs(can be displayed in order of location proximity)

-   Generate table of doctors in a particular ICU

-   Generate table of patients in a particular ICU

-   Generate a table of blood banks and ICUs on the basis of different filters, like location proximity, and donor availability. For eg, if the user is looking for a particular organ donor, he/she can fill in all the details(like blood group, and the date/time by when the organ is required). The system will then filter out the nearest ICUs which have a braindead patient who has signed for organ donation of that particular organ. It also checks if (current_time - time_of_death+ time_for_organ_transportation) is greater than the maximum time for that organ to live. On the basis of this, the system filters all the ICUs and provides a list of available donors.

-   If the requirements match according to the above criteria, then a request can be sent from one ICU to another for emergency transportation. If the request is accepted, then that patient gets deleted from the donor table and the user who requested the donor will get a notification.

-   Users can sign up for blood donation. Find the closest ICU for donation.

-   When adding the patient if the patient holding capacity of the ICU has been reached, generates a warning

-   Delete patients from an ICU

-   Delete doctors from ICU


### GUI/NAVIGATION

Login/Sign-up Admin, a doctor or a patient

### Admin 

1.  Add an ICU button and add a doctor button

2.  Button to add an ICU, clicking the add button takes the user back to page 1 and the icu gets added

### Doctor

1.  Add a patient button: Adds a patient with all the appropriate details. Clicking on the done button adds to the patient table and takes the user back to main doctor page

2.  View Doctors button: View all the doctors in the icu 

3.  View patients button: View all the patients in the icu

4.  Donors available:Donor available page -> has all the patients and can be filtered according to different parameters(mentioned in functionalities). Has a button "Ask for a donor", which redirects

5.  Ask for a donor: asks for the organ and gives the patient. It has a done button and the user gets redirected to the available matches(only dead after a certain time(stated for the organ) and accepted donors)

6.  Add Donor button: Doctor can add the patient to the donor list from here once he becomes braindead

7.  Available matches page(sorted with location)(list all the donors matching and request them)=> the other client gets notified and the patient from the other table gets deleted

### Patient page 

1.  Patient can view all the doctors on page 2.2 and their information on this page. He can edit that he wants to be a donor or not

2.  Logout button takes back to the first page, no page is accessible if the user isn't logged in

## TECHNOLOGY USED

### Web Applicatio

2.  NodeJS +Express and MySQL  in the backend

3.  React in the frontend

4.  Postman for the testing of the API's 


