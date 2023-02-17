import { MDBSpinner } from "mdb-react-ui-kit";

export const Spinner = () => {
  return (
    <MDBSpinner role="status">
      <span className="visually-hidden">Loading...</span>
    </MDBSpinner>
  );
};
