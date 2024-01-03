import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { TProps, TPizza } from "@/types";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import SelectInput from "@/Components/SelectInput.jsx";

function UpdatePizzaOrderForm({ pizza, className = "" }: { pizza: TPizza; className?: string }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        size: pizza.size,
        crust: pizza.crust,
        toppings: pizza.toppings.join(", "),
        status: pizza.status,
    });

    const statusOptions = ["Ordered", "Prepping", "Baking", "Checking", "Ready"];

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Order Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={e => {
        e.preventDefault();

        patch(route("pizzas.update", pizza.id));
    }} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="size" value="Size" />

                    <TextInput id="size" className="mt-1 block w-full" value={data.size} disabled />
                </div>

                <div>
                    <InputLabel htmlFor="crust" value="Crust" />

                    <TextInput id="crust" className="mt-1 block w-full" value={data.crust} disabled />
                </div>

                <div>
                    <InputLabel htmlFor="toppings" value="Toppings" />

                    <TextInput id="name" className="mt-1 block w-full" value={data.toppings} disabled />
                </div>

                <div>
                    <InputLabel htmlFor="status" value="Status" />

                    <SelectInput
                        id="status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={data.status}
                        onChange={e => setData("status", e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.status} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}

const EditPizza = (p: TProps<{ pizza: TPizza }>) => {
    const title = `Edit Pizza Order #${p.pizza.id}`;
    return (
        <AuthenticatedLayout
            user={p.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{title}</h2>}
        >
            <Head title={title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <UpdatePizzaOrderForm pizza={p.pizza} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditPizza;
