import { Customers, useCustomerContext } from "./CustomerContext";
import { Select } from "../../ui";
import { ChangeEventHandler } from "react";

export const CustomerSwitcher = () => {
  const { customer, changeCustomer } = useCustomerContext();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    const selectedCustomer = evt.target.value;
    switch (selectedCustomer) {
      case Customers.APPLE:
        changeCustomer(Customers.APPLE);
        break;
      case Customers.GOOGLE:
        changeCustomer(Customers.GOOGLE);
        break;
      case Customers.META:
        changeCustomer(Customers.META);
        break;
      default:
        changeCustomer(Customers.NEUTRAL);
    }
  };

  return (
    <div className="mt-5">
      <Select
        options={Object.values(Customers)}
        label="Brand:"
        onChange={handleChange}
      />
    </div>
  );
};
