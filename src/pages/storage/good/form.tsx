import {Box, TextField, InputAdornment} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

interface GoodsFormProps {
    ref: any
}
const GoodsForm = (props: GoodsFormProps) => {
    return (
        <>
            <Box
                component="form"
            >
                <Grid className={'p-1'} container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                    <Grid xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="goodsName"
                            label="商品名称"
                            className={"w-full"}
                        />
                    </Grid>
                    <Grid xs={6} sm={6} md={4}>
                        <TextField
                            required
                            id="goodsCode"
                            label="商品编号"
                        />
                    </Grid>
                    <Grid xs={6} sm={6} md={4}>
                        <TextField
                            id="price"
                            label="商品价格"
                            type={"number"}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
                            InputProps={{
                                endAdornment: <InputAdornment position="start">元</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid xs={6} sm={6} md={4}>
                        <TextField
                            id="goodsNum"
                            label="商品数量"
                            type="number"
                            InputProps={{
                                endAdornment: <InputAdornment position="start">件</InputAdornment>,
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default GoodsForm
