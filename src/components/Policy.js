import React from "react";
import "./service.css"

const Policy = () => {
  return (
    <div className="policy-container">
      <h1>App Usage Policy</h1>
      <p>
        <strong>Effective Date:</strong> [Date]
      </p>
      <h2>1. Purpose and Scope</h2>
      <p>
        This policy outlines the guidelines and expectations for using the{" "}
        [App Name] (the "App") developed by [Company Name]. This policy applies
        to all users, including employees, contractors, partners, and any other
        individuals granted access to the App.
      </p>
      <h2>2. Appropriate Use</h2>
      <p>
        Users of the App are expected to adhere to the following guidelines:
      </p>
      <ul>
        <li>
          a. The App should only be used for its intended purposes, as defined by
          [Company Name]. Any unauthorized use, including but not limited to,
          accessing or attempting to access unauthorized areas of the App, is
          strictly prohibited.
        </li>
        <li>
          b. Users must not share their login credentials or allow unauthorized
          individuals to use their account.
        </li>
        <li>
          c. Users shall not engage in any activities that disrupt or impair the
          functionality, security, or availability of the App.
        </li>
        <li>
          d. Users are responsible for maintaining the security and
          confidentiality of any data or information accessed through the App.
          Any unauthorized disclosure or sharing of sensitive information is
          prohibited.
        </li>
      </ul>
      {/* ... Other sections ... */}
      <h2>7. Updates to the Policy</h2>
      <p>
        This policy may be updated by [Company Name] from time to time. Users
        will be notified of any changes, and it is their responsibility to
        review and understand the most recent version of the policy.
      </p>
    </div>
  );
};

export default Policy;
