import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(
  ({ remainingTime, targetTime, onReset }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    return (
      <dialog ref={dialog} className="result-modal">
        {remainingTime <= 0 && <h2>You lost!</h2>}
        <p>
          The target time was <strong>{targetTime} seconds. </strong>
        </p>
        <p>
          You stopped the timer with{" "}
          <strong>{formattedRemainingTime} seconds left.</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
