import { COMPANIES_BY_DOMAIN, CompanyType } from "./data";

export const companyFromEmail = (email: string): CompanyType | null => {
  const emailDomain = email.trim().split("@")[1];
  const rootDomainParts = emailDomain?.split(".").slice(-2); // This splits the root domain into parts e.g., ["google", "com"]

  const companyName = rootDomainParts?.[0]; // This gets the first part of the root domain (e.g., "google" from ["google", "com"])

  console.log("companyName: ", companyName);

  return COMPANIES_BY_DOMAIN[companyName] || null;
};

console.log(companyFromEmail("drew@dropbox.com"));
