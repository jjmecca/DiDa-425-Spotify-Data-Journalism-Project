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
        imgElement.src = pop ? pop1 : pop2;
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


gsap.from([document.getElementById('section2-content')], {
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


let cluster = 0;

const cluster1 = `<img src="img/cluster2.png" class="img-fluid mx-2">`;

const cluster2 = `<div style="min-height:100%" id="datawrapper-vis-l3Zd4">
    <iframe src="https://datawrapper.dwcdn.net/l3Zd4/"
        style="width:100%; height:600px; border:0;"
        title="Scatter Plot"></iframe>
</div>`;

const cluster3 = `<img src="img/cluster3.png" class="img-fluid mx-2">`;

const visuals = [cluster2, cluster1, cluster3];

const descriptions = [
    `<h1><strong>Clustering by Keyword</strong></h1>
     <p>Description for the first visualization.</p>`,

    `<h1><strong>Clustering by Attribute</strong></h1>
     <p>Description for the second visualization.</p>`,

    `<h1><strong>Third Visualization</strong></h1>
     <p>Description for the third visualization.</p>`
];

const labels = ["View Scatterplot", "View Third Option", "View First Option"];

function switchCluster() {
    cluster = (cluster + 1) % 3;

    // Left column animation
    gsap.to("#section2-content", {
        opacity: 0,
        duration: 0.8,
        x: -40,
        overwrite: true,
        onComplete: () => {
            document.getElementById("clusterVisual").innerHTML = visuals[cluster];

            gsap.fromTo("#section2-content",
                { opacity: 0, x: -60 },
                { opacity: 1, x: 0, duration: 1, overwrite: true }
            );
        }
    });

    // Right column animation
    gsap.to("#info2", {
        opacity: 0,
        duration: 0.8,
        x: 20,
        overwrite: true,
        onComplete: () => {
            document.getElementById("desc2").innerHTML = descriptions[cluster];
            document.getElementById("clusterButton").textContent = labels[cluster];

            gsap.fromTo("#info2",
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 1 }
            );
        }
    });
}

// attribute dropdown

document.querySelectorAll("#attribute1 .dropdown-item").forEach(item => {
    item.addEventListener("click", function(e) {
        e.preventDefault();

        document.getElementById("distribution_img").src = this.dataset.img;
        document.getElementById("attribute").textContent = this.textContent;
    });
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
target: '#navbar'
});