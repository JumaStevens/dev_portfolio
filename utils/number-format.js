const locale = 'en-US'

export const formatPrice = (number, minimumFractionDigits = 2) => {
  const options = {
    minimumFractionDigits
  }
  return new Intl.NumberFormat(locale, options).format(number)
}

export const formatCompact = (number) => {
  const options = {
    compactDisplay: 'short',
    notation: 'compact'
  }
  return new Intl.NumberFormat(locale, options).format(number)
}

export const formatPercent = (number) => {
  const options = {
    style: 'percent'
  }
  return new Intl.NumberFormat(locale, options).format(number)
}
