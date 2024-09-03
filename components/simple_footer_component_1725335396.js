<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8" style="min-height: 390px;"><div id="footer-container" class="max-w-screen-xl mx-auto" style=""><hr id="footer-divider" class="my-6 border-pink-300 opacity-30 sm:mx-auto lg:my-8"> <div id="footer-content" class="text-center"><div class="flex"><a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition duration-300" style="" data-mf-new="true"><img id="footer-logo" src="https://makeinfinite-mentat-dev.azurewebsites.net/get_image/Chargers_Creation_App_1725335394/logo.svg" alt="Landwind Logo" class="h-8 mr-3 sm:h-10 filter brightness-0 invert">
                        Bolt Booster: Chargers Success Hub's</a></div></div> <div class="flex"><div id="footer-text" class="flex-1 block text-sm text-center text-pink-100 hover:text-white transition duration-300">
                    © 2023 Bolt Booster. Empowering the Los Angeles Chargers to electrify the field. All rights reserved.
                </div></div></div></footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
