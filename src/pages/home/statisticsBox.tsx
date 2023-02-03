import {Box, Button, Card, Typography} from "@mui/material";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import MovingIcon from '@mui/icons-material/Moving';
import {red} from "@mui/material/colors";
interface BoxProp {
    label: string;
    value: string;
    type: "1" | "2" | "3";
    rate: string;
}
export default function StatisticBox () {
    const boxData: BoxProp[] = [
        { label: '销售数量', value: '128', type: '1', rate: '+18.4%'},
        { label: '销售金额', value: '982', type: '2', rate: '+8.9%' },
        // { label: '环比', value: '1.54%', type: '3', icon: <MovingIcon /> },
    ]
    function renderBox () {
        return boxData.map(item => {
          return  <Box
              key={item.value}
              sx={{
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
              }}
          >
              <Box sx={{ color: 'text.secondary' }}>{item.label}</Box>
              <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                  {item.value}
              </Box>
              <Box
                  sx={{
                      color: 'success.dark',
                      display: 'inline',
                      fontWeight: 'bold',
                      mx: 0.5,
                      fontSize: 14,
                  }}
              >
                  {item.rate}
              </Box>
              <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                  相较于上周
              </Box>
          </Box>
        })
    }
    return (
        <>
            <Box className={'flex flex-col pt-2 pb-4'}>
                <div className={'w-full text-right'}>
                    <Button>每周统计</Button>
                </div>
                <div className={'flex -flex-row justify-around'}>
                    {renderBox()}
                </div>
            </Box>
        </>
    )
}
