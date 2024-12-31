import axios from 'axios';

// Helper function to generate a random date within a given range
const getRandomDate = (startYear, endYear) => {
  const startDate = new Date(startYear, 0, 1); // Start of the start year
  const endDate = new Date(endYear, 11, 31); // End of the end year
  return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())).toISOString();
}

// Helper function to generate an array of dates
const getMultipleDates = (count, startYear, endYear) => {
  const dates = [];
  for (let i = 0; i < count; i++) {
    dates.push(getRandomDate(startYear, endYear));
  }
  return dates;
}

// Helper function to calculate the next scheduled communication date based on periodicity
const getNextScheduledDate = (periodicity) => {
  const today = new Date();
  let nextDate = new Date(today);

  switch (periodicity) {
    case "Weekly":
      nextDate.setDate(today.getDate() + 7); // Next week
      break;
    case "Bi-weekly":
      nextDate.setDate(today.getDate() + 14); // Next two weeks
      break;
    case "Monthly":
      nextDate.setMonth(today.getMonth() + 1); // Next month
      break;
    default:
      nextDate = today;
      break;
  }

  return nextDate.toISOString();
}

// Sample companies data with random past, present, and future dates
const mockCompanies = [
  {
    name: "Tech Innovators",
    location: "San Francisco, CA",
    linkedIn: "https://www.linkedin.com/company/tech-innovators",
    emails: "info@techinnovators.com",
    phoneNumbers: "+1 415-555-1234",
    comments: "Leading tech company specializing in AI.",
    communicationPeriodicity: "Weekly",
    date: getRandomDate(2015, 2023), // Past date
    pastDates: getMultipleDates(5, 2015, 2023), // Five past communication dates
    futureDates: getMultipleDates(5, 2024, 2030), // Five future communication dates
    todayDate: new Date().toISOString(), // Today's date
    pastCommunications: getMultipleDates(5, 2015, 2023), // Communication history
    nextScheduledCommunicationDate: getNextScheduledDate("Weekly"), // Next scheduled communication based on periodicity
  },
  {
    name: "Eco Solutions",
    location: "New York, NY",
    linkedIn: "https://www.linkedin.com/company/eco-solutions",
    emails: "contact@ecosolutions.com",
    phoneNumbers: "+1 212-555-5678",
    comments: "Environmental consultancy firm.",
    communicationPeriodicity: "Bi-weekly",
    date: new Date().toISOString(), // Today's date
    pastDates: getMultipleDates(5, 2015, 2023), // Five past communication dates
    futureDates: getMultipleDates(5, 2024, 2030), // Five future communication dates
    todayDate: new Date().toISOString(), // Today's date
    pastCommunications: getMultipleDates(5, 2015, 2023), // Communication history
    nextScheduledCommunicationDate: getNextScheduledDate("Bi-weekly"), // Next scheduled communication based on periodicity
  },
  {
    name: "Marketing Masters",
    location: "Los Angeles, CA",
    linkedIn: "https://www.linkedin.com/company/marketing-masters",
    emails: "support@marketingmasters.com",
    phoneNumbers: "+1 310-555-9876",
    comments: "Marketing and advertising services.",
    communicationPeriodicity: "Monthly",
    date: getRandomDate(2024, 2030), // Future date
    pastDates: getMultipleDates(5, 2015, 2023), // Five past communication dates
    futureDates: getMultipleDates(5, 2024, 2030), // Five future communication dates
    todayDate: new Date().toISOString(), // Today's date
    pastCommunications: getMultipleDates(5, 2015, 2023), // Communication history
    nextScheduledCommunicationDate: getNextScheduledDate("Monthly"), // Next scheduled communication based on periodicity
  },
];

// Sample communication methods data with multiple dates
const mockMethods = [
  {
    name: "LinkedIn Post",
    description: "Post updates on LinkedIn.",
    sequence: 1,
    pastDates: getMultipleDates(5, 2015, 2023), // Five past dates
    futureDates: getMultipleDates(5, 2024, 2030), // Five future dates
    todayDate: new Date().toISOString(), // Today's date
  },
  {
    name: "Email",
    description: "Send promotional emails to clients.",
    sequence: 2,
    pastDates: getMultipleDates(5, 2015, 2023), // Five past dates
    futureDates: getMultipleDates(5, 2024, 2030), // Five future dates
    todayDate: new Date().toISOString(), // Today's date
  },
  {
    name: "Phone Call",
    description: "Make follow-up calls to prospects.",
    sequence: 3,
    pastDates: getMultipleDates(5, 2015, 2023), // Five past dates
    futureDates: getMultipleDates(5, 2024, 2030), // Five future dates
    todayDate: new Date().toISOString(), // Today's date
  },
];

// Function to populate backend with mock companies and methods
const populateBackend = async () => {
  try {
    // Post mock companies data
    for (const company of mockCompanies) {
      await axios.post('http://localhost:5000/api/companies', company);
      console.log(`Added company: ${company.name}`);
    }

    // Post mock communication methods data
    for (const method of mockMethods) {
      await axios.post('http://localhost:5000/api/communicationmethods', method);
      console.log(`Added method: ${method.name}`);
    }

    console.log("Sample data populated successfully!");
  } catch (error) {
    console.error("Error populating data:", error);
  }
};

// Run the function to populate data
populateBackend();
