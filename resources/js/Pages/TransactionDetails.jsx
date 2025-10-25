import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { MantineProvider } from '@mantine/core';
import Menu from '@/Components/Menu';

export default function TransactionDetails({transaction}){
    return(
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <AuthenticatedLayout
    header={
        <>
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Dashboard
        </h2>
        <Menu />
        </>
    }>
    <div>
    <h1>Transaction Details</h1>
    <strong>User: </strong> {transaction.user_name}
    <br/>
    <strong>Quantity: </strong> {transaction.quantity}
    <br/>
    <strong>Price: </strong> {transaction.price}
    <br/>
    <strong>Total Amount: </strong> {transaction.total_amount}
    </div>
    </AuthenticatedLayout>
    </MantineProvider>
    );
}