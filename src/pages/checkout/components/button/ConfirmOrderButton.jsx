import { Link } from "react-router-dom";
import { Button } from "../../../../components/buttons/Button";

export const ConfirmOrderButton = ({ confirmOrder }) => {
  return (
    <>
      {!confirmOrder ? (
        <Button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 text-base rounded-lg hover:bg-indigo-700 transition duration-300"
          children={"  Confirmar Pedido"}
        />
      ) : (
        <>
          {" "}
          <Link
            type="button"
            className="w-full text-center bg-indigo-600 text-white py-2 text-base rounded-lg hover:bg-indigo-700 transition duration-300"
            to="/shopping-cart/post-confirm-order"
          >
            ir a pagar
          </Link>
        </>
      )}
    </>
  );
};
