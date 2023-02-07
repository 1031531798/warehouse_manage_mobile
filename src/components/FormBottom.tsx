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
    onSubmit: (data: any) => void
    onCancel: () => void
    column: FormButtonColumnProps[]
}
const FormButtons = ({column, onSubmit, className, spacing = 2, direction = "row", onCancel}: FormButtonProp) => {
    const buttonList = useMemo(() => {
        return column.map(item => {
            if (item.event === 'submit') {
                return (
                    <Button key={item.label} type={'submit'} variant={item.variant} onSubmit={clickSubmit}>{item.label}</Button>
                )
            }else {

                return (
                    <Button key={item.label} variant={item.variant}  onClick={() => onCancel && onCancel()}>{item.label}</Button>
                )
            }
        })
    }, [column])
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
