/*
 * Creates the document using the model json
 *
 * Example:
 * Name of patient: Jane Doe
 * Organization name: College Hospital
 * Gender: Female
 * Number of conditions they have: 2
 * List of all conditions:
 * - Epilepsy
 * - Sleep apnea
 */


/* had browswer/security issues for loading json file locally 
   so I included js if that's okay
	Error I got: 	
		XMLHttpRequest cannot load file:///.../data.json. Cross origin 
		requests are only supported for protocol schemes: http, data, chrome, 
		chrome-extension, https, chrome-extension-resource.

*/
 const model = {
   "resourceType": "Patient",
   "id": "xcda",
   "text": {
       "status": "generated",
       "div": "\n      \n      <p>Henry Levin the 7th</>\n    \n    </div>"
   },
   "identifier": [
     {
       "use": "usual",
       "type": {
         "coding": [
           {
             "system": "htt://hl7.org/fhir/v2/0203",
             "code": "MR"
           }
         ]
       },
       "system": "urn:oid:2.16.840.1.113883.19.5",
       "value": "12345"
     }
   ],
   "active": true,
   "name": [
     {
       "family": [
         "Levin"
       ],
       "given": [
         "Henry"
       ]
     }
   ],
   "gender": "male",
   "birthDate": "2002-09-24",
   "managingOrganization": {
     "reference": "Organization/2.16.840.1.113883.19.5",
     "display": "University Health Network"
   },
   "conditions": [
     "Diabetes",
     "High blood pressure",
     "Asthma"
   ]
 };

 const $memberName = $('<h1></h1>').text(`Name of patient: ${model.name[0].given[0]} ${model.name[0].family[0]}`);
 const $organizationName = $('<h2></h2>').text(`Organization name: ${model.managingOrganization.display}`);
 const $gender = $('<h3></h3>').text(`Gender: ${model.gender}`);
 const $conditionsLength = $('<h4></h4>').text(`Number of conditions they have: ${model.conditions.length}`);
 const $conditionsTitle = $('<h5></h5>').text('List of all conditions:');
 const $conditions = $('<ul></ul>');

 for (let i = 0; i < model.conditions.length; i++) {
   const list = $('<li></li>').text(`${model.conditions[i]}`);
   $conditions.append(list);
 }

 const $listOfConditions = $('<div></div>').append($conditionsTitle, $conditions);

 $('#app').append(
   $memberName,
   $organizationName,
   $gender,
   $conditionsLength,
   $listOfConditions,
 );