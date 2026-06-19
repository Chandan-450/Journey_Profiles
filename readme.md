# Journey Profiles Data Model Documentation

## Database Name

**Journey_Profiles**

This database stores customer journey information and tracks the stage of each customer in the business journey.

---

# Collection: journey_profiles

The `journey_profiles` collection contains records representing individual customers and their current journey status.

## Schema Definition

| Field Name  | Data Type | Required | Description                                                                                                                                       |
| ----------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| customer_id | String    | Yes      | Unique identifier assigned to each customer. Used to distinguish one customer from another. Example: "C001"                                       |
| stage       | String    | Yes      | Represents the current stage of the customer in the journey lifecycle. Example: "Awareness", "Consideration", "Decision", "Purchase", "Retention" |
| last_event  | String    | No       | Stores the most recent action performed by the customer. Helps track customer behavior. Example: "Website Visit", "Product Demo", "Email Opened"  |
| updated_at  | Date      | No       | Timestamp indicating when the customer record was last updated. Used for tracking recent activity and auditing purposes.                          |

---

# Customer Journey Stages

The `stage` field can contain the following values:

### 1. Awareness

The customer has become aware of the product or service.

**Examples:**

* Website Visit
* Social Media Interaction
* Advertisement Click

### 2. Consideration

The customer is evaluating available options.

**Examples:**

* Product Demo
* Pricing Page Visit
* Feature Comparison

### 3. Decision

The customer is close to making a purchase decision.

**Examples:**

* Free Trial Signup
* Sales Consultation
* Quote Request

### 4. Purchase

The customer has completed a purchase.

**Examples:**

* Order Placed
* Subscription Activated

### 5. Retention

The customer continues to engage with the product after purchase.

**Examples:**

* Renewal
* Repeat Purchase
* Product Usage

---

# Sample Document

```json
{
  "customer_id": "C001",
  "stage": "Awareness",
  "last_event": "Website Visit",
  "updated_at": "2026-06-19T12:00:00Z"
}
```

---

# Usage of Fields

### customer_id

* Acts as the primary business identifier for a customer.
* Used for searching and updating customer records.

### stage

* Tracks where the customer currently is in the journey.
* Helps marketing and sales teams understand customer progress.

### last_event

* Records the latest customer interaction.
* Useful for behavioral analysis and personalization.

### updated_at

* Maintains a history of record updates.
* Helps identify inactive or recently active customers.

---

# Business Purpose

This data model helps organizations:

1. Track customer progress through different journey stages.
2. Analyze customer behavior and interactions.
3. Improve marketing and sales strategies.
4. Personalize customer engagement.
5. Monitor customer retention and loyalty.
