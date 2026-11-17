//initial
gsap.set("#info", { opacity: 0, x: 20 });

ScrollTrigger.batch("#info", {
start: "top 50%",
end: "bottom",
onEnter: batch => {
    gsap.to(batch, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    stagger: 0.1,
    overwrite: true
    });
},
onEnterBack: batch => {
    gsap.to(batch, {
    opacity: 1,
    x: 0,
    duration: 1.5,
    stagger: 0.1,
    overwrite: true
    });
},
onLeaveBack: batch => {
    gsap.to(batch, {
    opacity: 0,
    x: 20,
    duration: 1.5,
    stagger: 0.1,
    overwrite: true
    });
}
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
target: '#navbar'
});

const imgElement = document.getElementById('map1');
const container = document.getElementById('mapTitle');
const desc = document.getElementById('mapDesc');

gsap.from([imgElement,container], {
    x: -60,
    opacity: 0, 
    duration: 2, 
    scrollTrigger: {
    trigger: "#map1", 
    start: "top 80%", // Start
    end: "bottom 50%",
    toggleActions: "restart none none none",
    },
});
let pop = false;

const popButton = document.getElementById('switchPop');

function switchPop() {

    // img and left container animation
    gsap.to([imgElement,container], {
        opacity: 0,
        duration: 0.8,
        x: -40,
        overwrite: true,
        onComplete: () => {
        const pop2 = 'img/popularity2.png';
        const pop1 = 'img/popularity1.png';

        container.innerHTML = pop ? 'Popularity' : 'Popularity';
        imgElement.src = pop ? pop2 : pop1;
        pop = !pop;

        gsap.fromTo([imgElement,container],
            { opacity: 0, x: -60},
            { opacity: 1, x: 0, duration: 1, overwrite: true }
        );
        }
    });


    // right column animation
    newDescHTML1 = `
            <h1><strong>By Keyword</strong></h1>
            <p>This map plots every recorded police stop across NYC, with each point color-coded by the race of the person stopped. Black individuals are overwhelmingly represented, making up the majority of stop locations throughout the city.</p>
    `;
    newDescHTML2 = `
            <h1><strong>By Attribute</strong></h1>
            <p>In this version of the map, the stops are color-coded by attribute: blue for male and red for female. Blue clearly dominates the map, showing that the vast majority of police stops involve male individuals, with female stops barely visible in comparison.</p><br>
    `;
    const newDescHTML = pop ? newDescHTML1 : newDescHTML2;

    gsap.to([desc,popButton], {
        opacity: 0,
        duration: 0.8,
        x: 20,
        onComplete: () => {
            desc.innerHTML = newDescHTML;
            
            popButton.textContent = pop ? 'View by Keyword' : 'View by Attribute';

            gsap.fromTo([desc,popButton],
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 1 }
            );
        }
    });
}


gsap.from([document.getElementById('graph2')], {
    x: -60,
    opacity: 0, 
    duration: 2, 
    scrollTrigger: {
    trigger: "#Section2", 
    start: "top 80%", // Start
    end: "bottom 50%",
    toggleActions: "restart none none none",
    },
});

let cluster = false;

cluster1 = `<img src="img/cluster2.png" class="img-fluid mx-2">`
cluster2 = `<div style="min-height:461px" id="datawrapper-vis-l3Zd4"><script type="text/javascript" defer src="https://datawrapper.dwcdn.net/l3Zd4/embed.js" charset="utf-8" data-target="#datawrapper-vis-l3Zd4"></script><noscript><img src="https://datawrapper.dwcdn.net/l3Zd4/full.png" alt="Scatter Plot" /></noscript></div>`

function loadTableau() {
    const div = document.getElementById('viz1794941300380');
    if (!div) return;

    const viz = div.querySelector('object');

    viz.style.width = '100%';
    viz.style.height = (div.offsetWidth * 0.75) + 'px';

    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    div.appendChild(script);
}


function switchCluster() {

    // img and left container animation
    gsap.to([document.getElementById('graph2')], {
        opacity: 0,
        duration: 0.8,
        x: -40,
        overwrite: true,
        onComplete: () => {
        document.getElementById('clusterVisual').innerHTML = cluster ? cluster2 : cluster1;
        cluster = !cluster;

        gsap.fromTo([document.getElementById('graph2')],
            { opacity: 0, x: -60},
            { opacity: 1, x: 0, duration: 1, overwrite: true }
        );
        }
    });


    // right column animation
    newDescHTML1 = `
            <h1><strong>By Keyword</strong></h1>
            <p>This map plots every recorded police stop across NYC, with each point color-coded by the race of the person stopped. Black individuals are overwhelmingly represented, making up the majority of stop locations throughout the city.</p>
    `;
    newDescHTML2 = `
            <h1><strong>By Attribute</strong></h1>
            <p>In this version of the map, the stops are color-coded by attribute: blue for male and red for female. Blue clearly dominates the map, showing that the vast majority of police stops involve male individuals, with female stops barely visible in comparison.</p><br>
    `;
    const newDescHTML = cluster ? newDescHTML1 : newDescHTML2;

    gsap.to([document.getElementById('info2')], {
        opacity: 0,
        duration: 0.8,
        x: 20,
        onComplete: () => {
            desc.innerHTML = newDescHTML;
            
            document.getElementById('clusterButton').textContent = cluster ? 'View Scatterplot' : 'View Table';

            gsap.fromTo([document.getElementById('info2')],
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 1 }
            );
        }
    });
}

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
target: '#navbar'
});