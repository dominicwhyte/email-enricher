# Email Enricher: An Offline Clearbit Alternative

**Email Enricher** is a free, offline alternative to Clearbit for enriching emails. Determine if an email likely belongs to a Fortune 1000 company.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)

## Installation

To install Email Enricher, use either of the following package managers:

### Using Yarn

```bash
yarn add email-enricher
```

### Using npm

```bash
npm install email-enricher
```

## Usage

Below are examples showing how to obtain enriched information about a company from an email address.

### Import the Function

```javascript
import { companyFromEmail } from "email-enricher";
```

### Basic Usage

#### Example 1: Amazon

```javascript
const amazonInfo = companyFromEmail("jeff@amazon.com");
console.log(amazonInfo);
```

The output will be:

```json
{
  "company": "Amazon",
  "rank": 2,
  "rank_change": 0,
  "revenue": 469822,
  "profit": 33364,
  "num_of_employees": 1608000,
  "sector": "Retailing",
  "city": "Seattle",
  "state": "WA",
  "newcomer": "no",
  "ceo_founder": "no",
  "ceo_woman": "no",
  "profitable": "yes",
  "prev_rank": 2,
  "CEO": "Andrew R. Jassy",
  "Website": "www.amazon.com",
  "Ticker": "AMZN",
  "Market_Cap": 1202717
}
```

#### Example 2: Dropbox

```javascript
const dropboxInfo = companyFromEmail("drew@dropbox.com");
console.log(dropboxInfo);
```

The output will be:

```json
{
  "company": "Dropbox",
  "rank": 988,
  "rank_change": 0,
  "revenue": 2157.9,
  "profit": 335.8,
  "num_of_employees": 2667,
  "sector": "Technology",
  "city": "San Francisco",
  "state": "CA",
  "newcomer": "no",
  "ceo_founder": "yes",
  "ceo_woman": "no",
  "profitable": "yes",
  "prev_rank": "",
  "CEO": "Andrew W. Houston",
  "Website": "https://www.dropbox.com",
  "Ticker": "DBX",
  "Market_Cap": 8873.5
}
```

#### Example 3: Unrecognized Email

```javascript
const unknownInfo = companyFromEmail("john.smith@fakecompany.com");
console.log(unknownInfo); // Outputs null
```

## How It Works

Email Enricher uses a [data set from Kaggle](https://www.kaggle.com/datasets/winston56/fortune-500-data-2021) that contains information about Fortune 1000 companies. The email address you provide is compared against the URLs of the companies. Note that this is not fool-proof - some companies don't use the same URL for their email domains.

## Contributions

We're very open to contributions! Whether it's adding a better data set, improving the documentation, or adding new features, all forms of contribution are welcome. To get started, simply fork the repository and create a pull request. If you're new to the project and looking for a place to start, check out the open issues.
