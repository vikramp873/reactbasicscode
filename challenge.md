# Problem Statement

The provided template is a railway booking platform, As part of the challenge, you would need to create a two-step booking form allowing users to create a new booking in the system and list the details for the same.

## Given

1. Add a create booking button on the table heading that will work as a CTA to open the booking form.

2. Create a two-step booking form in a modal popup:

### Form 1 :

> - The first form will capture the customer's basic details which would be first name, last name, date of birth, and gender.
> - All the fields will be mandatory and gender needs to be a radio button group with the following options Male, Female and Other
> - Date of birth should be a date selector input.
> - Until the first form is successfully validated user should not be able to proceed to the second form

### Form 2:

> - The second form will capture the customer's journey details, which would be the source, destination, date of journey, and notes.
> - Source and destination sections should include country, state, and city.
> - Country and state inputs will be dropdowns that can be created using the static JSON data available in the utils folder in the template directory.
> - The date of journey should be a date selector input.
> - All fields other than journey notes are mandatory.
> - The default journey price for every trip will be 100 dollars regardless of the source and destination, but there will be few discounts provided to the customers based on their gender and age.
> - If the customer is female then a 20% discount will be applicable and if the age is greater than 50 then a 40% discount will be applicable.
> - Journey's applicable price should be visible in the form

3. After the form is validated and submitted the customer should be visible in the bookings list

4. Update the booking table to include the following new columns: Age, Gender, Source, Destination, Date of journey, Final Price of journey

### Note:

> - For any field, if the input type is not defined please use text input for the same
> - All the libraries needed are pre-installed in the template linked shared
