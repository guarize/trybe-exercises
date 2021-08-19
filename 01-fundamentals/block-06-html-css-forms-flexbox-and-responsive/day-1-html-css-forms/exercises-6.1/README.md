## Creating a Resume Form.
<br>

### Let's create a resume registration form based on the following specification:
### Do the validations initially by HTML
<br>

- [x] Create a `<fieldset>` for the following personal data:
* Name - Text
  * 40-character limit
  * Required field
* Email - Text
  * 50-character limit
  * Required field
* CPF - Text
  * 11-character limit
  * Required field
* Address - Text
  * 200-character limit
  * Required field
* City - Text
  * 28-character limit
  * Required field
* State - Select
  * All Brazil's states
  * Use repetition structures via JavaScript to generate the `<option>`
  * Required field
* Type - Radio Button
  * House, apartment
  * Required field
<br>

- [x] Create another `<fieldset>` for data from your last job
* Resume Summary - TextArea
  * 1000-character limit
  * Required field
* Job Title - Text 
  * 40-character limit
  * Required field
* Job Description - Text
  * 500 character limit
  * Required field
* Start Date - Text
  * Check the date format dd/mm/yyyy.
  * The day must be > 0 and <= 31.
  * The month must be > 0 and <= 12.
  * The year cannot be negative.
  * If any of the conditions are invalid at the time of form submission, display via alert a contextualized error message.
  * Required field
<br>

- [ ] Just below the form, create a button that:
* Call a JavaScript function and stop the automatic flow of the form using `preventDefault()`. Note that this will prevent HTML validations when submitting.
* Now implement, in Javascript, the validations that were requested during the assembly of the form.
* If all the data is valid, set up a `<div>` with the consolidated data that was entered into the form.
* If there is any invalid data, show in a `<div>` an error message. If the error is in the Start Date , the message must be contextualized.
<br>

- [x] Create a Clear button that clears all the fields on the form and the `<div>` with your resume as well.