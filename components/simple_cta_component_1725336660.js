<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" style="min-height: 350px" class="bg-gray-50 dark:bg-gray-800 flex-1">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Bolt Up Your Gameday Experience!
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                        Get exclusive content, real-time updates, and connect with fellow Chargers fans like never before.
                    </p>
                </div>

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                        Join the Bolt Fam
                        Join the Bolt Fam
                    </a>
                    <a id="free-button" href="#" class="flex-1 text-purple-700 bg-white hover:bg-gray-100 border border-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-purple-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-purple-800">
                        Free
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
