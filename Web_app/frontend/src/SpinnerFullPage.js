import { Spinner } from "./spinner";

export const SpinnerFullPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Spinner />
      </div>
    </div>
  );
};
