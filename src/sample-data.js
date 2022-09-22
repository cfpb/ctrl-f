export const SAMPLE_DATA = [
  {
    id: 0,
    title: '1. What is the FIG?',
    contents:
      "1. What is the FIG?\nWhat is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
    link: '#1',
  },
  {
    id: 1,
    title: '2. Filing Process Overview',
    contents:
      '2. Filing Process Overview This section provides instructions on entering data in the loan/application register for HMDA data collected in 2022. This document is not a substitute for Regulation C. Refer to Regulation C for a complete explanation of the reporting requirement for each data field.',
    link: '#2',
  },
  {
    id: 2,
    title: '2.1. About the 1071 platform',
    contents:
      '2.1. About the 1071 platform Filers will submit their 1071 data using a web interface. Information regarding the 1071 Platform can be located at: https://ffiec.cfpb.gov. We recommend that 1071 filers use a modern browser, such as the latest version of Google Chrome™, Mozilla® Firefox®, Internet Explorer® 11, Microsoft Edge™, or other modern browsers. The 1071 Platform will walk you through the loan/application register filing process. Certification will also occur within the 1071 Platform. An authorized representative of your institution with knowledge of the data submitted shall certify to the accuracy and completeness of the data submitted.  ',
    link: '#2.1',
  },
  {
    id: 3,
    title: '2.2. Financial institution identifying information',
    contents:
      '2.2. Financial institution identifying information Requirement §1002.109(b) of the proposed rulemaking covers the list of identifying information that financial institutions are required to report, but does not specify exactly how or when that data is to be reported, only that it must be associated with each submission. The specific instructions to FIs for how to submit identifying information will be covered by the FIG. We did not ask detailed questions about submitting FI identifying information in user research sessions, instead our initial proposal is based on a goal of incorporating the collection of FI identifying information into existing data submission steps, to minimize the number of times filers are expected to provide new information, and to take advantage of the expectation that this information will usually not change much from year to year. Users submit FI info each year, alongside their SBLAR, as part of their filing. This gives CFPB a snapshot of each FI’s “profile” each filing year. Users may enter and update FI info at any time after the filing year becomes available in the system. They must certify their FI info in order to submit it (similar to the SBLAR). Like SBLAR, they may modify and re-certify after filing season is over, to ensure high data quality. In order to make FI info easy and streamlined for FIs to submit, the system will pre-populate all fields with known values. The FI info screen will show any info entered this filing year, if any. Any remaining fields will show the FI info from the previous filing year, if that exists. If the FI has not filed before, the system will pull in any known data from CFPB data sources such as the MED. The system will retain the FI info each time it is updated, along with the filing year it is associated with, the user who updated it, and a timestamp. For a given filing year, the most recently-certified FI info is considered canonical. The user may edit almost any data point in the FI info, but not the LEI. Since the LEI is the primary key that differentiates FIs in the system, it cannot be changed. Instead, if a FI has a new LEI, we will consider it a new FI, so we will create a new FI record in the system and re-affiliate its users to it. ',
    link: '#2.2',
  },
  {
    id: 4,
    title: '2.3. Certification',
    contents:
      '2.3. Certification As part of the submission process, an authorized representative of your institution with knowledge of the data submitted shall certify to the accuracy and completeness of the data submitted. Filers will not fax or e-mail the signed certification. If the SBLAR passes validation, the user may certify the submission. Once the SBLAR is certified, the system sends notification of that action to all users for that FI. After a filing is certified, users for the FI may still upload files, enter records, discard files, and add records to the system. If they do so and certify the SBLAR again, the new data submitted will replace the previously-submitted set of data in the canonical data set.',
    link: '#2.3',
  },
  {
    id: 5,
    title: '3. Creating a 1071 submission file',
    contents:
      '3. Creating a 1071 submission file The following information describes the format used when filing HMDA data with the Bureau.',
    link: '#3',
  },
  {
    id: 6,
    title: '3.1. Online data submission',
    contents:
      '3.1. Online data submission The system will offer multiple methods to enter loan application records for filing. Methods: (a) upload a file of records in a specified format, (b) upload a set of records as structured JSON via the platform API. These methods may be used in any combination any number of times until the user is finished uploading records. In all methods, each action (upload, discard, certify) will be associated with the user taking the action and the time and date of the action. The two methods will share a common validation process. Upon upload, each record will be parsed and saved to the system as a loan application record. If the records cannot be parsed successfully, the user receives a descriptive notification of the error and where it occurred, and no records are saved. After parsing, the records go through a validation process (described in the Validation section below) where each record is checked for validity. The system notifies the user of all validity checks that failed, if any. If the file had any failures, it is invalid and can’t be added to the SBLAR. If the file had any validity warnings, the filer must acknowledge them in order to add the file to the SBLAR. The user may add any valid files to their SBLAR. The user may discard files that are not valid or that they do not want to include in the SBLAR (e.g. if they discover a mistake). Once the user indicates that their SBLAR is ready—that they have added all records for the filing year—the system performs validation checks that consider the entire SBLAR (instead of individual records, which were already validated in a previous step). If the SBLAR passes validation, the user may certify the submission. Once the SBLAR is certified, the system sends notification of that action to all users for that FI. After a filing is certified, users for the FI may still upload files, enter records, discard files, and add records to the system. If they do so and certify the SBLAR again, the new data submitted will replace the previously-submitted set of data in the canonical data set.',
    link: '#3.1',
  },
  {
    id: 7,
    title: '3.2. File format',
    contents:
      '3.2. File format Given the accessibility needs and overall simplicity, CSV is the recommended file format for the initial phase of the SBL platform. While limitations exist, CSV presents the most convenient option for entities to provide structured data. Characteristics of the proposed CSV structure are as follows: Each field will be separated by a comma (,)\nEach record will be separated by a line break (CRLF)\nThe last record will not have a line break (this is an optional consideration but should be stated explicitly either way)\nThe first row of the file will contain a header separated by commas. The column names in the header will be defined in the Data Points/Filing Instruction Guide.\nDouble quotes will be used to encode fields with embedded commas or line breaks. Requiring all fields to use double quotes is optional but should be stated explicitly\nDouble quotes appearing within an already double quoted field should be escaped by a preceding double quote (eg “”)\nCharacter encoding should most likely be UTF-8, however ASCII may be easier for legacy Excel users to produce.\nData points that allow multiple responses will be separated by semi colons (;) with no spaces',
    link: '#3.2',
  },
  {
    id: 8,
    title: '4. Data points',
    contents:
      '4. Data points What follows is a comprehensive list of every data point in a 1071 file and what they cover',
    link: '#4',
  },
  {
    id: 9,
    title: '4.1. Unique Loan Identifier',
    contents:
      '4.1. Unique Loan Identifier Rule Section: 107(a)(1) Unique Loan Identifier',
    link: '#4.1',
  },
  {
    id: 10,
    title: 'Field 1: Unique Loan Identifier',
    contents:
      'Field 1: Unique Loan Identifier Required for all loan/application records. Instructions Enter a Unique Loan Identifier that: Begins with the financial institution’s Legal Entity Identifier as defined in § 107(a)(1)\nFollows the Legal Entity Identifier with up to 23 additional characters to identify the covered loan or application, which:\nMay be letters, numerals, or a combination of letters and numerals;\nMust be unique within the financial institution; and\nMust not include any information that could be used to directly identify the applicant or borrower. Field type: Text Example\n10BX939C5543TQA1144M999143938\nValidations\nMust be in text form, not exceeding 45 characters\nMust not be left blank',
    link: '#4.1.1',
  },
  {
    id: 11,
    title: '4.2. Application Date',
    contents: '4.2. Application Date Rule Section: 107(a)(2) Application Date',
    link: '#4.2',
  },
  {
    id: 12,
    title: 'Field 2: Application Date',
    contents:
      'Field 2: Application Date Required for all loan/application records. Instructions Enter, in numeral form, the date the application was received or the date shown on the application form by year, month, and day, using YYYYMMDD format. Field type: Date Example\nFor July 21, 2024, enter 20240721\nValidations\nMust be in numeral form in YYYYMMDD format\nMust not be left blank',
    link: '#4.2.1',
  },
  {
    id: 13,
    title: '4.3. Application Method',
    contents:
      '4.3. Application Method Rule Section: 107(a)(3) Application Method',
    link: '#4.3',
  },
  {
    id: 14,
    title: 'Field 3: Application Method',
    contents:
      'Field 3: Application Method Required for all loan/application records. Instructions Indicate the means by which the applicant submitted the application by entering a code from the specified list of values. Field type: Choice Valid values \t Codes  \n1 \t Code 1 - In-person  \n2 \t Code 2 - Telephone  \n3 \t Code 3 - Online  \n4 \t Code 4 - Mail Validations\nMust equal 1, 2, 3 or 4\nMust not be left blank',
    link: '#4.3.1',
  },
  {
    id: 15,
    title: '4.4. Application Recipient',
    contents:
      '4.4. Application Recipient Rule Section: 107(a)(4) Application Recipient',
    link: '#4.4',
  },
  {
    id: 16,
    title: 'Field 4: Application Recipient',
    contents:
      'Field 4: Application Recipient Required for all loan/application records. Instructions Indicate the application recipient by entering a code from the specified list of values. Field type: Choice Valid values \t Codes  \n1 \t Code 1 – The applicant submitted the application directly to the FI or its affiliate  \n2 \t Code 2 – The applicant submitted the application indirectly to the FI via a third party  Validations\nMust equal 1 or 2\nMust not be left blank',
    link: '#4.4.1',
  },
  {
    id: 17,
    title: '4.5. Credit Type',
    contents:
      '4.5. Credit Type Rule Section: 107(a)(5) Credit Type\nCredit Product\nFree Form Text Field for Other Credit Products\nType of Guarantee\nFree Form Text Field for Other Guarantee\nLoan Term: N/A Flag\nLoan Term',
    link: '#4.5',
  },
  {
    id: 18,
    title: 'Field 5: Credit Product',
    contents:
      'Field 5: Credit Product Required for all loan/application records. Instructions Indicate the credit product by entering a code from the specified list of values. Field type: Choice Valid values \t Codes \t Instructions  \n1 \t Code 1 - Term loan—unsecured  \t  \n2 \t Code 2 - Term loan—secured \t  \n3 \t Code 3 - Line of credit—unsecured \t  \n4 \t Code 4 - Line of credit—secured \t  \n5 \t Code 5 - Credit card \t  \n6 \t Code 6 - Merchant cash advance  \t  \n7 \t Code 7 - Other sales-based financing transaction  \t  \n8 \t Code 8 – Other (specify in text below)  \t  \n88 \t  Code 88 - Not provided by applicant and otherwise undetermined  \t  Enter Code 88 if the credit product is not provided by applicant and is otherwise undetermined  Validations\nMust equal 1, 2, 3, 4, 5, 6, 7, 8, or 88\nMust not be left blank',
    link: '#4.5.1',
  },
  {
    id: 19,
    title: 'Field 6: Free Form Text Field for Other Credit Products',
    contents:
      'Field 6: Free Form Text Field for Other Credit Products Required if Credit Type: Credit Product is Code 8. Leave blank if Code 8 is not entered. Instructions Specify in text the Other Credit Product if Code 8 is entered. Field type: Text Validations\nMust be in text form.',
    link: '#4.5.2',
  },
  {
    id: 20,
    title: 'Field 7: Type of Guarantee',
    contents:
      "Field 7: Type of Guarantee Required for all loan/application records. Instructions Indicate the type or types of guarantee by entering up to five codes from the specified list of values. If there is more than one Type of Guarantee, enter up to five, in any order, separated by semicolons. Field type: Multiple Choice Example\nFor FHA insurance, enter 7.\nFor an owner(s)'s personal guarantee, USDA guarantee, and other federal guarantee, enter 1;6;9. Valid values \t Code  \n1 \t Code 1 - Personal guarantee – owner(s)  \n2 \t Code 2 - Personal guarantee—non-owner(s)  \n3 \t Code 3 - SBA guarantee—7(a) program  \n4 \t Code 4 - SBA guarantee—504 program  \n5 \t Code 5 - SBA guarantee—other  \n6 \t Code 6 - USDA guarantee  \n7 \t Code 7 - FHA insurance  \n8 \t Code 8 - Bureau of Indian Affairs guarantee  \n9 \t Code 9 - Other Federal guarantee  \n10 \t Code 10 - State or local government guarantee  \n11 \t Code 11 - Other guarantee (specify in text below)   \n12 \t Code 12 - No guarantee Validations\nMust equal up to five of the following: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, or 12\nMust not be left blank\nMust not exceed five codes entered",
    link: '#4.5.3',
  },
  {
    id: 21,
    title: 'Field 8: Free Form Text Field for Other Guarantee',
    contents:
      'Field 8: Free Form Text Field for Other Guarantee Conditionally required if Type of Guarantee is Code 11. Leave blank if Code 11 is not entered. Instructions Specify in text the Other Guarantee if Code 11 is entered. If there is more than one Other Guarantee entered, separate each one by a semicolon. Otherwise, leave this data field blank. Field Type: Text Validations\nMust be in text form.',
    link: '#4.5.4',
  },
  {
    id: 22,
    title: 'Field 9: Loan Term: N/A Flag',
    contents:
      'Field 9: Loan Term: N/A Flag Required for all loan/application records. Instructions\nIndicate whether Loan Term is applicable for this application for credit by entering a code from the specified list of values. Field type: Choice Valid values \t Codes  \n0 \t Code 0 – Applicable  \n99 \t Code 99 – Not Applicable Validations\nMust equal 0 or 99\nMust not be left blank',
    link: '#4.5.5',
  },
  {
    id: 23,
    title: 'Field 10: Loan Term',
    contents:
      'Field 10: Loan Term Conditionally required if Field 9: Loan Term: N/A Flag is Code 0. Leave blank if Code 0 is not entered. Instructions Enter, in numerical form, the number of months in the loan term for products that have a loan term. Field type: Numeric Example\nFor a loan term of 36 months, enter 36\nValidations\nMust be in numeric form.',
    link: '#4.5.6',
  },
  {
    id: 24,
    title: '4.6. Credit Purpose',
    contents:
      '4.6. Credit Purpose Rule Section: 107(a)(6) Credit Purpose\nCredit Purpose\nFree Form Text Field for Other Credit Purpose',
    link: '#4.6',
  },
  {
    id: 25,
    title: 'Field 11: Credit Purpose',
    contents:
      'Field 11: Credit Purpose Required for all loan/application records. Instructions Indicate the credit purpose(s) by entering a code from the specified list of values. If there is more than one Credit Purpose, enter up to three, in any order, separated by a semicolon. Field type: Multiple Choice Example\nFor purchase, refinance, or rehabilitation/repair of equipment, enter 6.\nFor business acquisition and line increase, enter 10;12. Valid values \t Codes \t Instructions  \n1 \t Code 1 - Purchase, construction/improvement, or refinance of   owner-occupied dwelling(s) \t  \n2 \t Code 2 - Purchase, construction/improvement, or refinance of   non-owner-occupied dwelling(s) \t  \n3 \t Code 3 - Purchase, construction/improvement, or refinance of non-owner occupied, non-dwelling real estate \t  \n4 \t Code 4 - Purchase, construction/‍‌improvement, or refinance of owner-occupied, non-dwelling real estate \t  \n5 \t Code 5 - Purchase, refinance, or rehabilitation/repair of motor vehicle(s) (including light and heavy trucks) \t  \n6 \t Code 6 - Purchase, refinance, or rehabilitation/repair of equipment \t  \n7 \t Code 7 - Working capital (includes inventory or floor planning) \t  \n8 \t Code 8 - Business start-up \t  \n9 \t Code 9 - Business expansion \t  \n10 \t Code 10 - Business acquisition \t  \n11 \t Code 11 - Refinance existing debt (other than refinancings listed above) \t  \n12 \t Code 12 - Line increase \t  \n13 \t  Code 13 - Other (specify in text below) \t  \n88 \t Code 88 - Not provided by applicant and otherwise undetermined  \t Enter Code 88 if the credit purpose for the application is not known  \n99 \t Code 99 - Not applicable \t Enter Code 99 for a credit product that generally has numerous potential purposes, such as a credit card.  Validations\nMust equal up to three of the following: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 88, or 99\nMust not be left blank\nMust not exceed three codes',
    link: '#4.6.1',
  },
  {
    id: 26,
    title: 'Field 12: Free Form Text Field for Other Credit Purpose',
    contents:
      'Field 12: Free Form Text Field for Other Credit Purpose Conditionally required if Field 11: Credit Purpose is Code 0. Leave blank if Code 0 is not entered. Instructions Specify in text the Other Credit Purpose if Code 13 is entered. Do not enter more than one Other Credit Purpose. Otherwise, leave this data field blank. Field type: Text Validations\nMust be in text form.',
    link: '#4.6.2',
  },
  {
    id: 27,
    title: '4.7. Amount Applied For',
    contents: '4.7. Amount Applied For Rule Section: 107(a)(7)',
    link: '#4.7',
  },
  {
    id: 28,
    title: 'Field 13: Amount Applied For: N/A or NP Flag',
    contents:
      'Field 13: Amount Applied For: N/A or NP Flag Required for all loan/application records. Instructions Indicate whether Amount Applied For is provided by entering a code from the specified list of values. Field type: Choice Valid values \t Codes \t Instructions  \n0 \t Code 0 – Applicable and Provided \t  \n88 \t Code 88 – Applicable and Not Provided \t Enter Code 88 if the product applied for does involve a specific amount requested or underwritten, but the amount requested or underwritten is not provided by the applicant and is not otherwise undetermined.  \n99 \t Code 99 – Not Applicable  \t Enter Code 99 if the product applied for does not involve a specific amount requested or underwritten. ',
    link: '#4.7.1',
  },
  {
    id: 29,
    title: 'Field 14: Amount Applied For',
    contents:
      'Field 14: Amount Applied For Conditionally required if Amount Applied For: NA/NP Flag is Code 0. Leave blank if Code 0 is not entered. Instructions Enter one of the following: The dollar amount for initial amount of credit/credit limit requested by applicant at the application stage or later; or\nIf application is in response to a firm offer that specifies an amount, the dollar amount of the firm offer; or\nIf applicant did not request a particular amount but FI underwrites for a specific amount, the dollar amount underwritten; or\nIf applicant requested a range of dollar amounts, the midpoint of that range; or\nIf application is a request for additional amounts on an existing account, the dollar amount of additional credit requested. Field type: Numeric Example\nFor $12,345, enter 12345\nValidations\nMust be in numeric form.',
    link: '#4.7.2',
  },
  {
    id: 30,
    title: '4.8. Amount Approved or Originated',
    contents: '4.8. Amount Approved or Originated Rule Section: 107(a)(8)',
    link: '#4.8',
  },
  {
    id: 31,
    title: 'Field 15: Amount Approved or Originated',
    contents:
      'Field 15: Amount Approved or Originated Conditionally required if Field 16: Action Taken is Code 1 or 2. Leave blank if Codes 1 or 2 are not entered. Instructions Enter one of the following: For a closed-end origination, the amount of the originated loan for a closed-end origination; or\nFor a closed-end application, the highest amount approved if the application was approved but not accepted; or\nFor an open-end origination, the amount of the credit limit approved for the originated loan; or\nFor an open-end application, the highest amount approved if the application was approved but not accepted. Field type: Numeric Validations\nMust be in numeric form.',
    link: '#4.8.1',
  },
  {
    id: 32,
    title: '4.9. Action Taken',
    contents: '4.9. Action Taken Rule Section: 107(a)(9)',
    link: '#4.9',
  },
  {
    id: 33,
    title: 'Field 16: Action Taken',
    contents:
      'Field 16: Action Taken Required for all loan/application records. Instructions Indicate whether the application was Originated, Approved but not accepted, Denied, Withdrawn by applicant, or Incomplete by entering a code from the specified list. Valid values \t Codes  \n1 \t Code 1 - Originated   \n2 \t Code 2 - Approved but not accepted   \n3 \t Code 3 - Denied   \n4 \t Code 4 - Withdrawn by applicant   \n5 \t  Code 5 - Incomplete Validations\nMust equal 1, 2, 3, 4, or 5.\nMust not be left blank.',
    link: '#4.9.1',
  },
  {
    id: 34,
    title: '4.10. Action Taken Date',
    contents: '4.10. Action Taken Date Rule Section: 107(a)(10)',
    link: '#4.10',
  },
  {
    id: 35,
    title: 'Field 17: Action Taken Date',
    contents:
      'Field 17: Action Taken Date Required for all loan/application records. Instructions Enter, in numeral form, the date the action was taken by year, month, and day, using YYYYMMDD format. Field type: Date Example\nFor July 22, 2024, enter 20240722\nValidations\nMust be in numeral form in YYYYMMDD format\nMust not be left blank',
    link: '#4.10.1',
  },
  {
    id: 36,
    title: '4.11. Denial Reasons',
    contents:
      '4.11. Denial Reasons Rule Section: 107(a)(11) Denial Reasons\nDenial Reason(s)\nOther Free Form Text Field for Denial Reason(s)',
    link: '#4.11',
  },
  {
    id: 37,
    title: 'Field 18: Denial Reason(s)',
    contents:
      'Field 18: Denial Reason(s) Required for all loan/application records Instructions For a denied application, indicate the reason(s) for denial by entering up to four principal reasons for denial from the specified list of values. Field Type: Multiple Choice Example\nIf Cashflow, enter 4.\nIf Cashflow, Collateral, Time in business, and Government criteria, enter 4;5;6;7 or 7;5;6;4 (or any other order of these numbers separated by semicolons). Valid values \t Codes \t Instructions  \n1 \t Code 1 - Credit characteristics of the business  \t  \n2 \t Code 2 - Credit characteristics of the principal owner(s) or guarantor(s)  \t  \n3 \t Code 3 - Use of loan proceeds  \t  \n4 \t Code 4 - Cashflow  \t  \n5 \t Code 5 - Collateral \t  \n6 \t Code 6 - Time in business \t  \n7 \t Code 7 - Government criteria \t  \n8 \t Code 8 - Aggregate exposure \t  \n9 \t Code 9 - Unverifiable information  \t  \n10 \t Code 10 – Other (specify in text below) \t  \n99 \t Code 99 – Not Applicable \t Enter Code 99 if application was not denied (e.g., loan is originated by the financial institution) Validations\nMust equal some combination of the following: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, or 99\nCodes must be separated by semicolons ;\nMust not be left blank',
    link: '#4.11.1',
  },
  {
    id: 38,
    title: 'Field 19: Other Free Form Text Field for Denial Reason(s)',
    contents:
      "Field 19: Other Free Form Text Field for Denial Reason(s) Conditionally required if Field 18: Denial Reason(s) is Code 10. Leave blank if Code 10 is not entered. Instructions Specify in text the Other Denial Reason(s) if Code 10 is entered. If there is more than one Other Denial Reason entered, separate each one by a semicolon. Field type: Text Example\nConcerns about effects of applicant's business on climate change; anticipated decline of the industry the applicant's business is in\nValidations\nMust be in text form.",
    link: '#4.11.2',
  },
  {
    id: 39,
    title: '4.12. Pricing information',
    contents:
      '4.12. Pricing information Rule Section: 107(a)(12) Fixed rate transaction\nInterest rate: N/A flag\nInterest rate\n \nTotal origination charges\nN/A flag\nTotal origination charges\nVariable rate transaction\nMargin: N/A flag\nMargin\nIndex name\nIndex name: Other\nIndex value: N/A flag\nIndex value\n \nAmount of total\nBroker fees\nNon-interest charges to be imposed over the first annual period',
    link: '#4.12',
  },
  {
    id: 40,
    title: 'Field 20: Fixed rate: Interest rate: N/A flag',
    contents:
      'Field 20: Fixed rate: Interest rate: N/A flag Required for all loan/application records. Instructions Indicate whether the Fixed rate: Interest rate data element is applicable by entering a code from the specified list of values. Field type: Choice Valid values \t Codes \t Instructions  \n0 \t Code 0 - Applicable \t  \n99 \t Code 99 - Not applicable \t Enter Code 99 if: The application is denied, withdrawn, or incomplete, or\nThe approved loan is not fixed rate\nValidations\nMust equal 0 or 99\nMust not be left blank',
    link: '#4.12.1',
  },
  {
    id: 41,
    title: 'Field 21: Fixed rate: Interest rate',
    contents:
      'Field 21: Fixed rate: Interest rate Conditionally required if Field 20: Fixed rate: Interest rate: N/A flag is Code 0. Leave blank if Code 0 is not entered. Instructions For originated credit and credit that is approved but not accepted, if a fixed rate transaction, enter, as a percentage, to at least three (3) decimal places, the interest rate. Numbers calculated to beyond three (3) decimal places may either be reported beyond three (3) decimal places or rounded or truncated to three (3) decimal places. Decimal place trailing zeros may be either included or omitted. Field type: Numeric Example values\nIf the fixed interest rate is 4.125%, enter 4.125\nIf 4.500%, enter 4.5, 4.50, or 4.500\nValidations\nIf present, must be a numeric value',
    link: '#4.12.2',
  },
  {
    id: 42,
    title: 'Field 22: Variable rate transaction: Margin: N/A flag',
    contents:
      'Field 22: Variable rate transaction: Margin: N/A flag Required for all loan/application records. Instructions Indicate whether the Variable rate transaction: Margin data element is applicable by entering a code from the specified list of values. Field type: Choice Valid values \t Codes \t Instructions  \n0 \t Code 0 - Applicable \t  \n1 \t Code 1 - Not applicable \t Enter Code 1 if: The application is denied, withdrawn, or incomplete, or\nThe transaction has no interest rate, or\nThe approved loan is not variable rate\nValidations\nMust equal 0 or 1\nMust not be left blank',
    link: '#4.12.3',
  },
  {
    id: 43,
    title: 'Field 23: Variable rate transaction: Margin',
    contents:
      'Field 23: Variable rate transaction: Margin Conditionally required if Field 22: Variable rate transaction: Margin: N/A flag is Code 0. Leave blank if Code 0 is not entered. Instructions For originated credit and credit that is approved but not accepted, if a variable rate transaction, enter, as a percentage, to at least three (3) decimal places, the interest rate. Numbers calculated to beyond three (3) decimal places may either be reported beyond three (3) decimal places or rounded or truncated to three (3) decimal places. Decimal place trailing zeros may be either included or omitted. Field type: Numeric Example values\nIf the fixed interest rate is 2.525%, enter 2.525\nIf 2.500%, enter 2.5, 2.50, or 2.500\nValidations\nIf present, must be a numeric value',
    link: '#4.12.4',
  },
  {
    id: 44,
    title: 'Field 24: Variable rate transaction: Index name',
    contents:
      'Field 24: Variable rate transaction: Index name Required for all loan/application records. Instructions For originated credit and credit that is approved but not accepted, if a variable rate transaction, enter a code to indicate the index name from the specified list of values. Valid values \t Codes \t Instructions  \n1 \t Code 1 - Wall Street Journal Prime \t  \n2 \t Code 2 - 6-month CD rate \t  \n3 \t Code 3 - 1-year T-Bill \t  \n4 \t Code 4 - 3-year T-Bill \t  \n5 \t Code 5 - 5-year T-Note \t  \n6 \t Code 6 - 12-month average of 10-year T-Bill \t  \n7 \t Code 7 - Cost of Funds Index - National \t  \n8 \t Code 8 - Cost of Funds Index - 11th District \t  \n9 \t Code 9 - Other (specify in text in the next field) \t  \n99 \t Code 99 - Not Applicable \t Enter Code 99 if: The application is denied, withdrawn, or incomplete, or\nThe transaction has no interest rate, or\nThe approved loan is not variable rate\nValidations\nMust equal 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, or 99\nMust not be left blank',
    link: '#4.12.5',
  },
  {
    id: 45,
    title: 'Field 25: Variable rate transaction: Index name: Other',
    contents:
      'Field 25: Variable rate transaction: Index name: Other Conditionally required if Field 24: Variable rate transaction: Index name is Code 9. Leave blank if Code 9 is not entered. Instructions Specify in text the Other Index Name if Code 9 is entered. Field type: Text Validations\nMust not exceed 100 characters in length.',
    link: '#4.12.6',
  },
  {
    id: 46,
    title: 'Field 26: Variable Rate Transaction: Index Value',
    contents:
      'Field 26: Variable Rate Transaction: Index Value Conditionally required if Pricing Information: Variable Rate Transaction: Index Name is not Code 99. Leave blank if Code 99 is entered. Instructions For originated credit and credit that is approved but not accepted, if a variable rate transaction, enter, as a percentage, to at least three (3) decimal places, the index value. Numbers calculated to beyond three (3) decimal places may either be reported beyond three (3) decimal places or rounded or truncated to three (3) decimal places. Decimal place trailing zeros may be either included or omitted. Field type: Numeric Example\nIf 1.025%, enter 1.025\nIf 3.100%, enter 3.1\nValidations\nIf present, must be a numeric value',
    link: '#4.12.7',
  },
  {
    id: 47,
    title: 'Field 27: Total Origination Charges',
    contents:
      'Field 27: Total Origination Charges Required for all loan/application records. Instructions For originated credit and credit that is approved but not accepted, enter, in dollars, the amount of the total origination charges. Enter 0 if there are no origination charges associated with the application or if the application is denied, withdrawn, or incomplete. Field type: Numeric Example\nIf $2,500, enter 2500 or 2500.00\nIf $2,582.91, enter 2582.91\nIf $0, enter 0\nValidations\nIf present, must be a numeric value',
    link: '#4.12.8',
  },
  {
    id: 48,
    title: 'Field 28: Amount of Total Broker Fees',
    contents:
      'Field 28: Amount of Total Broker Fees Required for all loan/application records. Instructions For originated credit and credit that is approved but not accepted, enter, in dollars, the amount of the total broker fees. Enter 0 if there are no broker fees associated with the application or if the application is denied, withdrawn, or incomplete. Field type: Numeric Example\nIf $1,125, enter 1125 or 1125.00\nIf $1,125.76, enter 1125.76\nIf $0, enter 0\nValidations\nIf present, must be a numeric value',
    link: '#4.12.9',
  },
  {
    id: 49,
    title:
      'Field 29: Amount of Total Non-Interest Charges to be Imposed Over the First Annual Period',
    contents:
      'Field 29: Amount of Total Non-Interest Charges to be Imposed Over the First Annual Period Required for all loan/application records. Instructions For originated credit and credit that is approved but not accepted, enter, in dollars, the amount of the total non-interest charges scheduled to be imposed over the first annual period. Enter 0 if there are no non-interest charges scheduled to be imposed over the first annual period or if the application is denied, withdrawn, or incomplete. Field Type: Numeric Example\nIf $1,034, enter 1034 or 1034.00\nIf $1,034.97, enter 1034.97\nIf $0, enter 0\nValidations\nIf present, must be a numeric value',
    link: '#4.12.10',
  },
  {
    id: 50,
    title:
      'Field 30: MCA: Difference Between Amount Advanced and Amount to be Repaid: N/A Flag',
    contents:
      'Field 30: MCA: Difference Between Amount Advanced and Amount to be Repaid: N/A Flag Required for all loan/application records. Instructions Indicate whether Pricing Information: MCA: Difference Between Amount Advanced and Amount to be Repaid is applicable by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n0 \t Code 0 – Applicable \t  \n99 \t Code 99 – Not Applicable \t Enter code 99 if: The application is denied, withdrawn, or incomplete, or\nThe approved loan is not a merchant cash advance or other sales-based financing\nValidations\nMust equal 0 or 99\nMust not be left blank',
    link: '#4.12.11',
  },
  {
    id: 51,
    title:
      'Field 31: MCA: Difference Between Amount Advanced and Amount to be Repaid',
    contents:
      'Field 31: MCA: Difference Between Amount Advanced and Amount to be Repaid Conditionally required if Field 30: MCA: Difference Between Amount Advanced and Amount to be Repaid: N/A Flag is 0. Leave blank if Code 0 is not entered. Instructions For originated credit and credit that is approved but not accepted, if a merchant cash advance or other sales-based financing transaction, enter, in dollars, the difference between the amount advanced and the amount to be repaid. Field Type: Numeric Example\nIf $3,500, enter 3500 or 3500.00\nIf $3,527.14, enter 3527.14\nIf $0, enter 0\nValidations\nIf present, must be a numeric value',
    link: '#4.12.12',
  },
  {
    id: 52,
    title: 'Field 32: Prepayment Penalty Could be Imposed',
    contents:
      'Field 32: Prepayment Penalty Could be Imposed Required for all loan/application records. Instructions For originated credit and credit that is approved but not accepted, enter whether a prepayment penalty could be included under current policies and procedures by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n1 \t Code 1 – Yes \t  \n2 \t Code 2 – No \t  \n99 \t Code 99 – Not Applicable \t Enter Code 99 if the application is denied, withdrawn, or incomplete  Validations\nMust equal 1, 2, or 99\nMust not be left blank',
    link: '#4.12.13',
  },
  {
    id: 53,
    title: 'Field 33: Prepayment Penalty Exists',
    contents:
      'Field 33: Prepayment Penalty Exists Required for all loan/application records. Instructions For originated credit and credit that is approved but not accepted, indicate whether the terms of the transaction include a prepayment penalty by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n1 \t Code 1 – Yes \t  \n2 \t Code 2 – No \t  \n99 \t Code 99 – Not Applicable \t Enter Code 99 if the application is denied, withdrawn, or incomplete  Validations\nMust equal 1, 2, or 99\nMust not be left blank',
    link: '#4.12.14',
  },
  {
    id: 54,
    title: '4.13. Census Tract',
    contents: '4.13. Census Tract Rule Section: 107(a)(13)',
    link: '#4.13',
  },
  {
    id: 55,
    title: 'Field 34: Type of Address',
    contents:
      'Field 34: Type of Address Required for all loan/application records. Instructions Enter the type of address or location used to determine the census tract by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes  \n1 \t Code 1 – Address or location where the loan proceeds will   principally be applied   \n2 \t Code 2 – Address or location of borrower’s main office or headquarters   \n3 \t Code 3 - Another address or location associated with the applicant.   \n88 \t  Code 88 – Address was not provided by applicant and is otherwise undetermined.  Validations\nMust equal 1, 2, 3, or 88\nMust not be left blank',
    link: '#4.13.1',
  },
  {
    id: 56,
    title: 'Field 35: Tract Number',
    contents:
      'Field 35: Tract Number Conditionally required if Field 34: Type of address is Code 1, 2, or 3. Leave blank if Code 88 is entered. Instructions Enter the 11-digit census tract number as defined by the U.S. Census Bureau of one of the following: Address where the loan proceeds will principally be applied, if known; or\nIf the proceeds address is not known, location of borrower’s main office or headquarters; or\nIf neither of those addresses are known, another address or location associated with the applicant Do not use decimals. Field Type: Numeric Example 06037264000 (a census tract within Los Angeles County, CA) Validations\nIf present, must be an 11-digit number in numeric form',
    link: '#4.13.2',
  },
  {
    id: 57,
    title: '4.14. Gross Annual Revenue',
    contents: '4.14. Gross Annual Revenue Rule Section: 107(a)(14)',
    link: '#4.14',
  },
  {
    id: 58,
    title: 'Field 36: Gross Annual Revenue: NP Flag',
    contents:
      'Field 36: Gross Annual Revenue: NP Flag Required for all loan/application records. Instructions Indicate whether GAR is provided by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n0 \t Code 0 – Provided   \t  \n88 \t Code 88 – Not Provided \t Enter Code 88 if GAR is not provided by applicant and is otherwise undetermined. Validations\nMust equal 0 or 88\nMust not be left blank',
    link: '#4.14.1',
  },
  {
    id: 59,
    title: 'Field 37: Gross Annual Revenue',
    contents:
      'Field 37: Gross Annual Revenue Conditionally required if Field 37: NP Flag is Code 0. Leave blank if Code 0 is not entered. Instructions Enter the dollar amount of the applicant’s Gross Annual Revenue (GAR) during its last fiscal year prior to when the information is collected. Field Type: Numeric Example\nIf $855,430, enter 855430 or 855430.00\nIf $855,430.17, enter 855430.17\nIf $0, enter 0\nValidations\nIf present, must be in numeric form',
    link: '#4.14.2',
  },
  {
    id: 60,
    title: '4.15. North American Industry Classification System (NAICS) Code',
    contents:
      '4.15. North American Industry Classification System (NAICS) Code Rule Section: 107(a)(15)',
    link: '#4.15',
  },
  {
    id: 61,
    title:
      'Field 38: North American Industry Classification System (NAICS) Code: NP Flag',
    contents:
      'Field 38: North American Industry Classification System (NAICS) Code: NP Flag Required for all loan/application records. Instructions Indicate whether NAICS Code is provided by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n0 \t Code 0 – Provided \t  \n88 \t Code 88 – Not Provided \t Enter Code 88 if NAICS Code is not provided by applicant and is otherwise undetermined. Validations\nMust equal 0 or 88\nMust not be left blank',
    link: '#4.15.1',
  },
  {
    id: 62,
    title:
      'Field 39: North American Industry Classification System (NAICS) Code',
    contents:
      'Field 39: North American Industry Classification System (NAICS) Code Conditionally required if Field 38: North American Industry Classification System (NAICS) Code: NP Flag is Code 0. Leave blank if Code 0 is not entered. Instructions Enter the six-digit NAICS code appropriate for the applicant. Field Type: Numeric Example\n311230 (a business engaged in breakfast cereal manufacturing)\nValidations\nIf present, must be in numeric form',
    link: '#4.15.2',
  },
  {
    id: 63,
    title: '4.16. Number of Workers',
    contents: '4.16. Number of Workers Rule Section: 107(a)(16)',
    link: '#4.16',
  },
  {
    id: 64,
    title: 'Field 40: Number of Workers: NP Flag',
    contents:
      'Field 40: Number of Workers: NP Flag Required for all loan/application records. Instructions Indicate whether Number of Workers is provided by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n0 \t Code 0 – Provided \t  \n88 \t Code 88 – Not Provided \t Enter Code 88 if Number of Workers is not provided by applicant and is otherwise undetermined. ',
    link: '#4.16.1',
  },
  {
    id: 65,
    title: 'Field 41: Number of Workers',
    contents:
      'Field 41: Number of Workers Conditionally required if Field 40: Number of Workers: NP Flag is Code 0. Leave blank if Code 0 is not entered. Instructions Enter the number of workers. Includes full-time, part-time, and seasonal workers as well as contractors working primarily for the applicant but does not include principal owners. Field Type: Numeric Example\nIf 62, enter 62\nIf 0, enter 0\nValidations\nIf present, must be in numeric form',
    link: '#4.16.2',
  },
  {
    id: 66,
    title: '4.17. Time in Business',
    contents: '4.17. Time in Business Rule Section: 107(a)(17)',
    link: '#4.17',
  },
  {
    id: 67,
    title: 'Field 42: Time in Business: Type of Response',
    contents:
      'Field 42: Time in Business: Type of Response Required for all loan/application records. Instructions Indicate whether the applicant provided information on Time in Business by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes  \n1 \t Code 1 – Time in Business is provided by applicant  \n2 \t Code 2 – Applicant has been in business less than one year  \n3 \t Code 3 – Applicant has not started business yet  \n88 \t Code 88 – Time in Business is not provided by applicant and is otherwise undetermined by the lender  Validations\nMust equal 1, 2, 3, or 88\nMust not be left blank',
    link: '#4.17.1',
  },
  {
    id: 68,
    title: 'Field 43: Time in Business',
    contents:
      "Field 43: Time in Business Conditionally required if Time in Business: Type of Response is Code 1. Leave blank if Code 1 is not entered. Instructions Enter the applicant's time in business relied on in making the credit decision, expressed in whole numbers. If time in business was not relied on in making the credit decision, enter the number of years the applicant has been operating the business, rounding down to the nearest whole number of years. Example\nFor 12 years and 0 months in business, enter 12\nFor 12 years and 11 months in business, enter 12\ncome back to this-- may need changing\nValidations",
    link: '#4.17.2',
  },
  {
    id: 69,
    title: '4.18. Minority-Owned Business Status',
    contents: '4.18. Minority-Owned Business Status Rule Section: 107(a)(18)',
    link: '#4.18',
  },
  {
    id: 70,
    title: 'Field 44: Minority-Owned Business Status: Status',
    contents:
      'Field 44: Minority-Owned Business Status: Status Required for all loan/application records. Instructions Indicate whether the applicant is a minority-owned business by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes  \n1 \t Code 1 – Yes  \n2 \t Code 2 – No  \n3 \t Code 3 – The applicant responded that they did not wish to provide this information  \n4 \t Code 4 – The applicant did not respond Validations\nMust equal 1, 2, 3, or 4\nMust not be left blank',
    link: '#4.18.1',
  },
  {
    id: 71,
    title:
      'Field 45: Minority-owned Business Status: Previously Collected Data',
    contents:
      'Field 45: Minority-owned Business Status: Previously Collected Data Required for all loan/application records. Instructions Indicate whether the applicant’s minority-owned business status is based on previously collected data by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes  \n1 \t Code 1 – Yes  \n2 \t Code 2 – No Validations\nMust equal 1 or 2\nMust not be left blank',
    link: '#4.18.2',
  },
  {
    id: 72,
    title: '4.19. Women-Owned Business Status',
    contents: '4.19. Women-Owned Business Status Rule Section: 107(a)(19)',
    link: '#4.19',
  },
  {
    id: 73,
    title: 'Field 46: Women-Owned Business Status: Status',
    contents:
      'Field 46: Women-Owned Business Status: Status Required for all loan/application records. Instructions Indicate whether the applicant is a women-owned business by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes  \n1 \t Code 1 – Yes  \n2 \t Code 2 – No  \n3 \t Code 3 – The applicant responded that they did not wish to provide this information  \n4 \t Code 4 – The applicant did not respond Validations\nMust equal 1, 2, 3, or 4\nMust not be left blank',
    link: '#4.19.1',
  },
  {
    id: 74,
    title: 'Field 47: Women-Owned Business Status: Previously Collected Data',
    contents:
      'Field 47: Women-Owned Business Status: Previously Collected Data Required for all loan/application records. Instructions Indicate whether the applicant’s woman-owned business status is based on previously collected data by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes  \n1 \t Code 1 – Yes  \n2 \t Code 2 – No Validations\nMust equal 1 or 2\nMust not be left blank',
    link: '#4.19.2',
  },
  {
    id: 75,
    title: '4.20. Number of Principal Owners',
    contents: '4.20. Number of Principal Owners Rule Section: 107(a)(21)',
    link: '#4.20',
  },
  {
    id: 76,
    title: 'Field 48: Number of Principal Owners: NP Flag',
    contents:
      'Field 48: Number of Principal Owners: NP Flag Required for all loan/application records. Instructions Indicate whether Number of Principal Owners is provided by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n0 \t Code 0 – Provided \t  \n88 \t Code 88 – Not Provided \t Enter Code 88 if Number of Principal Owners is not provided by applicant and is otherwise undetermined. Validations\nMust equal 0 or 88\nMust not be left blank',
    link: '#4.20.1',
  },
  {
    id: 77,
    title: 'Field 49: Number of Principal Owners',
    contents:
      'Field 49: Number of Principal Owners Conditionally required if Number of Principal Owners: NP Flag is Code 0. Leave blank if Code 0 is not entered. Instructions Enter the number of the applicant’s principal owners. If no principal owner has at least 25% ownership of the business, enter 0. Field Type: Numeric Example\nFor 1, 2, 3, or 4 principal owners, enter 1, 2, 3, or 4 respectively.\nValidations\nIf present, must equal 1, 2, 3, or 4',
    link: '#4.20.2',
  },
  {
    id: 78,
    title: '4.21. Visual Observation and/or Surname',
    contents:
      '4.21. Visual Observation and/or Surname Rule Section: 107(a)(20)',
    link: '#4.21',
  },
  {
    id: 79,
    title: 'Field 50: Visual Observation and/or Surname',
    contents:
      'Field 50: Visual Observation and/or Surname Required for all loan/application records. Instructions Indicate whether ethnicity or race of at least one principal owner is based on visual observation and/or surname by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n1 \t Code 1 - Collected on the basis of visual observation and/or surname \t  \n2 \t Code 2 - Not collected on the basis of visual observation and/or surname \t Enter Code 2 if the applicant has no principal owners. Validations\nMust equal 1 or 2\nMust not be left blank',
    link: '#4.21.1',
  },
  {
    id: 80,
    title: '4.22. Previously Collected Data',
    contents: '4.22. Previously Collected Data Rule Section: 107(a)(20)',
    link: '#4.22',
  },
  {
    id: 81,
    title:
      'Field 51: Previously Collected Data for Ethnicity, Race, or Sex, of Principal Owner(s)',
    contents:
      'Field 51: Previously Collected Data for Ethnicity, Race, or Sex, of Principal Owner(s) Required for all loan/application records. Instructions Indicate whether any part of Ethnicity, Race, or Sex for any of the applicant’s principal owners is reported based on previously collected data by entering a code from the specified list of values. Field Type: Choice Valid values \t Codes \t Instructions  \n1 \t Code 1 – Reported based on previously collected data \t  \n2 \t Code 2 – Not reported based on previously collected data \t Enter Code 2 if applicant has no principal owners. Validations\nMust equal 1 or 2\nMust not be left blank',
    link: '#4.22.1',
  },
  {
    id: 82,
    title: '4.23. Ethnicity of Principal Owner(s)',
    contents: '4.23. Ethnicity of Principal Owner(s) Rule Section: 107(a)(20)',
    link: '#4.23',
  },
  {
    id: 83,
    title: 'Field 52: Ethnicity of Principal Owner 1',
    contents:
      'Field 52: Ethnicity of Principal Owner 1 Conditionally required if there is at least one Principal Owner. Leave blank if the applicant has no principal owners. Instructions For the ethnicity of the applicant’s Principal Owner 1, enter, as appropriate a code or codes from the specified list of values. If an applicant indicates more than one ethnicity for a principal owner, enter each, in any order, separated by a semicolon (;). Field Type: Multiple Choice Example\nIf Mexican, enter 11\nIf Mexican and Puerto Rican, enter 11;12 or 12;11\nIf Mexican and the applicant responded that they did not wish to provide this information, enter 11 Valid values \t Codes  \n1 \t Code 1 – Hispanic or Latino     \n11 \t Code 11 – Mexican  \n12 \t Code 12 – Puerto Rican  \n13 \t Code 13 – Cuban  \n14 \t Code 14 – Other Hispanic or Latino (specify in text below)    \n2 \t Code 2 – Not Hispanic or Latino  \n3 \t Code 3 – The applicant responded that they did not wish to provide this information  \n4 \t Code 4 – The applicant responded in the free-form text field  \n88 \t Code 88 – Information not provided by applicant in paper, electronic, or telephone/oral application. Validations\nIf present, must equal some combination of 1, 11, 12, 13, 14, 2, 3, 4, and/or 88 separated by semicolons (;)',
    link: '#4.23.1',
  },
  {
    id: 84,
    title:
      'Field 53: Ethnicity of Principal Owner 1: Free Form Text Field for Other Hispanic or Latino',
    contents:
      'Field 53: Ethnicity of Principal Owner 1: Free Form Text Field for Other Hispanic or Latino Conditionally required if Principal Owner Ethnicity is Code 4. Leave blank if Code 4 is not entered. Instructions Specify in text the Other Hispanic or Latino ethnicity if Code 14 is entered. Field Type: Text Example\nGuatemalan\nValidations\nIf present, must be in text form with a width of up to 100 characters',
    link: '#4.23.2',
  },
  {
    id: 85,
    title: '4.24. Race of Principal Owner(s)',
    contents: '4.24. Race of Principal Owner(s) Rule Section: 107(a)(20)',
    link: '#4.24',
  },
  {
    id: 86,
    title: 'Field 54: Race of Principal Owner: 1',
    contents:
      'Field 54: Race of Principal Owner: 1 Conditionally required if there is at least one Principal Owner. Leave blank if there are no Principal Owners. If an applicant indicates more than one race for a principal owner, enter each, in any order, separated by a semicolon. Instructions For the race of the applicant’s Principal Owner: 1, enter, as appropriate, a code or codes from the specified list of values. Field Type: Multiple Choice Example\nFor a principal owner 1 that is part Ethiopian and part Korean, enter 25;32 or 32;25 Valid values \t Codes  \n1 \t Code 1  –  American Indian or Alaska Native (specify in text below)  \n2 \t Code 2 – Asian  \n21 \t Code 21 – Asian Indian  \n22 \t Code 22 – Chinese  \n23 \t Code 23 – Filipino  \n24 \t Code 24 – Japanese  \n25 \t Code 25 – Korean  \n26 \t Code 26 – Vietnamese  \n27 \t Code 27 – Other Asian (specify in text below)  \n3 \t Code 3 – Black or African American  \n31 \t Code 31 – African American  \n32 \t Code 32 – Ethiopian  \n33 \t Code 33 – Haitian  \n34 \t Code 34 – Jamaican  \n35 \t Code 35 – Nigerian  \n36 \t Code 36 – Somali  \n37 \t Code 37 – Other Black or African American (specify in text below)  \n4 \t Code 4 – Native Hawaiian or Other Pacific Islander  \n41 \t Code 41 – Native Hawaiian  \n42 \t Code 42 – Guamanian or Chamorro  \n43 \t Code 43 – Samoan  \n44 \t Code 44 – Other Pacific Islander (specify in text below)  \n5 \t Code 5 – White  \n6 \t Code 6 – The applicant responded that they did not wish to provide this information  \n71 \t Code 71 – The applicant responded in the free-form text field for American Indian or Alaska Native Enrolled or Principal Tribe  \n72 \t Code 72 – The applicant responded in the free-form text field for Other Asian  \n73 \t Code 73 – The applicant responded in the free-form text field for Other Black or African  \n74 \t Code 74 – The applicant responded in the free-form text field for Other Pacific Islander  \n88 \t Code 88 – Information not provided by applicant in paper, electronic, or telephone/oral application Validations\nIf present, must equal some combination of 1, 2, 21, 22, 23, 24, 25, 26, 27, 3, 31, 32, 33, 34, 35, 36, 37, 4, 41, 42, 43, 44, 5, 6, 71, 72, 73, 74, and/or 88, separated by semicolons (;)',
    link: '#4.24.1',
  },
  {
    id: 87,
    title:
      'Field 55: Race of Principal Owner 1: Free Form Text Field for American Indian or Alaska Native Enrolled or Principal Tribe',
    contents:
      'Field 55: Race of Principal Owner 1: Free Form Text Field for American Indian or Alaska Native Enrolled or Principal Tribe Conditionally required if Principal Owner Race is Code 71. Leave blank if Code 71 is not entered. Instructions Specify in text the Principal Owner: 1’s American Indian or Alaska Native Enrolled or Principal Tribe if provided by the applicant. Otherwise, leave this data field blank. Field Type: Text Example\nNavajo\nValidations\nIf present, must be in text form with a width of up to 100 characters',
    link: '#4.24.2',
  },
  {
    id: 88,
    title:
      'Field 56: Race of Principal Owner 1: Free Form Text Field for Other Asian',
    contents:
      'Field 56: Race of Principal Owner 1: Free Form Text Field for Other Asian Conditionally required if Principal Owner Race is Code 72. Leave blank if Code 72 is not entered. Instructions Specify in text the Principal Owner: 1’s Other Asian Race(s) if provided by the applicant. Otherwise, leave this data field blank. Field Type: Text Example\nCambodian\nValidations\nIf present, must be in text form with a width of up to 100 characters',
    link: '#4.24.3',
  },
  {
    id: 89,
    title:
      'Field 57: Race of Principal Owner 1: Free Form Text Field for Other Black or African American',
    contents:
      'Field 57: Race of Principal Owner 1: Free Form Text Field for Other Black or African American Conditionally required if Principal Owner Race is Code 73. Leave blank if Code 73 is not entered. Instructions Specify in text the Principal Owner: 1’s Other Black or African American race(s) if provided by the applicant. Otherwise, leave this data field blank. Field Type: Text Example\nMalawian\nValidations\nIf present, must be in text form with a width of up to 100 characters',
    link: '#4.24.4',
  },
  {
    id: 90,
    title:
      'Field 58: Race of Principal Owner 1: Free Form Text Field for Other Pacific Islander',
    contents:
      'Field 58: Race of Principal Owner 1: Free Form Text Field for Other Pacific Islander Conditionally required if Principal Owner Race is Code 74. Leave blank if Code 74 is not entered. Instructions Specify in text the Principal Owner: 1’s Other Pacific Islander race(s) if provided by the applicant. Otherwise, leave this data field blank. Field Type: Text Example\nMarshallese\nValidations\nIf present, must be in text form with a width of up to 100 characters',
    link: '#4.24.5',
  },
  {
    id: 91,
    title: '4.25. Sex of Principal Owner(s)',
    contents: '4.25. Sex of Principal Owner(s) Rule Section: 107(a)(20)',
    link: '#4.25',
  },
  {
    id: 92,
    title: 'Field 59: Sex of Principal Owner: 1',
    contents:
      'Field 59: Sex of Principal Owner: 1 Conditionally required if there is at least one Principal Owner. Leave blank if applicant has no principal owners. Instructions For the sex of the applicant’s Principal Owner: 1, enter, as appropriate, a code from the specified list of values. If an applicant indicates more than one sex for a principal owner, enter each, in any order, separated by a semicolon. Field Type: Multiple Choice Example\nIf Male and Female, enter 1;2 or 2;1 Valid values \t Codes  \n1 \t Code 1 – Male  \n2 \t Code 2 – Female  \n3 \t Code 3 – The applicant prefers to self-identify (specify in text below)  \n4 \t Code 4 – The applicant responded that they did not wish to provide this information  \n5 \t Code 5 – The applicant responded in the free-form text field  \n88 \t Code 88 – The applicant did not respond Validations\nIf present, must equal some combination of 1, 2, 3, 4, 5, and/or 88',
    link: '#4.25.1',
  },
  {
    id: 93,
    title:
      'Field 60: Sex of Principal Owner 1: Free Form Text Field for I Prefer to Self-Identify',
    contents:
      'Field 60: Sex of Principal Owner 1: Free Form Text Field for I Prefer to Self-Identify Conditionally required if Principal Owner Sex is Code 5. Leave blank if Code 5 is not entered. Instructions Specify in text Principal Owner: 1’s self-identified sex if provided. Field Type: Text Example\nNonbinary\nValidations\nIf present, must be in text form with a width of up to 100 characters',
    link: '#4.25.2',
  },
  {
    id: 94,
    title: '4.26. Principal Owner 2',
    contents:
      '4.26. Principal Owner 2 Race/sex/ethnicity data for Principal Owner 2. Rule section 107(a)(20)',
    link: '#4.26',
  },
  {
    id: 95,
    title: 'Field 61: Ethnicity of Principal Owner: 2',
    contents:
      'Field 61: Ethnicity of Principal Owner: 2 Conditionally required if there are at least two principal owners. Leave blank if the applicant has fewer than two principal owners. Instructions See Field 52: Ethnicity of Principal Owner 1',
    link: '#4.26.1',
  },
  {
    id: 96,
    title:
      'Field 62: Ethnicity of Principal Owner 2: Free Form Text Field for Other Hispanic or Latino',
    contents:
      'Field 62: Ethnicity of Principal Owner 2: Free Form Text Field for Other Hispanic or Latino Conditionally required if Principal Owner: 2 Ethnicity is Code 4. Leave blank if Code 4 is not entered Instructions See Field 53: Ethnicity of Principal Owner 1: Free Form Text Field for Other Hispanic or Latino',
    link: '#4.26.2',
  },
  {
    id: 97,
    title: 'Field 63: Race of Principal Owner: 2',
    contents:
      'Field 63: Race of Principal Owner: 2 Conditionally required if there are at least two Principal Owners. Leave blank if applicant has only one principal owner Instructions See Field 54: Race of Principal Owner: 1',
    link: '#4.26.3',
  },
  {
    id: 98,
    title: 'Field 64: Sex of Principal Owner: 2',
    contents:
      'Field 64: Sex of Principal Owner: 2 Conditionally required if there are at least two Principal Owners. Leave blank if applicant has only one principal owner Instructions See Field 55: Sex of Principal Owner: 1',
    link: '#4.26.4',
  },
  {
    id: 99,
    title: '5. Data validation',
    contents:
      '5. Data validation This section will describe the validation process and explain its purpose.',
    link: '#5',
  },
  {
    id: 100,
    title: '5.1. Validations overview',
    contents:
      '5.1. Validations overview Documentation will clearly lay out the distinction between classes of errors (e.g. Errors, Failures, Warnings, etc.) as well as the specific validation rules and suggestions on correcting issues. We will also focus UX and graphic design effort on presenting the validation results in a way that users can easily understand and resolve. Once a file has been successfully parsed, the system will check individual records for data validity errors. In this step, issues specific to the type of data being submitted will be raised. These include data that is out of range (exceeds acceptable values) or of an improper type (text in numeric field, text in date field, etc.). It will be important to identify the record by its unique identifier, the data point name and specific validation error. Previewing the record or how the system parsed the data could also provide the filer insight into how to correct the submission.',
    link: '#5.1',
  },
  {
    id: 101,
    title: '5.2. List of validations',
    contents:
      "5.2. List of validations What will this section look like? Not sure yet. We'll need a way to make it visually make sense to vendors and compliance officers. It will probably have a lot of information, so we may find another way to break it into sections.",
    link: '#5.2',
  },
  {
    id: 102,
    title: '6. Where to get help',
    contents:
      '6. Where to get help CFPB will provide regulatory implementation resources for filers and vendors, called 1071 Help. We will decide how to guide people to those resources in the future. There might be a list of resources and their descriptions here. Such as: FAQ about the data collection\nResources specific to small filers\nGuides for reporting various loan scenarios?\nContact info for the 1071 Help function',
    link: '#6',
  },
  {
    id: 103,
    title: '7. Paperwork Reduction Act',
    contents:
      '7. Paperwork Reduction Act According to the Paperwork Reduction Act of 1995, an agency may not conduct or sponsor, and, not withstanding any other provision of law, a person is not required to respond to a collection of information unless it displays a valid OMB control number. The OMB control number for this collection is 3170-0008. The time required to complete this information collection is estimated to average between 9,000 hours and 161 hours per response depending on the size of the institution, per response. The obligation to respond to this collection of information is mandatory per the Home Mortgage Disclosure Act 12 U.S.C. 2801–2810, as implemented by Consumer Financial Protection Bureau’s Regulation C, 12 CFR part 1003. Comments regarding this collection of information, including the estimated response time, suggestions for improving the usefulness of the information, or suggestions for reducing the burden to respond to this collection should be submitted to the Bureau at the Consumer Financial Protection Bureau (Attention: PRA Office), 1700 G Street NW, Washington, DC 20552, or by email to PRA@cfpb.gov. The other agencies collecting information under this regulation maintain OMB Control numbers for their collections as follows: Office of the Comptroller of the Currency (1557- 0159), the Federal Deposit Insurance Corporation (3064-0046), the Federal Reserve System (7100-0247), the Department of Housing and Urban Development (HUD) (2502-0529), the National Credit Union Administration (3133-0166).',
    link: '#7',
  },
];
