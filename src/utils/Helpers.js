export function toCurrency(amount = 0) {
    return amount.toLocaleString(
        "en-NG",
        { currency: "NGN", style: "currency" }
    );
}