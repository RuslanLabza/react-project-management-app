import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default forwardRef(function Modal({ children }, ref) {
    const modal = useRef(null);

    useImperativeHandle(ref, () => ({
        open: () => {
            modal.current.showModal();
        }
    }));

    const handleBackdropClick = (e) => {
        if (e.target === modal.current) {
            modal.current.close();
        }
    };

    return createPortal(
        <dialog 
            ref={modal} 
            className="p-6 bg-white rounded-lg shadow-xl max-w-md w-full backdrop:bg-black backdrop:bg-opacity-50"
            onClick={handleBackdropClick}
        >
            <div className="space-y-4">
                {children}
            </div>
            <form method="dialog" className="mt-6 flex justify-center">
                <Button secondary>
                    OK
                </Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});