<script>

    let isOpen = false;

    function setIsOpen() {
        isOpen = !isOpen;
    } 

</script>

    <div id="navbar">
        <div class="asmo__navbar">
            <div class="flex flex-col justify-between lg:flex-row lg:py-1 lg:px-24">
                <div class="flex justify-between items-center px-4 py-4">
                    <div class="asmo__logo">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="16" transform="rotate(180 16 16)" fill="url(#paint0_linear_868_66)"/>
                            <defs>
                                <linearGradient id="paint0_linear_868_66" x1="16" y1="1.90735e-06" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#28665E"/>
                                    <stop offset="1" stop-color="#F8F7F3"/>
                                </linearGradient>
                            </defs>
                        </svg>          
                    </div>
                    <div class="asmo__navbar-hamburger">
                        <div class="block lg:hidden">
                            <button class="" on:click={()=> (isOpen = !isOpen)}>
                                <svg class="w-6 h-6" fill="none" stroke="#161616"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path on:change={setIsOpen} class={`${!isOpen
                                    ? "block" : "hidden" } `}
                                    stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                                    <path on:change={setIsOpen} class={`${isOpen
                                    ? "block" : "hidden" } `}
                                    stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="asmo__navbar-items">
                    <div class={`${isOpen ? "block" : "hidden" } items-center h-screen flex flex-col py-4 lg:py-0 lg:flex lg:flex-row lg:h-full`}>
                        <a class="font-semibold px-4 py-8 underline-offset-4 hover:underline hover:decoration-2 hover:decoration-wavy lg:py-0 text-moon-black-900 hover:text-moon-green-900" href="/">Home</a>
                        <a class="font-semibold px-4 py-8 underline-offset-4 hover:underline hover:decoration-2 hover:decoration-wavy lg:py-0 text-moon-black-900 hover:text-moon-green-900" href="/about">About</a>
                        <a class="font-semibold px-4 py-8 underline-offset-4 hover:underline hover:decoration-2 hover:decoration-wavy lg:py-0 text-moon-black-900 hover:text-moon-green-900" href="/projects">Projects</a>
                        <a class="font-semibold px-4 py-8 underline-offset-4 hover:underline hover:decoration-2 hover:decoration-wavy lg:py-0 text-moon-black-900 hover:text-moon-green-900" href="/showcases">Showcases</a>
                        <a class="font-semibold px-4 py-8 underline-offset-4 hover:underline hover:decoration-2 hover:decoration-wavy lg:py-0 text-moon-black-900 hover:text-moon-green-900" href="/blog">Blog</a>
                    </div>
                </div>
        </div>
    </div>
</div>