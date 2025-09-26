import Inventory from '@/Components/Inventory';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head} from '@inertiajs/react';
import AddProduct from '@/Components/AddProduct';
import MakeCapital from '@/Components/MakeCapital';
import ProductHistory from '@/Components/ProductHistory';
import UserHistory from '@/Components/UserHistory';
import TransactionHistory from '@/Components/TransactionHistory';

export default function Dashboard({user, transaction, product}) {
    
    return (
        <AuthenticatedLayout
            header={
                <>
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
                <MakeCapital />
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
                        <h1>Inventory Management</h1>
                        <h1>Capital: {user.capital}</h1>
                        <Inventory products={user.products} />
                        <AddProduct />
                    </div>
                    <div>
                        <UserHistory user={user} uHistory={user.userHistories} />
                        <TransactionHistory tHistory={transaction.transactionHistories} />
                        <ProductHistory product={product} pHistory={product.productHistories}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
