import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { TProps, TPizza } from "@/types";
import Table from "@/Components/Table";

const Pizzas = (p: TProps<{ pizzas: TPizza[] }>) => {
    return (
        <AuthenticatedLayout
            user={p.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Pizzas List</h2>
            }
        >
            <Head title="Pizzas List" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Table
                                items={p.pizzas}
                                columns={["size", "status", "chef"]}
                                primary="Order Number"
                                action="pizzas.edit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Pizzas;
