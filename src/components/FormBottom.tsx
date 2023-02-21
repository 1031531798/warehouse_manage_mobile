import {Stack, Button, ButtonProps} from "@mui/material";
import {useMemo} from "react";

export type FormButtonColumnProps = {
    label: string
    event: 'submit' | 'cancel'
} & ButtonProps
interface FormButtonProp {
    spacing?: number
    direction?: "column" | "row" | "row-reverse" | "column-reverse"
    className?: string
    onSubmit: () => void
    onCancel: () => void
    column: FormButtonColumnProps[]
}
const FormButtons = ({column, onSubmit, className, spacing = 2, direction = "row", onCancel}: FormButtonProp) => {
    const buttonList = useMemo(() => {
        return column.map(item => {
            return (
                <Button {...item} key={item.label} onTouchEnd={() => handleClick(item)}>{item.label}</Button>
            )
        })
    }, [column])
    function handleClick (item: FormButtonColumnProps) {
        if (item.event === 'cancel') {
            onCancel && onCancel()
        }else {
            onSubmit && onSubmit()
        }
    }
    function clickSubmit (e:any) {
        return false
    }
    return (
        <>
            <Stack spacing={spacing} direction={direction} className={className}>
                {buttonList}
            </Stack>
        </>
    )
}

export default FormButtons
