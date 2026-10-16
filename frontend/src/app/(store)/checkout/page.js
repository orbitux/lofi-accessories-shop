import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import ShippingForm from "@/components/checkout/ShippingForm";

export default function checkoutPage() {
    return (
        <main>
            <CheckoutHeader />
            <ShippingForm />
            <OrderSummary />
        </main>
    )
}