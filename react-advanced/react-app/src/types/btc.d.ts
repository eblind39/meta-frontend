interface BTCType {
    time: BtcTime
    disclaimer: string
    chartName: string
    bpi: BtcBpi
}

interface BtcTime {
    updated: string
    updatedISO: string
    updateduk: string
}

interface BtcBpi {
    USD: BpiType
    GBP: BpiType
    EUR: BpiType
}
  
interface BpiType {
    code: string
    symbol: string
    rate: string
    description: string
    rate_float: number
}

export default BTCType;

export { BtcTime, BtcBpi, BpiType };