// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">About this handbook</a></span></li><li class="chapter-item expanded "><li class="part-title">Start here</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="00-start-here/01-how-to-judge-medical-advice.html"><strong aria-hidden="true">1.</strong> Chapter 1: How to Judge Medical Advice</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="00-start-here/02-how-to-use-this-book.html"><strong aria-hidden="true">2.</strong> How to Use This Book, and How to Look Up Anything Else</a></span></li><li class="chapter-item expanded "><li class="part-title">The body</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/blood.html"><strong aria-hidden="true">3.</strong> Blood: Cells, Clotting and Blood Groups</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/bones-muscles-skin.html"><strong aria-hidden="true">4.</strong> Bones, Joints, Muscles and Skin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/brain-and-nervous-system.html"><strong aria-hidden="true">5.</strong> The Brain and Nervous System</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/cells-and-cancer-basics.html"><strong aria-hidden="true">6.</strong> Cells, Genes and How Cancer Starts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/digestive-system.html"><strong aria-hidden="true">7.</strong> The Digestive System</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/endocrine-system.html"><strong aria-hidden="true">8.</strong> The Endocrine System: Thyroid, Pancreas, Adrenals and Pituitary</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/heart-and-circulation.html"><strong aria-hidden="true">9.</strong> The Heart and Circulation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/hormones-metabolism-homeostasis.html"><strong aria-hidden="true">10.</strong> Metabolism, Cholesterol, Inflammation, Electrolytes and Acid-Base</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/immune-system.html"><strong aria-hidden="true">11.</strong> The Immune System</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/kidneys.html"><strong aria-hidden="true">12.</strong> The Kidneys and Urinary System</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/liver-and-gallbladder.html"><strong aria-hidden="true">13.</strong> The Liver and Gallbladder: How They Work</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/lungs-and-breathing.html"><strong aria-hidden="true">14.</strong> The Lungs and Breathing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-body/reproductive-system.html"><strong aria-hidden="true">15.</strong> The Reproductive System</a></span></li><li class="chapter-item expanded "><li class="part-title">Diseases (worked examples)</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/anaemia.html"><strong aria-hidden="true">16.</strong> Anaemia</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/asthma-and-copd.html"><strong aria-hidden="true">17.</strong> Asthma and COPD</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/chronic-kidney-disease.html"><strong aria-hidden="true">18.</strong> Chronic Kidney Disease (CKD)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/common-cancers-in-india.html"><strong aria-hidden="true">19.</strong> Common Cancers in India</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/common-digestive-diseases.html"><strong aria-hidden="true">20.</strong> Common Digestive Diseases: Acidity, Ulcers, IBS, Gallstones and Piles</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/common-fevers-india.html"><strong aria-hidden="true">21.</strong> Common Fevers in India: Dengue, Malaria, Typhoid and Viral Fever</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/coronary-heart-disease.html"><strong aria-hidden="true">22.</strong> Coronary Heart Disease and Heart Attack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/diabetes.html"><strong aria-hidden="true">23.</strong> Diabetes and Blood Sugar</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/high-blood-pressure.html"><strong aria-hidden="true">24.</strong> High Blood Pressure (Hypertension)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/kidney-stones-uti-and-aki.html"><strong aria-hidden="true">25.</strong> Kidney stones, urinary infection and acute kidney injury</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/liver.html"><strong aria-hidden="true">26.</strong> Liver, Fatty Liver and Hepatitis</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/mental-health-basics.html"><strong aria-hidden="true">27.</strong> Mental Health Basics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/obesity-and-metabolic-syndrome.html"><strong aria-hidden="true">28.</strong> Obesity and Metabolic Syndrome</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/osteoporosis-and-arthritis.html"><strong aria-hidden="true">29.</strong> Osteoporosis and Arthritis</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/pcos-and-womens-health.html"><strong aria-hidden="true">30.</strong> PCOS and Common Women&#39;s Health Problems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/stroke.html"><strong aria-hidden="true">31.</strong> Stroke</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/thyroid.html"><strong aria-hidden="true">32.</strong> Thyroid</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-diseases/tuberculosis.html"><strong aria-hidden="true">33.</strong> Tuberculosis (TB)</a></span></li><li class="chapter-item expanded "><li class="part-title">Tests and reports</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/01-how-lab-reports-work.html"><strong aria-hidden="true">34.</strong> Chapter 2: How Lab Reports Work (and Why They Mislead)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/cbc.html"><strong aria-hidden="true">35.</strong> Complete Blood Count (CBC)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/choosing-a-lab-and-spotting-wrong-reports.html"><strong aria-hidden="true">36.</strong> Choosing a Lab and Spotting Wrong Reports</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/imaging-and-ecg-reports.html"><strong aria-hidden="true">37.</strong> Imaging and ECG Reports: X-ray, Ultrasound, CT, MRI, ECG and Echo</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/inflammation-infection-and-heart-markers.html"><strong aria-hidden="true">38.</strong> Inflammation, Infection and Heart Marker Tests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/lipid-profile.html"><strong aria-hidden="true">39.</strong> The Lipid Profile (Cholesterol Test)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/liver-and-kidney-tests.html"><strong aria-hidden="true">40.</strong> Liver Function Tests (LFT) and Kidney Function Tests (KFT)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/urine-tests.html"><strong aria-hidden="true">41.</strong> Urine Tests</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tests/vitamins-and-iron-studies.html"><strong aria-hidden="true">42.</strong> Vitamin and Iron Tests</a></span></li><li class="chapter-item expanded "><li class="part-title">Medicines</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-medicines/antibiotics-and-resistance.html"><strong aria-hidden="true">43.</strong> Antibiotics and Resistance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-medicines/common-drug-classes.html"><strong aria-hidden="true">44.</strong> Common Drug Classes for Long-Term Conditions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-medicines/fdc-and-spurious-drugs.html"><strong aria-hidden="true">45.</strong> Fixed-Dose Combinations and Spurious Drugs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-medicines/generic-brand-and-prices.html"><strong aria-hidden="true">46.</strong> Generic, Brand and Prices (India)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-medicines/how-medicines-work.html"><strong aria-hidden="true">47.</strong> How Medicines Work</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-medicines/interactions-and-special-groups.html"><strong aria-hidden="true">48.</strong> Interactions, Pregnancy, Children, Older People and Safe Use</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-medicines/painkillers-steroids-acidity-supplements.html"><strong aria-hidden="true">49.</strong> Painkillers, Steroids, Acidity Pills and Supplements</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-medicines/reading-a-prescription.html"><strong aria-hidden="true">50.</strong> Reading a Prescription</a></span></li><li class="chapter-item expanded "><li class="part-title">Nutrition</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="05-nutrition/diet-myths-and-special-diets.html"><strong aria-hidden="true">51.</strong> Diet Myths and Special Diets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="05-nutrition/nutrition-and-the-indian-diet.html"><strong aria-hidden="true">52.</strong> Nutrition and the Indian Diet</a></span></li><li class="chapter-item expanded "><li class="part-title">Life stages</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-life-stages/ageing-and-elderly-care.html"><strong aria-hidden="true">53.</strong> Ageing and Elderly Care</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-life-stages/childrens-health.html"><strong aria-hidden="true">54.</strong> Children&#39;s Health</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-life-stages/pregnancy-and-childbirth.html"><strong aria-hidden="true">55.</strong> Pregnancy and Childbirth</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-life-stages/skin-eyes-ears-and-teeth.html"><strong aria-hidden="true">56.</strong> Skin, Eyes, Ears and Teeth</a></span></li><li class="chapter-item expanded "><li class="part-title">Prevention</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="07-prevention/lifestyle-activity-sleep-tobacco-alcohol.html"><strong aria-hidden="true">57.</strong> Lifestyle: Activity, Sleep, Tobacco, Alcohol and Everyday Safety</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="07-prevention/screening-and-checkups.html"><strong aria-hidden="true">58.</strong> Screening and Health Check-ups</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="07-prevention/vaccines-and-immunisation.html"><strong aria-hidden="true">59.</strong> Vaccines and Immunisation</a></span></li><li class="chapter-item expanded "><li class="part-title">Decisions</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="08-decisions/second-opinions-and-treatment-decisions.html"><strong aria-hidden="true">60.</strong> Second Opinions and Treatment Decisions</a></span></li><li class="chapter-item expanded "><li class="part-title">Indian healthcare</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="09-indian-healthcare/health-misinformation.html"><strong aria-hidden="true">61.</strong> Health Misinformation: WhatsApp, YouTube, Influencers and &quot;Natural Cures&quot;</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="09-indian-healthcare/hospitals-bills-and-insurance.html"><strong aria-hidden="true">62.</strong> Hospitals, Bills and Health Insurance (India)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="09-indian-healthcare/patient-rights-and-complaints.html"><strong aria-hidden="true">63.</strong> Patient Rights and How to Complain (India)</a></span></li><li class="chapter-item expanded "><li class="part-title">Practical</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-practical/first-aid-and-emergencies.html"><strong aria-hidden="true">64.</strong> First Aid and Emergencies</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-practical/worked-examples.html"><strong aria-hidden="true">65.</strong> Worked Examples and Your Health Records</a></span></li><li class="chapter-item expanded "><li class="part-title">Appendix</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/GLOSSARY.html"><strong aria-hidden="true">66.</strong> Glossary</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/POCKET-CARDS.html"><strong aria-hidden="true">67.</strong> Pocket Cards</a></span></li><li class="chapter-item expanded "><li class="part-title">About the book</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ROADMAP.html"><strong aria-hidden="true">68.</strong> Roadmap and scope</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="REVIEW-GUIDE.html"><strong aria-hidden="true">69.</strong> Guide for the reviewing doctor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="FACT-CHECK-LOG.html"><strong aria-hidden="true">70.</strong> Fact-check log</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="IMAGE-CREDITS.html"><strong aria-hidden="true">71.</strong> Image credits</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

