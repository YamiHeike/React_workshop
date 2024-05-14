import React, { createContext, useContext, useState } from "react";

export enum Customers {
  NEUTRAL = "-",
  GOOGLE = "Google",
  META = "Meta",
  APPLE = "Apple",
}

type CustomerContextType = {
  customer: Customers;
  changeCustomer: (customer: Customers) => void;
};

const CustomerContext = createContext<CustomerContextType | null>(null);

const useCustomer = () => {
  const [customer, setCustomer] = useState(Customers.NEUTRAL);
  const changeCustomer = (brand: Customers) => {
    setCustomer(brand);
  };

  return { customer, changeCustomer };
};

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);

  if (context == null) {
    throw new Error(
      "Error. Component should be placed inside CustomerContextProvider"
    );
  } else {
    return context;
  }
};

export const CustomerContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <CustomerContext.Provider value={useCustomer()}>
      {children}
    </CustomerContext.Provider>
  );
};
