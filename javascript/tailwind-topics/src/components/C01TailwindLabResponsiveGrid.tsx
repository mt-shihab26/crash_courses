const C01TailwindLabResponsiveGrid = () => {
    return (
        <div class="grid min-h-screen place-items-center">
            <div class="grid max-w-5xl gap-4 p-4 xs:grid-cols-2 md:grid-cols-4">
                <h1 class="text-4xl font-extrabold xs:col-span-2 xs:grid xs:grid-cols-2 xs:gap-4 md:col-span-3 md:grid-cols-3">
                    <span class="md:col-span-2">Grid Layout with Tailwind CSS</span>
                </h1>
                <p class="xs:col-start-2 xs:row-start-2 xs:self-center md:col-span-2 md:col-start-1 md:pr-12 md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan a neque vitae.
                </p>
                <div class="xs:square h-16 bg-blue-500 xs:h-auto"></div>
                <div class="xs:square h-16 bg-blue-500 xs:h-auto"></div>
                <div class="xs:square h-16 bg-pink-500 xs:h-auto"></div>
                <div class="xs:square h-16 bg-blue-500 xs:h-auto md:col-start-2"></div>
                <div class="xs:square h-16 bg-pink-500 xs:h-auto"></div>
                <div class="xs:square h-16 bg-blue-500 xs:h-auto"></div>
                <div class="xs:square h-16 bg-blue-500 xs:h-auto"></div>
                <div class="xs:square h-16 bg-pink-500 xs:h-auto"></div>
                <p class="xs:self-center md:col-span-2 md:px-4 md:text-center md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    );
};

export default C01TailwindLabResponsiveGrid;
