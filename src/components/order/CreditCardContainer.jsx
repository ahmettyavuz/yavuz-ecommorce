import { useEffect, useState } from "react";
import { CreditCardCart } from "./CreditCardCart";
import { CreditCardForm } from "../form/CreditCardForm";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCreditCard,
  getCreditCards,
} from "../../store/actions/clientAction";
import { setPayment } from "../../store/actions/shoppingCartAction";

const installments = [
  { id: 1, installmentCount: "One-Time Payment", monthlyPayment: 100 },
  { id: 2, installmentCount: 6, monthlyPayment: 50 },
  { id: 3, installmentCount: 12, monthlyPayment: 25 },
];

export const CreditCardContainer = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [checkTaksit, setCheckTaksit] = useState(installments[0].id);
  const { creditCards } = useSelector((store) => store.client);
  const payment = useSelector((store) => store.shoppingCart.payment);
  const [editId, setEditId] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreditCards());
  }, []);

  useEffect(() => {
    if (!payment.id) dispatch(setPayment(creditCards[0] ? creditCards[0] : {}));
  }, [creditCards]);

  const handleClick = (e) => {
    const name = e.target.name || e.target.getAttribute("data-name");
    if (name === "addCreditCard") {
      setVisibleForm(!visibleForm);
    } else if (name === "exit" || name === "space" || name === "submit") {
      setVisibleForm(false);
      setEditId(undefined);
    } else if (name === "onEdit") {
      const id = e.target.value;
      setEditId(id);
    } else if (name === "onDelete") {
      const id = e.target.value;
      dispatch(deleteCreditCard(id));
    } else if (name === "selectCreditCard") {
      const creditCard = e.target.creditCard;
      console.log(creditCard);
      dispatch(setPayment(creditCard));
    }
  };

  const handleChange = (e) => {
    setCheckTaksit(Number(e.target.value));
  };

  useEffect(() => {
    if (editId) setVisibleForm(true);
  }, [editId]);

  return (
    <div className="flex max-sm:flex-col max-sm:gap-3 border-2 rounded-lg px-4 py-6">
      <div className="basis-[50%] mb">
        <div className="flex flex-col pr-4 max-sm:pr-0 ">
          <div className=" flex max-xl:flex-col justify-between mb-8">
            <h6 className="text-lg text-gray-600 font-bold">
              Card Information
            </h6>
            <button
              className="text-base text-gray-400 underline cursor-pointer"
              onClick={handleClick}
              name="addCreditCard"
            >
              Pay with Another Card
            </button>
          </div>
          <div className="flex justify-between max-xl:flex-col flex-wrap gap-3">
            {creditCards.map((creditCard, index) => (
              <CreditCardCart
                key={creditCard.id}
                creditCard={creditCard}
                cardType={index % 2 === 0 ? "visa" : "masterCard"}
                handleClick={handleClick}
                isSelected={creditCard.id === payment.id}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-4 flex-wrap max-lg:flex-col"></div>
      </div>
      <div className="border-l-2 max-sm:border-t-2 max-sm:border-l-0  basis-[50%] pl-4">
        <h5 className="font-bold">Installment Options</h5>
        <p className="pb-6">
          Select the installment option that suits your card
        </p>
        <table className="border-2 w-full">
          <thead className="text-left">
            <tr className="border-2 bg-gray-100">
              <th className="border-r-2 pl-4">Number of Installments</th>
              <th className="pl-4 py-4">Monthly Payment</th>
            </tr>
          </thead>
          <tbody>
            {installments.map((installment) => (
              <tr key={installment.id}>
                <td className="border-2 pl-4 py-2 flex items-center">
                  <input
                    type="radio"
                    id={`installment-${installment.id}`}
                    name="installment"
                    className="hidden"
                    value={installment.id}
                    checked={checkTaksit === installment.id}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={`installment-${installment.id}`}
                    style={{
                      border: "2px solid",
                      borderColor:
                        checkTaksit === installment.id ? "#23A6F0" : "gray",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      padding: "4px",
                      position: "relative",
                      marginRight: "8px",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        width: "12px",
                        height: "12px",
                        display: "block",
                        borderRadius: "50%",
                        backgroundColor:
                          checkTaksit === installment.id ? "#23A6F0" : "gray",
                        transition: "background-color 0.3s",
                      }}
                    ></span>
                  </label>
                  <span className="ml-2">{installment.installmentCount}</span>
                </td>
                <td className="border-2 pl-4 py-2">
                  ${installment.monthlyPayment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {visibleForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto p-4">
          <div
            data-name="space"
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleClick}
          ></div>
          <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto my-8">
            <button
              name="exit"
              className="absolute top-4 right-4 text-gray-600 text-2xl"
              onClick={handleClick}
            >
              &times;
            </button>
            <CreditCardForm creditCardId={editId} handleClick={handleClick} />
          </div>
        </div>
      )}
    </div>
  );
};
