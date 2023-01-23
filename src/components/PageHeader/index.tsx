import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {IconButton} from "@mui/material";
import {useRouter} from "next/router";
const PageHeader =  () => {
    const router = useRouter()
    function handleBack () {
        router.back()
    }

    return (
        <header className={'flex-row center mt-1 mb-1 p-2'}>
            <IconButton aria-label="back" size="large" onClick={handleBack}>
                <KeyboardBackspaceIcon style={{color: 'rgb(var(--foreground-rgb))'}} fontSize="large"></KeyboardBackspaceIcon>
            </IconButton>
        </header>
    )
}

export default PageHeader
