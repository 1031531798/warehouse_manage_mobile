import { KeyboardEvent } from "react";

export function useKeyEvent () {
    const enter = (fn: Function) => {
        return (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            if (e.key === 'Enter') {
                fn && fn(e)
            }
        }
    }
    return {
        enter
    }
}
