![image info](img/main.png)

## A locally runnable personal budget tracking and financial web application

This application is aimed at two types of profiles.  

First, individuals who are looking for a tool to track their incomes and expenses.  
The application allows to break expenses into categories and periods that can be  
visualized via synthetic and comprehensive charts.  
In addition, multiple key metrics like accounts balances at the end of month, are  
available to help understand the money flow, spot inconsistencies and improve capital  
management.  

The second profile, is investors that desire to have a global view of the assets they own.  
With this application, investors can :
- Group their assets by classes and visualize their portfolio repartition
- Track their portfolio performance via several metrics, like MRR over weeks, months or even years.

Finally, both profiles have access to transversal features like patrimony overview and evolution over a specific period.

### How to use it?

1. Export bank and brokerage accounts data and format it as required
1. Deposit data files inside the specified repository
1. Open the web application and voila. 

### Data formating (Bank account export)

Extract data from bank account so it is formated as CSV:

```
date;category;subcategory;label;expense;income;balance
```

- **Date** : When operations are occured. 
It is used to filter on periods and is formated as *DD/MM/YYYY*.
- **Category** : The operation categorie's. Here is the list of available categories:
  - Alimentation & restaurants
  - Achats & shopping
  - Loisirs
  - Logement & charges
  - Sante
  - Don
  - Impôts, taxes & frais
  - Transports
  - Voyages
  - Epargne & placements
  - Note de frais
- **Subcategory** : The operation sub categorie's. Here ishte list of sub categories:
    - to be filled.
- **Expense** : Amount of the expense if the operation is an expense. Empty otherwise.
- **Income** : Amount of the income if the operation is an income. Empty otherwise.
- **Balance** : Account balance for the date of the operation AFTER the operation execution.

### Data formating (Brokerage accout export)

Extract data from your brokerage accounts so it look like as follow:

```
date;category;subcategory;description;location;value;invested
```
- **Date** : Status of the accout at this date. It is important to have at least 1 entry for the last day of each month.
It is used to filter on periods and is formated as *DD/MM/YYYY*.
- **Category** : The asset category. Here is the list of available categories:
  - Alimentation & restaurants
  - Achats & shopping
  - Loisirs
  - Logement & charges
  - Sante
  - Don
  - Impôts, taxes & frais
  - Transports
  - Voyages
  - Epargne & placements
  - Note de frais
- **Subcategory** : The operation sub categorie's. Here ishte list of sub categories:
    - Crypto.
    - Actions & Fonds
- **Description** : Everything that is not part of two previous columns.
- **Location** : Weither it is on retirement plan or something else.
- **Value** : The liquidation value of the account plus the available cash.
- **Invested** : The amount invested on this account. 