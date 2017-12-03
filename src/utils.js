export const amountString = (value, { decimals = 2 } = {}) => {
  if (!value || isNaN(parseInt(value, 10))) {
    return ''
  }

  return parseFloat(value, 10).toFixed(decimals)
}

export const money = (value, { decimals, currency = '€' } = {}) => {
  const valueToString = amountString(value, { decimals })

  if (!valueToString) {
    return `0,00${currency}`
  }

  return `${valueToString.replace(/\./g, ',')}${currency}`
}