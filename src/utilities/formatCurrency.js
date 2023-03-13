const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(amount) {
  return CURRENCY_FORMATTER.format(amount);
}
