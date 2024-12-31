import random
import json
import os
from datetime import datetime, timedelta
from dateutil.parser import isoparse

# Function to parse the date string
def parse_datetime(date_string):
    try:
        return datetime.strptime(date_string, "%Y-%m-%dT%H:%M:%S.%fZ")  # With fractional seconds
    except ValueError:
        return datetime.strptime(date_string, "%Y-%m-%dT%H:%M:%SZ")  # Without fractional seconds

# Function to generate communication data for a single company
def generate_company_data(company_name, communication_periodicity="Weekly"):
    # Generate a random starting date for last communication
    today_date = datetime.now()
    last_communication_date = today_date - timedelta(weeks=random.randint(1, 50))  # Random past date within last 50 weeks

    # Generate past communications based on the periodicity
    past_communications = []
    for i in range(5):
        if communication_periodicity == "Weekly":
            next_communication = last_communication_date + timedelta(weeks=i)
        elif communication_periodicity == "Monthly":
            next_communication = last_communication_date + timedelta(weeks=4 * i)
        elif communication_periodicity == "Quarterly":
            next_communication = last_communication_date + timedelta(weeks=12 * i)
        past_communications.append(next_communication.strftime("%Y-%m-%dT%H:%M:%SZ"))

    # Generate the next scheduled communication date based on periodicity
    if communication_periodicity == "Weekly":
        next_scheduled_communication_date = today_date + timedelta(weeks=1)
    elif communication_periodicity == "Monthly":
        next_scheduled_communication_date = today_date + timedelta(weeks=4)
    elif communication_periodicity == "Quarterly":
        next_scheduled_communication_date = today_date + timedelta(weeks=12)

    next_scheduled_communication_date = next_scheduled_communication_date.strftime("%Y-%m-%dT%H:%M:%SZ")

    # Construct the company data
    company_data = {
        "name": company_name,
        "location": "San Francisco, CA",
        "linkedIn": f"https://www.linkedin.com/company/{company_name.lower().replace(' ', '-')}",
        "emails": f"info@{company_name.lower().replace(' ', '')}.com",
        "phoneNumbers": f"+1 415-555-{random.randint(1000, 9999)}",
        "comments": f"Leading tech company specializing in {company_name}.",
        "communicationPeriodicity": communication_periodicity,
        "todayDate": today_date.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "pastCommunications": past_communications,
        "nextScheduledCommunicationDate": next_scheduled_communication_date
    }

    return company_data

# Function to generate multiple companies' data with unique company names
def generate_multiple_companies(n):
    companies = []
    used_company_names = set()

    for _ in range(n):
        # Generate a unique company name by appending a random suffix
        company_name = f"Company_{random.randint(1000, 9999)}"
        while company_name in used_company_names:
            company_name = f"Company_{random.randint(1000, 9999)}"

        # Add the unique company name to the set
        used_company_names.add(company_name)

        communication_periodicity = random.choice(["Weekly", "Monthly", "Quarterly"])
        company_data = generate_company_data(company_name, communication_periodicity)
        companies.append(company_data)

    return companies

# Save generated companies data to a file
def save_companies_data_to_file(companies_data, output_directory="./generated_data", filename="companies.json"):
    # Ensure the directory exists
    os.makedirs(output_directory, exist_ok=True)

    # Full file path
    file_path = os.path.join(output_directory, filename)

    # Save the data to the file
    with open(file_path, "w") as file:
        json.dump(companies_data, file, indent=4)

    print(f"File saved at: {file_path}")

# Generate data for 10 companies with unique names and save it to a file
companies_data = generate_multiple_companies(10)
save_companies_data_to_file(companies_data)
