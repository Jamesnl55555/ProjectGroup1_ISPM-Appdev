import Inventory from '@/Components/Inventory';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head} from '@inertiajs/react';
import AddProduct from '@/Components/AddProduct';
import MakeCapital from '@/Components/MakeCapital';
import ProductHistory from '@/Components/ProductHistory';
import UserHistory from '@/Components/UserHistory';
import TransactionHistory from '@/Components/TransactionHistory';
import Transaction from '@/Components/Transaction';
import { MantineProvider } from '@mantine/core';
import Menu from '@/Components/Menu';
import Import from '@/Components/Import';
import TransactionRecords from '@/Components/TransactionRecords';

export default function Dashboard({user, tHistory, pHistory, uHistory, tRecords}) {
    
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <AuthenticatedLayout
                header={
                    <>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                    <MakeCapital />
                    <Menu />
                    </>
                
                }
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                You're logged in!
                            </div>
                            <Import />
                            <h1>Inventory Management</h1>
                            <h1>Capital: {user.capital}</h1>
                            <Inventory products={user.products} />
                            <AddProduct />
                        </div>
                        <div>
                            <h1>=================================</h1>
                            <UserHistory user={user} uHistory={uHistory} />
                            
                            <h1>=================================</h1>
                            <TransactionHistory tHistory={tHistory} />
                            
                            <h1>=================================</h1>
                            <ProductHistory pHistory={pHistory} />

                            <h1>==================================</h1>

                            <TransactionRecords tRecords={tRecords} />
                            <h1>==================================</h1>
                            <Transaction products={user.products} />
                            
                        </div>
                        
                    </div>
                </div>
            </AuthenticatedLayout>
        </MantineProvider>
    );
    
console.log(user);
console.log(transaction);
console.log(product);
}
