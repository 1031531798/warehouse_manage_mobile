import {Alert, Snackbar} from "@mui/material";
import React from "react";
import useToastStore from "@/store/toast";

const Toast = () => {
    const toastStore = useToastStore()
    function handleClose () {
        toastStore.setOpen(false)
   }

    return (
        <Snackbar open={toastStore.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity={toastStore.toastConfig.type} sx={{ width: '100%' }}>
                {toastStore.toastConfig.message}
            </Alert>
        </Snackbar>
    )
}

export default Toast
